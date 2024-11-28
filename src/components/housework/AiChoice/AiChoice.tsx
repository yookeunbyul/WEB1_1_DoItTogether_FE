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
    <Card className='mt-4 flex flex-col gap-4 rounded-bl-none p-4'>
      {isLoading ? (
        <div className='flex justify-evenly'>
          <div className='h-2.5 w-2.5 animate-bounce rounded-full bg-black01 delay-0'></div>
          <div className='h-2.5 w-2.5 animate-bounce rounded-full bg-black01 delay-200'></div>
          <div className='h-2.5 w-2.5 animate-bounce rounded-full bg-black01 delay-300'></div>
        </div>
      ) : (
        <>
          <div className='flex flex-wrap gap-1'>
            {tags &&
              tags.map(tag => (
                <div key={tag} className='block'>
                  <TextTag type='grayfill' label={`#${tag}`} />
                </div>
              ))}
          </div>
          <p>
            <strong>에 적합한 담당자를 추천드려요</strong>
          </p>
        </>
      )}
    </Card>
  );
};

export default AiChoice;
