import PresetCategory from '@/components/setting/presetSetting/PresetCategory';
import React, { useEffect } from 'react';
import { Category } from '@/constants';
import usePresetSettingStore from '@/store/usePresetSettingStore';
import EnterIcon from '@/components/common/icon/EnterIcon';

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
    <div className='flex flex-col gap-4 rounded-t-2xl bg-sub1 bg-gradient-to-b px-5 pb-3 pt-3 text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] font-body'>
      <PresetCategory
        categoryList={categoryList}
        activeCate={activeInputCate}
        handleCateClick={handleInputCateClick}
      />
      <div className='relative text-gray1'>
        <input
          className='h-12 w-full rounded-lg px-2 py-4 pr-10 font-label focus:outline-none'
          placeholder='집안일을 입력해주세요'
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <EnterIcon className='absolute right-2 top-1/2 -translate-y-1/2' />
      </div>
    </div>
  );
};

export default PresetAddInput;
