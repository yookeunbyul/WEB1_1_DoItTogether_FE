import React from 'react';

interface CompletionTextProps {
  /** 완료여부 */
  completedText: '완료' | '미완료';
  /** 개수 */
  num: number;
}

const CompletionText: React.FC<CompletionTextProps> = ({ completedText, num }) => {
  return (
    <div className='flex items-center justify-between gap-1'>
      <p className='text-gray3 font-body'>{completedText}</p>
      <p className='text-main font-subhead'>{num}개</p>
    </div>
  );
};

export default CompletionText;
