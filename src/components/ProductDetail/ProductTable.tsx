import React, { FC } from 'react';
import { Input, Tag, Table } from 'antd';
import { ProductCardType } from 'src/assets/@types/productCardType';
import { companies, planTypes, expirationOptions } from 'src/assets/constants';

const data = [
  { feeName: '일반암진단비', subscriptionFee: 1000, insuranceCost: 590 },
  { feeName: '뇌혈관진단비', subscriptionFee: 1000, insuranceCost: 1090 },
  { feeName: '심혈관진단비', subscriptionFee: 1000, insuranceCost: 2990 },
  { feeName: '일반암진단비', subscriptionFee: 1000, insuranceCost: 1090 },
  { feeName: '뇌혈관진단비', subscriptionFee: 1000, insuranceCost: 2090 },
  { feeName: '심혈관진단비', subscriptionFee: 1000, insuranceCost: 1090 },
  { feeName: '일반암진단비', subscriptionFee: 1000, insuranceCost: 590 },
  { feeName: '뇌혈관진단비', subscriptionFee: 1000, insuranceCost: 590 },
  { feeName: '심혈관진단비', subscriptionFee: 1000, insuranceCost: 590 },
  { feeName: '일반암진단비', subscriptionFee: 1000, insuranceCost: 590 },
];

interface Props {
  item: ProductCardType;
}

const getIfExist = (
  value: string,
  list: Array<any>,
  property: string,
  tag: string
) => {
  const item = list.find((item) => value === item.value);
  if (item && item[property]) {
    return tag + item[property];
  } else {
    return null;
  }
};

const ProductTable: FC<Props> = ({ item }) => {
  return (
    <Table
      title={() => (
        <div className='wp100 ph32 pv16 bc-wt h126 f-fd-c f-jc-sb'>
          <div className='fs16 fls8 fc-pc fwb'>행복을 다주는 건강보험</div>
          <div className='f-jc-sb f-ai-fe'>
            <Tag color={darkSkyBlue} className='ph11 h28 fs14 f-ai-c'>
              {companies.some((company) => item.Company === company.value)
                ? companies.find((company) => item.Company === company.value)
                    ?.label
                : null}
            </Tag>
            <div>
              <div className='fls7 fs14 ta-e'>
                장기{getIfExist(item.Plan, planTypes, 'label', '')} /{' '}
                {getIfExist(item.Expiration, expirationOptions, 'label', '')}
                {getIfExist(item.Expiration, expirationOptions, 'expiry', ' ')}
              </div>
              <div className='fls7 fs14'>
                {getIfExist(item.Plan, planTypes, 'label', '')} 고급형{' '}
                <span className='fs16 fwb'>
                  {item.Amount?.toLocaleString('ko-Kr')}원
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      className='custom-ant-table mb50'
      dataSource={data}
      pagination={false}
    >
      <Table.Column
        align='left'
        className='pl32'
        title={<div className='fc-pc fwb fls7'>담보명</div>}
        dataIndex='feeName'
        key='feeName'
      />
      <Table.Column
        align='center'
        title={<div className='fc-pc fwb fls7'>가입금액</div>}
        dataIndex='subscriptionFee'
        key='feeName'
        render={(value) => (
          <Input className='w80 h24 ta-c' placeholder={value} />
        )}
      />
      <Table.Column
        align='right'
        className='pr32'
        title={<div className='fc-pc fwb fls7'>보험료</div>}
        dataIndex='insuranceCost'
        key='feeName'
        render={(value) => <div>{value.toLocaleString('ko-Kr')}원</div>}
      />
    </Table>
  );
};

export default ProductTable;
