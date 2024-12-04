import React from 'react';
import TextTag from '@/components/common/tag/TextTag/TextTag';
import CompletionText from '@/components/statistics/weekly/WeeklyCompletion/CompletionText/CompletionText';
import CompletionBarGraph from '@/components/statistics/weekly/WeeklyCompletion/CompletionBarGraph/CompletionBarGraph';
import { Card } from '@/components/common/ui/card';

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
    <Card className='mb-4 border-none bg-white p-4 px-5 shadow-none'>
      <div className='flex items-center justify-center gap-2'>
        <TextTag type='grayfill' label={groupName} />
        <p>주간 리스트</p>
      </div>
      <div className='flex w-full items-center justify-between gap-10 p-7'>
        <div className='h-16 w-16 flex-1 border border-solid'></div>
        <div className='flex-1'>
          <CompletionText completedText='완료' num={completed} />
          <CompletionText completedText='미완료' num={notCompleted} />
        </div>
      </div>
      <div>
        <CompletionBarGraph completed={completed} notCompleted={notCompleted} />
      </div>
    </Card>
  );
};

export default WeeklyCompletion;
