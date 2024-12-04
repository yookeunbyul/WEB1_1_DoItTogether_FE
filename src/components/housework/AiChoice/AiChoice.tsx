import React from 'react';
import TextTag from '@/components/common/tag/TextTag/TextTag';
import { Card } from '@/components/common/ui/card';

interface AiChoiceProps {
  /** 로딩여부 */
  isLoading: boolean;
  tags?: string[];
}

const AiChoice: React.FC<AiChoiceProps> = ({ isLoading, tags }) => {
  return (
    <Card className='mx-5 mt-4 flex flex-col gap-4 rounded-3xl rounded-bl-none p-4'>
      {isLoading ? (
        <div className='flex items-center justify-center gap-x-1 py-4'>
          <div className='h-1 w-1 animate-bounce rounded-full bg-sub delay-0'></div>
          <div className='h-1 w-1 animate-bounce rounded-full bg-sub delay-200'></div>
          <div className='h-1 w-1 animate-bounce rounded-full bg-sub delay-300'></div>
        </div>
      ) : (
        <>
          <div className='flex flex-wrap gap-1'>
            {tags &&
              tags.map(tag => (
                <div key={tag} className='block'>
                  <TextTag
                    type='secondary'
                    label={`#${tag}`}
                    className='rounded-2xl border-2 border-main/50 px-4 py-3 font-body'
                  />
                </div>
              ))}
          </div>
        </>
      )}
    </Card>
  );
};

export default AiChoice;
