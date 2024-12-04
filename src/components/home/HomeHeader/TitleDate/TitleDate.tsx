import React from 'react';
import useHomePageStore from '@/store/useHomePageStore';

const TitleDate: React.FC = ({}) => {
  const { weekText } = useHomePageStore();

  return <div className='text-main font-body'>{weekText}</div>;
};

export default TitleDate;
