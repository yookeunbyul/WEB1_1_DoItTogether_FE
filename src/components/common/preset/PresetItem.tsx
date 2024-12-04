import HouseworkCategoryTag, {
  HouseworkCategoryTagProps,
} from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import React from 'react';

export interface PresetItemProps extends HouseworkCategoryTagProps {
  housework: string;
  handleSelectClick?: () => void;
  isPresetSettingCustom?: boolean;
  isShowDeleteBtn?: boolean;
  handleSettingClick?: () => void;
  handleDeleteClick?: () => void;
  isSelected?: boolean;
  isBottomSheet?: boolean;
}

const PresetItem: React.FC<PresetItemProps> = ({
  category,
  housework,
  handleSelectClick,
  isPresetSettingCustom,
  isShowDeleteBtn,
  handleSettingClick,
  handleDeleteClick,
  isSelected,
  isBottomSheet,
}) => {
  return (
    <li
      className={`flex flex-1 cursor-pointer list-none items-center justify-between border-b-[1px] border-solid border-white pl-5 ${
        isBottomSheet ? 'p-5' : 'p-4'
      }`}
      onClick={handleSelectClick}
    >
      <div className='flex items-center'>
        <HouseworkCategoryTag category={category} variant={isSelected ? 'secondary' : 'disabled'} />
        <p className='pl-4 text-14'>{housework}</p>
      </div>
      {isPresetSettingCustom && (
        <div className='flex items-center'>
          {isShowDeleteBtn ? (
            <button className='bg-gray4 text-14' onClick={handleDeleteClick}>
              삭제
            </button>
          ) : (
            <div className='text-14'>
              <button onClick={handleSettingClick}>선택</button>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default PresetItem;
