import {
  CopyOutlined,
  ForkOutlined,
  LeftOutlined,
  StarOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Col, ConfigProvider, List, Radio, Row, Space } from 'antd';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
export default function () {
  return (
    <Row>
      <Col
        span={24}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ConfigProvider
          theme={{
            components: {
              Radio: {
                buttonCheckedBg: '#FAE9E5',
                buttonColor: '#737A84',
                buttonSolidCheckedColor: '#DE6E6B',
                colorPrimary: '#DE6E6B',
                colorPrimaryBorder: '#DE6E6B',
                colorPrimaryHover: '#DE6E6B',
                borderRadius: 0,
                padding: 30,
              },
            },
          }}
        >
          <Radio.Group defaultValue={1}>
            <Radio.Button value={1}>
              <Space>
                <ToolOutlined />
                待办
              </Space>
            </Radio.Button>
            <Radio.Button value={2}>
              <Space>
                <StarOutlined />
                节假
              </Space>
            </Radio.Button>
            <Radio.Button value={3}>
              <Space>
                <UserOutlined />
                生日
              </Space>
            </Radio.Button>
            <br />
            <Radio.Button value={4}>
              <Space>
                <LeftOutlined />
                提醒
              </Space>
            </Radio.Button>
            <Radio.Button value={5}>
              <Space>
                <ForkOutlined />
                习惯
              </Space>
            </Radio.Button>
            <Radio.Button value={6}>
              <Space>
                <CopyOutlined />
                笔记
              </Space>
            </Radio.Button>
          </Radio.Group>
        </ConfigProvider>
      </Col>
      <List
        dataSource={data}
        renderItem={(item) => (
          <>
            <List.Item>{item}</List.Item>
          </>
        )}
      ></List>
    </Row>
  );
}
