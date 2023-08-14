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
    <Card title={data.title} extra={<Image width={data.imgWidth} src={data.imgSrc}></Image>}>
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
  ];
  return (
    <>
      <PageContainer>
        <Row>
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
