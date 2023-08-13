/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/',
    name: '工作台',
    component: './Welcome',
  },
  {
    path: '/jobs',
    name: '求职管理',
    routes: [
      {
        path: '/jobs/companyInfo',
        name: '公司情报收集',
        routes: [
          {
            path: '/jobs/companyInfo/mainServices',
            name: '主营业务',
          },
          {
            path: '/jobs/companyInfo/moneyInfo',
            name: '财务状况',
          },
          {
            path: '/jobs/companyInfo/moneyGet',
            name: '薪酬待遇',
          },
        ],
      },
      {
        path: '/jobs/enterDo',
        name: '职前评估',
        routes: [
          {
            path: '/jobs/enterDo/jobThings',
            name: '职后工作分析',
          },
          {
            path: '/jobs/enterDo/guihua',
            name: '发展规划分析',
          },
          {
            path: '/jobs/enterDo/gettingAnalysis',
            name: '潜在收益分析',
          },
        ],
      },
      {
        path: '/jobs/enterIn',
        name: '试用期评估',
        routes: [
          {
            path: '/jobs/enterIn/workContentMatch',
            name: '工作内容匹配度重打分',
          },
          {
            path: '/jobs/enterIn/workPayMatch',
            name: '工作待遇匹配度重打分',
          },
          {
            path: '/jobs/enterIn/workFenweiMatch',
            name: '工作氛围打分',
          },
          {
            path: '/jobs/enterIn/bossMatch',
            name: '领导会议打分',
          },
        ],
      },
      {
        path: '/jobs/enterOut',
        name: '职后评估',
        routes: [
          {
            path: '/jobs/enterOut/abilityMatchService',
            name: '工作内容和业务能力匹配度',
          },
          {
            path: '/jobs/enterOut/abilityMatchTech',
            name: '工作内容和技术能力匹配度',
          },
          {
            path: '/jobs/enterOut/abilityWorkContent',
            name: '工作过程中能力成长',
          },
        ],
      },
      {
        path: '/jobs/review',
        name: '简历管理',
        routes: [
          {
            path: '/jobs/review/abilityGet',
            name: '综合能力整合',
          },
          {
            path: '/jobs/review/reviewGenerate',
            name: '简历生成',
          },
        ],
      },
    ],
  },
  {
    path: '/tech',
    name: '能力管理',
    routes: [
      {
        path: '/tech/direction',
        name: '后端技术领域特定',
        routes: [
          {
            path: '/tech/direction/backendFramework',
            name: '后端框架',
            routes: [
              {
                path: '/tech/direction/backendFramework/java',
                name: 'java',
              },
              {
                path: '/tech/direction/backendFramework/go',
                name: 'go',
              },
            ],
          },
          {
            path: '/tech/direction/backendData',
            name: '数据库',
            routes: [
              {
                path: '/tech/direction/backendData/oracle_database',
                name: 'oracle',
              },
              {
                path: '/tech/direction/backendData/mysql_database',
                name: 'mysql',
              },
              {
                path: '/tech/direction/backendData/redis_database',
                name: 'redis',
              },
              {
                path: '/tech/direction/backendData/mongo_database',
                name: 'mongo',
              },
            ],
          },
          {
            path: '/tech/direction/codingTool',
            name: '编码工具',
            routes: [
              {
                path: '/tech/direction/codingTool/idea',
                name: 'idea',
              },
              {
                path: '/tech/direction/codingTool/vscode',
                name: 'vscode',
              },
            ],
          },
          {
            path: '/tech/direction/codingStyle',
            name: '编码风格管理',
          },
          {
            path: '/tech/direction/designPattern',
            name: '设计模式',
          },
          {
            path: '/tech/direction/codingThinking',
            name: '编程思想',
          },
        ],
      },
      {
        path: '/tech/prac',
        name: '领域实践',
        routes: [
          {
            path: '/tech/prac/project',
            name: '实战项目管理',
          },
        ],
      },
      {
        path: '/tech/value',
        name: '价值管理',
        routes: [
          {
            path: '/tech/value/service',
            name: '业务管理',
          },
          {
            path: '/tech/value/AITool',
            name: 'AI工具',
          },
        ],
      },
    ],
  },
  {
    path: '/heart',
    name: '心学管理',
    component: './Welcome',
  },
  {
    path: '/learningMethod',
    name: '学习方法管理',
    component: './Welcome',
  },
];
