import React from 'react';
import TabItem from '@/components/common/tab/TabItem/TabItem';
import { Tabs, TabsList } from '@/components/common/ui/tabs';

interface Charger {
  name: string;
}

interface TabProps {
  activeTab: string;
  handleSetActiveTab: React.Dispatch<React.SetStateAction<string>>;
  chargers: Charger[];
}

const Tab: React.FC<TabProps> = ({ activeTab, handleSetActiveTab, chargers }) => {
  return (
    <Tabs defaultValue={activeTab} onValueChange={handleSetActiveTab}>
      <TabsList className='flex h-9 w-full justify-start overflow-x-auto overflow-y-hidden rounded-none bg-white03 p-0 px-5 no-scrollbar'>
        {chargers?.map(charger => (
          <TabItem key={charger.name} name={charger.name} value={charger.name} />
        ))}
      </TabsList>
    </Tabs>
  );
};

export default Tab;
