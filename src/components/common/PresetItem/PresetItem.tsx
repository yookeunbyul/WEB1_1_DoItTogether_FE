import React from 'react';
import HouseworkCategoryTag, {
  HouseworkCategoryTagProps,
} from '@/components/common/HouseworkCatetoryTag/HouseworkCategoryTag';

export interface PresetItemProps extends HouseworkCategoryTagProps {
  /** 집안일 */
  housework: string;
  /** 클릭시 호출 함수 */
  handleClick: () => void;
}

const PresetItem: React.FC<PresetItemProps> = ({ category, housework, handleClick }) => {
  return (
    <li
      className='flex w-full cursor-pointer list-none items-center border-b p-5'
      onClick={handleClick}
    >
      <HouseworkCategoryTag category={category} />
      <p className='pl-4 text-14'>{housework}</p>
    </li>
  );
};

export default PresetItem;
