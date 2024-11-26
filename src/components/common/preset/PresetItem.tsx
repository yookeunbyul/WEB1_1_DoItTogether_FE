import React from 'react';
import HouseworkCategoryTag, {
  HouseworkCategoryTagProps,
} from '@/components/common/HouseworkCatetoryTag/HouseworkCategoryTag';

export interface PresetItemProps extends HouseworkCategoryTagProps {
  /** 집안일 */
  housework: string;
  /** 클릭시 호출 함수 */
  handleSelectClick?: () => void;
  /** 프리셋 관리에 있냐 */
  isInPresetSetting?: boolean;
  /** 관리버튼 클릭? */
  handleSettingClick?: () => void;
  /** 삭제버튼이 보여지냐 */
  isShowDeleteBtn?: boolean;
  /** 삭제버튼 클릭? */
  handleDeleteClick?: () => void;
}

const PresetItem: React.FC<PresetItemProps> = ({
  category,
  housework,
  handleSelectClick,
  isInPresetSetting,
  handleSettingClick,
  isShowDeleteBtn,
  handleDeleteClick,
}) => {
  return (
    <>
      <li
        className={`flex flex-1 cursor-pointer list-none items-center justify-between border-b pl-5 ${isInPresetSetting ? '' : 'p-5'}`}
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
    </>
  );
};

export default PresetItem;
