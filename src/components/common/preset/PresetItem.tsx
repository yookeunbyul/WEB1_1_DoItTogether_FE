import HouseworkCategoryTag, {
  HouseworkCategoryTagProps,
} from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import React from 'react';

export interface PresetItemProps extends HouseworkCategoryTagProps {
  housework: string;
  handleSelectClick?: () => void;
  isInPresetSetting?: boolean;
  isShowDeleteBtn?: boolean;
  handleSettingClick?: () => void;
  handleDeleteClick?: () => void;
}

const PresetItem: React.FC<PresetItemProps> = ({
  category,
  housework,
  handleSelectClick,
  isInPresetSetting,
  isShowDeleteBtn,
  handleSettingClick,
  handleDeleteClick,
}) => {
  return (
    <li
      className={`flex flex-1 cursor-pointer list-none items-center justify-between border-b pl-5 ${
        isInPresetSetting ? '' : 'p-5'
      }`}
      onClick={handleSelectClick}
    >
      <div className='flex items-center'>
        <HouseworkCategoryTag category={category} />
        <p className='pl-4 text-14'>{housework}</p>
      </div>
      {isInPresetSetting && (
        <div className='flex items-center'>
          {isShowDeleteBtn ? (
            <button className='bg-gray03 p-5' onClick={handleDeleteClick}>
              삭제
            </button>
          ) : (
            <div className='p-5'>
              <button onClick={handleSettingClick}>선택</button>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default PresetItem;
