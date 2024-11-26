import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import Button from '@/components/common/ButtonContainer/Button/Button';
import ManagerSelectContainer from '@/components/ManagerSelectContainer/ManagerSelectContainer';
import React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface ManagerSelectSheetContainerProps {
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

const ManagerSelectSheetContainer: React.FC<ManagerSelectSheetContainerProps> = ({
  isOpen,
  setIsOpen,
  selectedMember,
  handleSetSelectMember,
  handleDoneClick,
}) => {
  return (
    <BottomSheetContainer isOpen={isOpen} setOpen={setIsOpen} title='담당자 고르기'>
      <div className='flex flex-col gap-y-6 px-5 pb-6'>
        <ManagerSelectContainer
          selectedMember={selectedMember}
          handleSelectMember={handleSetSelectMember}
        />
        <Button label='완료' variant='full' size='large' handleClick={handleDoneClick} />
        <button className='text-14 underline'>AI가 딱 맞는 사람을 선택할게요</button>
      </div>
    </BottomSheetContainer>
  );
};

export default ManagerSelectSheetContainer;
