import PresetCategory from '@/components/setting/presetSetting/PresetCategory';
import React, { useEffect, useState } from 'react';
import { Category } from '@/constants';
import usePresetSettingStore from '@/store/usePresetSettingStore';

interface Category {
  presetCategoryId: number;
  category: string;
}
interface PresetAddInputProps {
  categoryList: Category[];
  handleAddInput: (inputVal: string, categoryId: number) => void;
}

const PresetAddInput: React.FC<PresetAddInputProps> = ({ categoryList, handleAddInput }) => {
  const {
    inputVal,
    setInputVal,
    activeInputCate,
    setActiveInputCate,
    activeInputCateId,
    setActiveInputCateId,
  } = usePresetSettingStore();

  // 첫번째 카테고리 활성화
  useEffect(() => {
    setActiveInputCate(categoryList[0].category);
    setActiveInputCateId(categoryList[0].presetCategoryId);
  }, [categoryList, setActiveInputCate, setActiveInputCateId]);

  const handleInputCateClick = (cate: string, cateId: number) => {
    setActiveInputCate(cate);
    setActiveInputCateId(cateId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputVal.trim()) {
      handleAddInput(inputVal, activeInputCateId);
      setInputVal('');
    }
  };

  return (
    <div className='rounded-t-2xl bg-gray2 bg-gradient-to-b pb-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]'>
      <PresetCategory
        categoryList={categoryList}
        activeCate={activeInputCate}
        handleCateClick={handleInputCateClick}
      />
      <div className='p-5'>
        <input
          className='w-full p-5 focus:outline-none'
          placeholder='집안일을 입력해주세요'
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default PresetAddInput;
