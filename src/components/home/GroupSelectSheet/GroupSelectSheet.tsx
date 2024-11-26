import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import GroupOptionContainer from '@/components/GroupOptionContainer/GroupOptionContainer';
import React from 'react';

interface GroupSelectSheetProps {
  isOpen: boolean;
  handleSetOpen: (value: boolean) => void;
}

const GroupSelectSheet: React.FC<GroupSelectSheetProps> = ({ isOpen, handleSetOpen }) => {
  return (
    <BottomSheetContainer isOpen={isOpen} setOpen={handleSetOpen} title='그룹 변경'>
      <GroupOptionContainer />
    </BottomSheetContainer>
  );
};

export default GroupSelectSheet;
