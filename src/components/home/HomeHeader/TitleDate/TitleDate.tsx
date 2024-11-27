import React from 'react';

interface TitleDateProps {
  /** 타이틀 날짜의 내용 */
  dateText: string;
}

const TitleDate: React.FC<TitleDateProps> = ({ dateText }: TitleDateProps) => {
  return <div className='text-gray02'>{dateText}</div>;
};

export default TitleDate;
