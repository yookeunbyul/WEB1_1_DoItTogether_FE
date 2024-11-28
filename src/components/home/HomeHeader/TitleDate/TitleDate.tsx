import React from 'react';
import useHomePageStore from '@/store/useHomePageStore';

const TitleDate: React.FC = ({}) => {
  const { weekText } = useHomePageStore();

  return <div className='text-gray02'>{weekText}</div>;
};

export default TitleDate;
