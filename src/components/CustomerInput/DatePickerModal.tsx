import React, { FC, useState } from 'react';
import DatePicker from 'react-mobile-datepicker';
import { Modal, Button } from 'antd';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

interface Props {
  date: Date | null;
  setDate(date: Date): void;
  visible: boolean;
  setVisible(value: boolean): void;
}
const DatePickerModal: FC<Props> = ({ date, setDate, visible, setVisible }) => {
  const defaultDate = new Date(2000, 1, 1);
  const [time, setTime] = useState(defaultDate);

  return (
    <Modal
      visible={visible}
      closable={false}
      onCancel={() => setVisible(false)}
      footer={false}
      width={
        window.innerWidth > parseInt(maxScreenWidth)
          ? parseInt(maxScreenWidth) - 32
          : window.innerWidth - 32
      }
    >
      <div className='custom-date-picker-styling'>
        <DatePicker
          value={time}
          headerFormat={`YYYY년 MM월 DD일 ${moment(time).format('dddd')}`}
          onChange={(time: Date) => setTime(time)}
          min={new Date(1980, 1, 1)}
          max={new Date()}
          theme='android'
          showFooter={false}
          isPopup={false}
          flex
        />
        <div className=' wp100 f ant-modal-footer'>
          <Button
            className='f1'
            onClick={() => {
              setVisible(false);
            }}
          >
            취소
          </Button>
          <Button
            className='f1'
            type='primary'
            onClick={() => {
              setDate(time);
              setVisible(false);
            }}
          >
            설정
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default DatePickerModal;
