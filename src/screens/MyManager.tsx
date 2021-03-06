import React, { FC, useState, useEffect } from 'react';
import { Button, Empty, Spin, message } from 'antd';
import CustomHeader from 'src/components/MyHeader';
import CustomFooter from 'src/components/MyFooter';
import {
  CustomInput,
  CustomFilter,
  CustomerCard,
  CustomPagination,
} from 'src/components/MyManager/index';
import { RouteComponentProps } from 'react-router-dom';
import moment from 'moment';
import { getDesign, deleteDesign } from 'src/lib/design';
import { postAuth } from 'src/lib/auth';

interface Props extends RouteComponentProps {}

const MyManagerScreen: FC<Props> = ({ match, history, ...props }) => {
  var params = new URLSearchParams(window.location.search);
  const serviceName: any = params.get('serviceName');
  const key: any = params.get('key');

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const pageSize = 5;
  useEffect(() => {
    const fetchData = async () => {
      const response = await getDesign().catch(() => {
        setTimeout(() => {
          setLoading(false);
          message.error('고객 리스트 불러오기 실패하였습니다');
        }, 3000);
      });
      setTimeout(() => {
        if (response) {
          setCustomers(response);
        }
        setLoading(false);
      }, 1000);
    };

    postAuth({ serviceName: serviceName, key: key }).then(fetchData);
  }, []);

  return (
    <div className='f-fd-c f-jc-sb hp100'>
      <CustomHeader title='마이매니저' />
      <div className='f1 f-fd-c ph16 pt24'>
        <div className='h20 fls61 mb8'>
          간편보험설계 고객은 현재
          <span className='fc-pc'>&nbsp;{customers.length}명</span> 입니다.
        </div>

        <CustomInput />
        <CustomFilter className='mb16' />

        {customers.map((item: any, index: number) => {
          if (index < pageSize * current && index >= pageSize * (current - 1)) {
            return (
              <CustomerCard
                deleteCard={() => {
                  deleteDesign(item.designId)
                    .then(() => {
                      customers.splice(index, 1);
                      setCustomers([...customers]);
                    })
                    .catch(() => {
                      message.error('삭제 실패하였습니다');
                    });
                }}
                onClick={() =>
                  history.push(screenPath3, {
                    ...item,
                    age: item.age
                      ? item.age
                      : Math.floor(
                          moment().diff(moment(item.birthdate), 'years', true)
                        ),
                  })
                }
                className='mb10'
                name={item.name}
                birthdate={item.birthDay}
                age={item.age}
                gender={item.gender}
                type={item.status}
                sendTime={item.createdDate}
                applyTime={item.applyDate}
                key={`customer-card-${index}`}
              />
            );
          } else {
            return null;
          }
        })}
        {customers.length === 0 && !loading ? (
          <Empty
            className='f1 f-jc-c f-ai-c f-fd-c'
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        ) : null}

        {loading ? (
          <Spin className='f1 f-jc-c f-ai-c f-fd-c' tip='로딩중입니다 ' />
        ) : null}
      </div>
      {customers.length > 0 ? (
        <CustomPagination
          className='p16'
          current={current}
          setCurrent={(value: number) => setCurrent(value)}
          pageSize={pageSize}
          total={customers.length}
          minPageShowEndButtons={3}
          minPageVisible={2}
        />
      ) : null}

      <div className='f-jc-c'>
        <Button
          type='primary'
          size='large'
          className='mt6 br4 mb50 h55 fs18 fwb fls80 w328'
          onClick={() => history.push(screenPath2)}
        >
          설계 시작하기
        </Button>
      </div>
      <CustomFooter />
    </div>
  );
};

export default MyManagerScreen;
