import React from 'react';
import { Card } from '@/components/common/ui/card';
import { FingerIcon, HeartIcon } from '@/components/common/icon';

interface WeeklyStatActionProps {
  /** 칭찬, 찌르기 */
  type: 'compliment' | 'tease';
  /** 개수 */
  num: number;
}

const WeeklyStatAction: React.FC<WeeklyStatActionProps> = ({ type, num }) => {
  return (
    <Card className='flex w-full flex-col gap-2 border-none bg-sub2/20 px-10 py-7 shadow-none'>
      <div className='flex items-center justify-center gap-2'>
        {type === 'compliment' ? <HeartIcon /> : <FingerIcon />}
        <p className='text-black font-head'>
          <strong>{num}번</strong>
        </p>
      </div>
      <p className='text-center text-gray font-label'>
        {type === 'compliment' ? '칭찬했어요!' : '찔렀어요!'}
      </p>
    </Card>
  );
};

export default WeeklyStatAction;
