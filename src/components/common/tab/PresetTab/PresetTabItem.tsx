import { TabsTrigger } from '@/components/common/ui/tabs';

interface PresetTabItemProps {
  name: string;
  value: string;
  icon: string;
}

const PresetTabItem: React.FC<PresetTabItemProps> = ({ name, value, icon }) => {
  return (
    <TabsTrigger
      value={value}
      className='flex gap-2 rounded-xl px-4 py-[6px] text-14 data-[state=active]:bg-black01 data-[state=inactive]:bg-white02 data-[state=active]:text-white03'
    >
      {name !== '전체' && <div className='h-5 w-5 bg-gray03'>{icon}</div>}
      {name}
    </TabsTrigger>
  );
};

export default PresetTabItem;
