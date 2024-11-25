import PresetItem from '@/components/common/PresetItem/PresetItem';
import PresetTab from '@/components/PresetTabContainer/PresetTab/PresetTab';
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';

interface PresetItem {
  id: number;
  description: string;
}

interface PresetData {
  category: string;
  items: PresetItem[];
}

interface PresetTabContainerProps {
  data: PresetData[];
}

const PresetTabContainer: React.FC<PresetTabContainerProps> = ({ data }) => {
  const handleClick = (item: string) => {
    console.log(item);
  };

  return (
    <Tabs defaultValue={data[0]?.category}>
      <TabsList className='flex w-full justify-start gap-4 overflow-x-auto overflow-y-hidden bg-white03 p-0 px-5 no-scrollbar'>
        {data.map((tab, index) => (
          <PresetTab key={index} name={tab.category} value={tab.category} icon='' />
        ))}
      </TabsList>
      {data.map(tabData => (
        <TabsContent key={tabData.category} value={tabData.category}>
          {tabData.items.map(item => (
            <div key={item.id}>
              <PresetItem
                category={tabData.category}
                housework={item.description}
                handleClick={() => handleClick(item.description)}
              />
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PresetTabContainer;
