import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Image, Row } from 'antd';

interface ShowCardProps {
  title: string;
  imgWidth: number;
  imgSrc: string;
  description: string;
}

const ShowCard = ({ data }: { data: ShowCardProps }) => {
  return (
    <Card
      title={data.title}
      bodyStyle={{
        minHeight: 150,
      }}
      extra={<Image width={data.imgWidth} src={data.imgSrc}></Image>}
    >
      {data.description}
    </Card>
  );
};

export default function () {
  const cardDatas: Array<ShowCardProps> = [
    {
      title: 'workerUncle',
      imgWidth: 40,
      imgSrc: '/workeruncle.jpeg',
      description: `
        负责在宿主机上进行各种软件环境的安装
      `,
    },
    {
      title: 'workerUnion',
      imgWidth: 100,
      imgSrc: '/union.jpg',
      description: `
        负责管理rpc客户端和服务端的注册
      `,
    },
    {
      title: 'chief',
      imgWidth: 40,
      imgSrc: '/chief.jpeg',
      description: `
        负责调度各个小兵的运行
      `,
    },
  ];
  return (
    <>
      <PageContainer>
        <Row gutter={24}>
          {cardDatas.map((cardData, idx) => {
            return (
              <Col span={4} key={idx}>
                <ShowCard data={cardData} />
              </Col>
            );
          })}
        </Row>
      </PageContainer>
    </>
  );
}
