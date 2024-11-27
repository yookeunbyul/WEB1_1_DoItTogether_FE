import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import ManagerItems from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItems';
import Button from '@/components/common/button/Button/Button';

interface ManagerSelectSheetProps {
  /**바텀시트 오픈 여부 */
  isOpen: boolean;
  /**isOpen 바꾸는 set함수 */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  /**선택된 담당자 */
  selectedMember: string;
  /**담당자 바꾸는 set함수 */
  handleSetSelectMember: Dispatch<SetStateAction<string>>;
  /**선택 완료 후 처리하는 함수 */
  handleDoneClick: () => void;
}

const ManagerSelectSheet: React.FC<ManagerSelectSheetProps> = ({
  isOpen,
  setIsOpen,
  selectedMember,
  handleSetSelectMember,
  handleDoneClick,
}) => {
  return (
    <BottomSheet isOpen={isOpen} setOpen={setIsOpen} title='담당자 고르기'>
      <div className='flex flex-col gap-y-6 px-5 pb-6'>
        <ManagerItems selectedMember={selectedMember} handleSelectMember={handleSetSelectMember} />
        <Button label='완료' variant='full' size='large' handleClick={handleDoneClick} />
        <button className='text-14 underline'>AI가 딱 맞는 사람을 선택할게요</button>
      </div>
    </BottomSheet>
  );
};

export default ManagerSelectSheet;
