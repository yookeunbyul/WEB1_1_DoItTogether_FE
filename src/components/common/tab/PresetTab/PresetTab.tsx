import PresetItem from '@/components/common/preset/PresetItem';
import PresetTabItem from '@/components/common/tab/PresetTab/PresetTabItem';
import { Tabs, TabsContent, TabsList } from '@/components/common/ui/tabs';

interface PresetItem {
  id: number;
  description: string;
}

interface PresetData {
  category: string;
  items: PresetItem[];
}

interface PresetTabProps {
  data: PresetData[];
}

const PresetTab: React.FC<PresetTabProps> = ({ data }) => {
  const handleClick = (item: string) => {
    console.log(item);
  };

  return (
    <Tabs defaultValue={data[0]?.category}>
      <TabsList className='flex w-full justify-start gap-4 overflow-x-auto overflow-y-hidden bg-white03 p-0 px-5 no-scrollbar'>
        {data.map((tab, index) => (
          <PresetTabItem key={index} name={tab.category} value={tab.category} icon='' />
        ))}
      </TabsList>
      {data.map(tabData => (
        <TabsContent key={tabData.category} value={tabData.category}>
          {tabData.items.map(item => (
            <div key={item.id}>
              <PresetItem
                category={tabData.category}
                housework={item.description}
                handleSelectClick={() => handleClick(item.description)}
              />
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PresetTab;
