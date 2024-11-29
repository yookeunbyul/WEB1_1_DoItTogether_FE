import React, { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import ManagerItems from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItems';
import Button from '@/components/common/button/Button/Button';
import AiChoice from '@/components/housework/AiChoice/AiChoice';

interface ManagerSelectSheetProps {
  /**바텀시트 오픈 여부 */
  isOpen: boolean;
  /**isOpen 바꾸는 set함수 */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  /**선택 완료 후 처리하는 함수 */
  handleDoneClick: () => void;
  setSelectedValue: Dispatch<SetStateAction<number | null>>;
  selectedValue: number | null;
}

const ManagerSelectSheet: React.FC<ManagerSelectSheetProps> = ({
  isOpen,
  setIsOpen,
  selectedValue,
  handleDoneClick,
  setSelectedValue,
}) => {
  const [isAiCardOpen, setIsAiCardOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState<string[]>([]);

  const handleClick = () => {
    setIsAiCardOpen(true);
    // todo
    // ai 할당 api 부르기
    setTimeout(() => {
      setTags(['규칙적으로 청소', '나 자신을 위해', '청소 각오는 만땅!', '화장실 청소 좋아!']);
      setIsLoading(false);
    }, 1500);
  };

  // todo
  // ai 선택이 완료되었다면 ai 선택 버튼 대신에 다시하기 버튼으로 교체

  return (
    <BottomSheet isOpen={isOpen} setOpen={setIsOpen} title='담당자 고르기'>
      <div className='flex flex-col px-5'>
        {isAiCardOpen && <AiChoice isLoading={isLoading} tags={tags} />}
        <ManagerItems
          isAiCardOpen={isAiCardOpen}
          setSelectedValue={setSelectedValue}
          selectedValue={selectedValue}
        />
        <div className='flex gap-3 pb-6'>
          <Button label='ai 선택' variant='outline' size='large' handleClick={handleClick} />
          <Button label='완료' variant='full' size='large' handleClick={handleDoneClick} />
        </div>
      </div>
    </BottomSheet>
  );
};

export default ManagerSelectSheet;
