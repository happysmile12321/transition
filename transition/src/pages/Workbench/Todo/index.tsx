import { PlusOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import TodoOperation from './components/TodoOperation';

const Todo = () => {
  return (
    <>
      <ProCard
        bordered
        split="vertical"
        headerBordered
        extra={
          <>
            <Space>
              <Button>
                <PlusOutlined />
                添加分类
              </Button>
              <Button>
                <PlusOutlined />
                添加待办
              </Button>
            </Space>
          </>
        }
      >
        <ProCard colSpan={'400px'}>
          <TodoOperation />
        </ProCard>
        <ProCard>2222</ProCard>
      </ProCard>
    </>
  );
};
export default Todo;
