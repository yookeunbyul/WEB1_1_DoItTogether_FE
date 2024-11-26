import React from 'react';
import Tab from '@/components/common/TabContainer/Tab/Tab';
import { Tabs, TabsList } from '@/components/ui/tabs';

interface Charger {
  name: string;
}

interface TabContainerProps {
  activeTab: string;
  handleSetActiveTab: React.Dispatch<React.SetStateAction<string>>;
  chargers: Charger[];
}

const TabContainer: React.FC<TabContainerProps> = ({ activeTab, handleSetActiveTab, chargers }) => {
  return (
    <Tabs defaultValue={activeTab} onValueChange={handleSetActiveTab}>
      <TabsList className='flex h-9 w-full justify-start overflow-x-auto overflow-y-hidden rounded-none bg-white03 p-0 px-5 no-scrollbar'>
        {chargers?.map(charger => (
          <Tab key={charger.name} name={charger.name} value={charger.name} />
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TabContainer;
