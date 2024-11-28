import React from 'react';
import { Progress } from '@/components/common/ui/progress';

interface CompletionBarGraphProps {
  /** 완료된 개수 */
  completed: number;
  /** 미완료된 개수 */
  notCompleted: number;
}

const CompletionBarGraph: React.FC<CompletionBarGraphProps> = ({ completed, notCompleted }) => {
  const total = completed + notCompleted;
  const completionRate = total > 0 ? (completed / total) * 100 : 0; // 완료율 계산

  return (
    <div>
      <Progress value={completionRate} className='h-5' />
    </div>
  );
};

export default CompletionBarGraph;
