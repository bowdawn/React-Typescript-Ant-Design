import React, { FC, useState } from 'react';
import Header from 'src/components/header';
import {
  message,
  Space,
  Row,
  Col,
  Radio,
  Tabs,
  Carousel,
  Card,
  Tag,
  Collapse,
  Button,
  Modal,
  Divider,
} from 'antd';
import Icon, {
  SaveOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  DownOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { ReactComponent as Checkbox } from 'src/assets/icons/checkbox.svg';
import { ReactComponent as SaveIcon } from 'src/assets/icons/save.svg';
const { TabPane } = Tabs;
const { Panel } = Collapse;

const myPlans = [
  { label: '나의 플랜 1', value: 'a' },
  { label: '나의 플랜 2', value: 'b' },
  { label: '나의 플랜 3', value: 'c' },
];

const tabs = [
  {
    title: '3대질병',
    cards: [
      { content: '3대질병 content 1 ' },
      { content: '3대질병 content 2 ' },
    ],
  },
  {
    title: '4대질병',
    cards: [
      { content: '4대질병 content 1 ' },
      { content: '4대질병 content 2 ' },
    ],
  },
  {
    title: '운전자보험',
    cards: [
      { content: '운전자보험 content 1 ' },
      { content: '운전자보험 content 2 ' },
    ],
  },
  {
    title: '암보혐',
    cards: [{ content: '암보혐 content 1 ' }, { content: '암보혐 content 2 ' }],
  },
  {
    title: '실손보험',
    cards: [
      { content: '실손보험 content 1 ' },
      { content: '실손보험 content 2 ' },
    ],
  },
];

const productCards = [
  {
    title: '무)간편건강보험과건강하게사는이야기(20.4)',
    tags: ['#100세만기', '#장기종합', '#암플랜(고)'],
    type: '삼성화재',
    price: 82000,
    ageGroupPlan: [
      { age: 51, price: 87000, premium: 2145000 },
      { age: 56, price: 92000, premium: 3145000 },
      { age: 61, price: 97000, premium: 4145000 },
    ],
  },
  {
    title: '무)간편건강보험과건강하게사는이야기(20.4)',
    tags: ['#100세만기', '#장기종합', '#암플랜(고)'],
    type: '삼성화재',
    price: 82000,
    ageGroupPlan: [
      { age: 51, price: 87000, premium: 2145000 },
      { age: 56, price: 92000, premium: 3145000 },
      { age: 61, price: 97000, premium: 4145000 },
    ],
  },
];

const DummyPage3: FC = (props: any) => {
  const [collapsedKeyArray, setCollapsedKeyArray] = useState([
    ...productCards.map((item: any) => '0'),
  ]);

  const [saveModal, setSaveModal] = useState(0);

  const [myPlan, setMyPlan] = useState('');

  return (
    <div>
      <Header
        title='플랜 확인'
        extra={
          <div className='f-fd-c' onClick={() => setSaveModal(1)}>
            <Icon className='mb6' component={() => <SaveIcon />} />
            <div className='fs12 fls6'>플랜저장</div>
          </div>
        }
        backgroundColor
      />
      <Row className='ant-row-midnight ' justify='center'>
        <Col>
          <div className='pv10 fs18'>
            <span className='fc-dsb'>김백호</span>님 보험연령
            <span className='fc-dsb'>46</span>세
          </div>
        </Col>
      </Row>

      <div className='ph16 pt20 f-fd-c f-jc-sb '>
        <div className='pb10'>나의 플랜</div>
        <Radio.Group
          className='f wp100 pb40'
          value={myPlan}
          onChange={(event) => setMyPlan(event.target.value)}
        >
          {myPlans.map((item: any, index: number) => (
            <Radio.Button
              value={item.value}
              className={
                index === myPlans.length - 1
                  ? 'h70 f-ai-c f-jc-c f-fd-c wp100'
                  : 'h70 f-ai-c f-jc-c f-fd-c wp100 mr10'
              }
              onClick={() =>
                message.info('plan toggle button: to be implemented')
              }
            >
              <div className='f-jc-c'>
                {item.value === myPlan ? <Checkbox /> : null}
              </div>
              <div>{item.label}</div>
            </Radio.Button>
          ))}
        </Radio.Group>
        <div className='pb10'>카드 뉴스</div>
      </div>

      <Divider />
      <Space direction='vertical' style={{ width: '100%' }}>
        <Tabs
          defaultActiveKey='1'
          tabPosition={'top'}
          tabBarGutter={0}
          onTabScroll={(event) => console.log(event)}
        >
          {tabs.map((item: any, i: number) => (
            <TabPane
              tab={<div className='w78 f-jc-c'>{item.title}</div>}
              key={i}
            >
              <Divider />
              <Carousel
                arrows={true}
                prevArrow={<LeftOutlined />}
                nextArrow={<RightOutlined />}
                draggable={true}
                className='mt10'
              >
                {item.cards.map((item: any, j: number) => (
                  <Card
                    key={`card${i}-${j}`}
                    hoverable
                    onClick={() =>
                      message.info(
                        'selected card news on click: to be implemented'
                      )
                    }
                    className='m24'
                  >
                    <div
                      style={{
                        height: 200,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {item.content}
                    </div>
                  </Card>
                ))}
              </Carousel>
            </TabPane>
          ))}
        </Tabs>
      </Space>
      <div
        style={{
          paddingRight: 25,
          paddingLeft: 25,
          paddingTop: 0,
          paddingBottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Space direction='vertical' style={{ width: '100%' }}>
          {productCards.map((item: any, i: number) => (
            <Card
              className='ant-card-no-padding'
              key={`productcard-${i}`}
              hoverable
              onClick={() =>
                message.info('product card on click: to be implemented')
              }
            >
              <div style={{ padding: 8 }}>
                <Row justify='space-between'>
                  <Col>{item.title}</Col>
                  <Col>
                    <DeleteOutlined
                      onClick={(e) => {
                        e.stopPropagation();
                        message.info('delete card: to be implemented');
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Space>
                      {item.tags.map((tag: any, j: number) => (
                        <div key={`tag${i}-${j}`}>{tag}</div>
                      ))}
                    </Space>
                  </Col>
                </Row>
                <Row justify='space-between'>
                  <Col>
                    <Tag color={'#37bd7d'}>{item.type}</Tag>
                  </Col>
                  <Col>{item.price.toLocaleString('ko-Kr')}원</Col>
                </Row>
              </div>
              <Collapse activeKey={[collapsedKeyArray[i]]}>
                <Panel showArrow={false} header={null} key='1'>
                  {item.ageGroupPlan.map((_item: any) => (
                    <Row justify={'space-between'}>
                      <Col>{_item.age}세</Col>
                      <Col>
                        <Space>
                          <div>{_item.price.toLocaleString('ko-Kr')}원</div>
                          <div>{_item.premium.toLocaleString('ko-Kr')}원</div>
                        </Space>
                      </Col>
                    </Row>
                  ))}
                </Panel>
              </Collapse>

              <Row
                justify='center'
                gutter={8}
                onClick={(e) => {
                  e.stopPropagation();
                  collapsedKeyArray[i] =
                    collapsedKeyArray[i] === '1' ? '0' : '1';
                  setCollapsedKeyArray([...collapsedKeyArray]);
                }}
              >
                <Col>연령별 설계</Col>
                <Col>
                  <DownOutlined
                    className='rotate-transition'
                    rotate={collapsedKeyArray[i] === '1' ? 180 : 0}
                  />
                </Col>
              </Row>
            </Card>
          ))}
          <Card
            className='ant-card-hover-primary-border'
            onClick={() => message.info('add product: to be implemented')}
          >
            <div>상품 추가하기</div>
            <PlusOutlined style={{ fontSize: 25 }} />
          </Card>

          <Row gutter={[8, 25]}>
            <Col>
              <Button
                size='large'
                onClick={() => message.info('cancel button: to be implemented')}
              >
                취소
              </Button>
            </Col>
            <Col flex={1}>
              <Button
                type='primary'
                size='large'
                style={{ width: '100%' }}
                onClick={() =>
                  message.info('send to kakaotalk button: to be implemented')
                }
              >
                카카오톡으로 보내기
              </Button>
            </Col>
          </Row>
        </Space>
      </div>

      <Modal
        closable={false}
        title={null}
        visible={saveModal !== 0}
        footer={
          saveModal === 1 ? (
            <Row>
              <Col flex={1}>
                <Button
                  style={{ width: '100%' }}
                  onClick={() => setSaveModal(0)}
                >
                  취소
                </Button>
              </Col>
              <Col flex={1}>
                <Button
                  type='primary'
                  style={{ width: '100%' }}
                  onClick={() => setSaveModal(2)}
                >
                  저장
                </Button>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col flex={1}>
                <Button
                  type='primary'
                  style={{ width: '100%' }}
                  onClick={() => setSaveModal(0)}
                >
                  닫기
                </Button>
              </Col>
            </Row>
          )
        }
        onCancel={() => setSaveModal(0)}
        width={275}
        centered
      >
        {(saveModal === 1
          ? [
              <div>어디에 저장하실지 선택해주세요</div>,
              <div>*이전 데이터가 있을 경우 사라질 수 있습니다.</div>,
              <Radio.Group buttonStyle='solid' style={{ width: '100%' }}>
                <Space
                  direction='vertical'
                  style={{ width: '100%' }}
                  align='center'
                >
                  <Radio.Button
                    value='a'
                    onClick={() =>
                      message.info('save my plan 1 button : to be implemented')
                    }
                  >
                    나의 플랜1
                  </Radio.Button>
                  <Radio.Button
                    value='b'
                    onClick={() =>
                      message.info('save my plan 2 button : to be implemented')
                    }
                  >
                    나의 플랜2
                  </Radio.Button>
                  <Radio.Button
                    value='c'
                    onClick={() =>
                      message.info('save my plan 3 button : to be implemented')
                    }
                  >
                    나의 플랜3
                  </Radio.Button>
                </Space>
              </Radio.Group>,
            ]
          : [<div>저장이 완료 되었습니다</div>]
        ).map((item: any) => item)}
      </Modal>
    </div>
  );
};
export default DummyPage3;
