import { TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

interface PresetTabProps {
  name: string;
  value: string;
  icon: string;
}

const PresetTab: React.FC<PresetTabProps> = ({ name, value, icon }) => {
  return (
    <TabsTrigger
      value={value}
      className='flex gap-2 text-14 data-[state=active]:bg-black01 data-[state=inactive]:bg-white02 data-[state=active]:text-white03'
    >
      <div className='h-5 w-5 bg-gray03'>{icon}</div>
      {name}
    </TabsTrigger>
  );
};

export default PresetTab;
