import { TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

interface PresetTabItemProps {
  name: string;
  value: string;
  icon: string;
}

const PresetTabItem: React.FC<PresetTabItemProps> = ({ name, value, icon }) => {
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

export default PresetTabItem;
