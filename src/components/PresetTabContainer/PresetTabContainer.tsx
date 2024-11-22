import PresetTab from '@/components/PresetTabContainer/PresetTab/PresetTab';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';

const PRESET_TABS = [
  { name: '전체', value: 'all', icon: '' },
  { name: '거실', value: 'living', icon: '' },
  { name: '주방', value: 'kitchen', icon: '' },
  { name: '욕실', value: 'bathroom', icon: '' },
  { name: '기타', value: 'etc', icon: '' },
];

const PresetTabContainer = () => {
  return (
    <Tabs defaultValue='all'>
      <TabsList className='flex w-full justify-start gap-4 overflow-x-auto overflow-y-hidden bg-white03 p-0 no-scrollbar'>
        {PRESET_TABS.map(tab => (
          <PresetTab key={tab.value} name={tab.name} value={tab.value} icon={tab.icon} />
        ))}
      </TabsList>
    </Tabs>
  );
};

export default PresetTabContainer;
