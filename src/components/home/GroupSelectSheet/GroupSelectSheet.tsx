import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import GroupOptions from '@/components/home/GroupSelectSheet/GroupOptions/GroupOptions';
import React from 'react';

interface GroupSelectSheetProps {
  isOpen: boolean;
  handleSetOpen: (value: boolean) => void;
}

const GroupSelectSheet: React.FC<GroupSelectSheetProps> = ({ isOpen, handleSetOpen }) => {
  return (
    <BottomSheet isOpen={isOpen} setOpen={handleSetOpen} title='그룹 변경'>
      <GroupOptions />
    </BottomSheet>
  );
};

export default GroupSelectSheet;
