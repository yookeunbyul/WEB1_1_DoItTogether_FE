import React from 'react';

interface PresetCategoryProps {
  activeCate: string;
  handleCateClick: (cate: string) => void;
}

const PresetCategory: React.FC<PresetCategoryProps> = ({ activeCate, handleCateClick }) => {
  const category = ['거실', '주방', '욕실', '침실', '기타'];
  return (
    <div className='flex px-5'>
      {category.map(cate => (
        <button
          key={cate}
          className={`pr-4 text-14 ${activeCate === cate ? 'text-black01' : 'text-gray03'}`}
          onClick={() => handleCateClick(cate)}
        >
          {cate}
        </button>
      ))}
    </div>
  );
};

export default PresetCategory;
