import React from 'react';

interface Category {
  presetCategoryId: number;
  category: string;
}
interface PresetCategoryProps {
  activeCate: string;
  handleCateClick: (cate: string, categoryId: number) => void;
  categoryList: Category[];
}

const PresetCategory: React.FC<PresetCategoryProps> = ({
  activeCate,
  handleCateClick,
  categoryList,
}) => {
  return (
    <div className='flex gap-2'>
      {categoryList.map(item => (
        <button
          key={item.presetCategoryId}
          className={`rounded-xl px-2 py-[6px] font-label ${activeCate === item.category ? 'bg-white text-main' : 'text-white'}`}
          onClick={() => handleCateClick(item.category, item.presetCategoryId)}
        >
          {item.category}
        </button>
      ))}
    </div>
  );
};

export default PresetCategory;
