import React from 'react';

interface Category {
  presetCategoryId: number;
  category: string;
}
interface PresetCategoryProps {
  activeCate: string;
  handleCateClick: (cate: string) => void;
  categoryList: Category[];
}

const PresetCategory: React.FC<PresetCategoryProps> = ({
  activeCate,
  handleCateClick,
  categoryList,
}) => {
  return (
    <div className='flex px-5'>
      {categoryList.map(item => (
        <button
          key={item.presetCategoryId}
          className={`pr-4 text-14 ${activeCate === item.category ? 'text-black01' : 'text-gray03'}`}
          onClick={() => handleCateClick(item.category)}
        >
          {item.category}
        </button>
      ))}
    </div>
  );
};

export default PresetCategory;
