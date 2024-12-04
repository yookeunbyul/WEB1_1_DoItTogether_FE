import React from 'react';
import { Card } from '@/components/common/ui/card';

interface WeeklyStatActionProps {
  /** 칭찬, 찌르기 */
  type: 'compliment' | 'tease';
  /** 개수 */
  num: number;
}

const WeeklyStatAction: React.FC<WeeklyStatActionProps> = ({ type, num }) => {
  return (
    <Card className='flex w-full flex-col border-none bg-white px-10 py-7 shadow-none'>
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
