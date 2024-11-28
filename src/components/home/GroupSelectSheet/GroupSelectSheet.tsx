import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import UnderlineBtn from '@/components/common/button/UnderlineBtn/UnderlineBtn';
import GroupOptions from '@/components/home/GroupSelectSheet/GroupOptions/GroupOptions';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useHomePageStore from '@/store/useHomePageStore';

const GroupSelectSheet: React.FC = ({}) => {
  const navigate = useNavigate();
  const { setIsGroupSelectSheetOpen } = useHomePageStore();

  const handleClick = () => {
    navigate('/group-select');
    setIsGroupSelectSheetOpen(false);
  };

  return (
    <BottomSheet title='그룹 변경'>
      <GroupOptions />
      <div className='flex justify-center pb-4'>
        <UnderlineBtn text='방 안내 페이지로 돌아가기' handleClick={handleClick} />
      </div>
    </BottomSheet>
  );
};

export default GroupSelectSheet;
