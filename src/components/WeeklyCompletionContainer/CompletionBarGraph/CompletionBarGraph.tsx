import React from 'react';
import { Progress } from '@/components/ui/progress';

interface CompletionBarGraphProps {
  completed: number;
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
