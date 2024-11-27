import PresetItem from '@/components/common/preset/PresetItem';
import { useState } from 'react';

const PresetItemControl = () => {
  const [isShowDeleteBtn, setIsShowDeleteBtn] = useState(false);

  const handleSettingClick = () => {
    console.log('삭제버튼 등장이요');
    setIsShowDeleteBtn(true);
  };

  const handleDeleteClick = () => {
    console.log('삭제했습니다.');
    setIsShowDeleteBtn(false);
  };
  return (
    <div className='flex'>
      <PresetItem
        category='거실'
        housework='쓰레기통 비우기'
        handleSettingClick={handleSettingClick}
        isInPresetSetting={true}
        isShowDeleteBtn={isShowDeleteBtn}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default PresetItemControl;
