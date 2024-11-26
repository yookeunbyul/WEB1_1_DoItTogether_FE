import React from 'react';
import { Card } from '@/components/ui/card';

interface WeeklyStatActionProps {
  type: 'compliment' | 'tease';
  num: number;
}

const WeeklyStatAction: React.FC<WeeklyStatActionProps> = ({ type, num }) => {
  return (
    <Card className='flex flex-col border-none bg-white02 px-10 py-7 shadow-none'>
      <div className='flex items-center justify-center gap-2'>
        <div className='h-6 w-6 border border-solid'></div>
        <p className='text-18'>
          <strong>{num}번</strong>
        </p>
      </div>
      <p className='text-center text-14'>{type === 'compliment' ? '칭찬했어요!' : '찔렀어요!'}</p>
    </Card>
  );
};

export default WeeklyStatAction;
