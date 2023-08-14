package main

import (
	"fmt"
	"io"
	"os"
	"path"
)

const WORKER_UNCLE_PATH = "workerUncle"

func main() {

}

func work(InstallPackagePath: string){
	//1.获取安装路径
	InstallPath := initEnv()
	//2.copy文件
	install(InstallPath, InstallPackagePath)
}

func install(InstallPath string, InstallPackagePath string) {
	entries, err := os.ReadDir(InstallPackagePath)
	if err != nil {
		return
	}
	for _, file := range entries {
		isDir := file.IsDir()
		//如果是目录，就先跳过
		if isDir {
			InstallPath = path.Join(InstallPath, file.Name())
			InstallPackagePath = path.Join(InstallPackagePath, file.Name())
			install(InstallPath, InstallPackagePath)
			continue
		}
		//如果是文件，就copy
		SourceFileNamePath := path.Join(InstallPackagePath, file.Name())
		DestFileNamePath := path.Join(InstallPath, file.Name())
		err := os.MkdirAll(InstallPath, 0755)
		//如果目标目录不存在，就创建
		if err != nil {
			fmt.Println("Error creating nested directory:", err)
			continue
		}
		sourceFile, err := os.Open(SourceFileNamePath)
		if err != nil {
			fmt.Println("Error opening source file:", err)
			continue
		}
		defer sourceFile.Close()
		destFile, err := os.Create(DestFileNamePath)
		if err != nil {
			fmt.Println("Error creating destination file:", err)
			continue
		}
		defer destFile.Close()

		_, err = io.Copy(destFile, sourceFile)
		if err != nil {
			fmt.Println("Error copying data:", err)
			continue
		}
	}
}

func initEnv() (InstallPath string) {
	home, err := os.UserHomeDir()
	if err != nil {
		panic("cannot get home path!!!")
	}
	InstallPath = path.Join(home, WORKER_UNCLE_PATH)
	return
}
