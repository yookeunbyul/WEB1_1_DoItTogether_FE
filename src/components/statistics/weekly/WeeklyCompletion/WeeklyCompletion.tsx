import React from 'react';
import TextTag from '@/components/common/tag/TextTag/TextTag';
import CompletionText from '@/components/statistics/weekly/WeeklyCompletion/CompletionText/CompletionText';
import CompletionBarGraph from '@/components/statistics/weekly/WeeklyCompletion/CompletionBarGraph/CompletionBarGraph';
import { Card } from '@/components/common/ui/card';
import { TrashCanIcon, BroomDustIcon, BubbleIcon, ShinyIcon } from '@/components/common/icon';

interface WeeklyCompletionProps {
  /** 그룹명 */
  groupName: string;
  // status: string; // 추후 상태에 따라 아이콘 변경
  /** 완료된 집안일 개수 */
  completed: number;
  /** 미완료된 집안일 개수 */
  notCompleted: number;
}

const WeeklyCompletion: React.FC<WeeklyCompletionProps> = ({
  groupName,
  completed,
  notCompleted,
}) => {
  return (
    <Card className='mb-4 border-none px-5 pb-4 shadow-none'>
      <div className='flex w-full items-center justify-between py-5 pl-5'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <TextTag
              type='grayfill'
              className='bg-gray5 px-1.5 py-1 text-black'
              label={groupName}
            />
            <p className='text-black font-subhead'>단계는?</p>
          </div>
          <p className='text-main font-head'>쓰레기통</p>
          <div className='flex gap-2'>
            <CompletionText completedText='완료' num={completed} />
            <CompletionText completedText='미완료' num={notCompleted} />
          </div>
        </div>
        <TrashCanIcon />
        {/* <BroomDustIcon /> */}
        {/* <BubbleIcon /> */}
        {/* <ShinyIcon /> */}
      </div>
      <div>
        <CompletionBarGraph completed={completed} notCompleted={notCompleted} />
      </div>
    </Card>
  );
};

export default WeeklyCompletion;
