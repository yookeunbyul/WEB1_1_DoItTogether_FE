import PresetCategory from '@/components/PresetAddContainer/PresetCategory/PresetCategory';
import React from 'react';

interface PresetAddContainerProps {}

const PresetAddContainer: React.FC<PresetAddContainerProps> = ({}) => {
  return (
    <div className='rounded-t-2xl pb-2 pt-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]'>
      <PresetCategory />
      <input className='w-full p-5 focus:outline-none' placeholder='집안일을 입력해주세요' />
    </div>
  );
};

export default PresetAddContainer;
