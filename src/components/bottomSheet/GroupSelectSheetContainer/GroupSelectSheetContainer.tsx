import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import GroupOptionContainer from '@/components/GroupOptionContainer/GroupOptionContainer';
import React from 'react';

interface GroupSelectSheetContainerProps {
  isOpen: boolean;
  handleSetOpen: (value: boolean) => void;
}

const GroupSelectSheetContainer: React.FC<GroupSelectSheetContainerProps> = ({
  isOpen,
  handleSetOpen,
}) => {
  return (
    <BottomSheetContainer isOpen={isOpen} setOpen={handleSetOpen} title='그룹 변경'>
      <GroupOptionContainer />
    </BottomSheetContainer>
  );
};

export default GroupSelectSheetContainer;
