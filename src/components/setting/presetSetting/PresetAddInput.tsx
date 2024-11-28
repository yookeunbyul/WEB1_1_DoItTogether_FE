import PresetCategory from '@/components/setting/presetSetting/PresetCategory';
import React, { useState } from 'react';

interface PresetAddInputProps {}

const PresetAddInput: React.FC<PresetAddInputProps> = ({}) => {
  const [activeCate, setActiveCate] = useState('거실');

  const handleCateClick = (cate: string) => {
    setActiveCate(cate);
  };
  return (
    <div className='rounded-t-2xl pb-2 pt-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]'>
      <PresetCategory activeCate={activeCate} handleCateClick={handleCateClick} />
      <input className='w-full p-5 focus:outline-none' placeholder='집안일을 입력해주세요' />
    </div>
  );
};

export default PresetAddInput;
