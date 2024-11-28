import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import UnderlineBtn from '@/components/common/button/UnderlineBtn/UnderlineBtn';
import GroupOptions from '@/components/home/GroupSelectSheet/GroupOptions/GroupOptions';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GroupSelectSheetProps {
  isOpen: boolean;
  handleSetOpen: (value: boolean) => void;
}

const GroupSelectSheet: React.FC<GroupSelectSheetProps> = ({ isOpen, handleSetOpen }) => {
  const naviagate = useNavigate();
  const handleClick = () => {
    naviagate('/group-select');
  };
  return (
    <BottomSheet isOpen={isOpen} setOpen={handleSetOpen} title='그룹 변경'>
      <GroupOptions />
      <div className='flex justify-center pb-4'>
        <UnderlineBtn text='방 안내 페이지로 돌아가기' handleClick={handleClick} />
      </div>
    </BottomSheet>
  );
};

export default GroupSelectSheet;
