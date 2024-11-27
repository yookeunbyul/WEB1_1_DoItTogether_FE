import React from 'react';
import WeeklyStatAction from '@/components/statistics/weekly/WeeklyStatAction/WeeklyStatAction';

interface WeeklyStatActionsProps {
  numOfCompliment: number;
  numOfTease: number;
}

const WeeklyStatActions: React.FC<WeeklyStatActionsProps> = ({ numOfCompliment, numOfTease }) => {
  return (
    <div className='mb-4 flex justify-between gap-3'>
      <WeeklyStatAction type='compliment' num={numOfCompliment} />
      <WeeklyStatAction type='tease' num={numOfTease} />
    </div>
  );
};

export default WeeklyStatActions;
