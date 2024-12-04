import React from 'react';

interface CompletionTextProps {
  /** 완료여부 */
  completedText: '완료' | '미완료';
  /** 개수 */
  num: number;
}

const CompletionText: React.FC<CompletionTextProps> = ({ completedText, num }) => {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-gray'>{completedText}</p>
      <p className='text-18 text-gray'>
        <strong>{num}</strong>개
      </p>
    </div>
  );
};

export default CompletionText;
