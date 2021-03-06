import React, { FC } from 'react';
import { Space, Card, Tag, Divider } from 'antd';
import Icon from '@ant-design/icons';
import moment from 'moment';

import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete-icon.svg';

interface Props {
  className?: string;
  onClick: () => void;
  deleteCard: () => void;
  type: string;
  name: string;
  gender: string;
  birthdate: string | null;
  age: number | null;
  sendTime: string;
  applyTime: string | null;
}

const MyManagerScreen: FC<Props> = (item: any) => {
  return (
    <Card
      className={`ant-card-no-padding ${item.className}`}
      hoverable
      onClick={() => {
        item.onClick();
      }}
    >
      <div className='f pv12 ph16'>
        <div className='f1'>
          <Space size={10}>
            <Tag
              className='ph10 fls6'
              color={item.type === 'N' ? darkSkyBlue : grapefruit}
            >
              {item.type === 'N' ? '신규' : '신청'}
            </Tag>
            <div className='h30 fs16 fwb fls80 f-ai-c'>{item.name}</div>
          </Space>
        </div>
        <div className='f1 f-jc-sb f-ai-c '>
          <Space align='center' size={8}>
            <Tag className='br10 ph7 bpc fc-pc'>
              {item.gender == 'M' ? '남' : item.gender == 'F' ? '여' : '?'}
            </Tag>
            <div className='h20 fs14 fls70'>
              {(item.birthdate
                ? [moment(item.birthdate).format('YYYY-MM-DD')]
                : ['보험나이 ', <span className='fwb'>{item.age}세</span>]
              ).map((item: any) => item)}
            </div>
          </Space>

          <Icon
            component={() => (
              <DeleteIcon
                className='fs24'
                onClick={(e) => {
                  e.stopPropagation();
                  item.deleteCard();
                }}
              />
            )}
          />
        </div>
      </div>
      <Divider />
      <div className='f pv8 ph16'>
        <div className='f1'>
          <Space size={5}>
            <div className='h18 fs12 fls60'>보낸일자</div>
            <div className='h20 fs14 fls70 f-ai-c'>
              {moment(item.sendTime).format('YYYY-MM-DD')}
            </div>
          </Space>
        </div>
        <div className='f1 f-jc-fs'>
          {item.applyTime ? (
            <Space size={5}>
              <div className='h18 fs12 fls60 '>신청일자</div>
              <div className='h20 fs14 fls70 fc-pc f-ai-c'>
                {item.applyTime}
              </div>
            </Space>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

export default MyManagerScreen;
