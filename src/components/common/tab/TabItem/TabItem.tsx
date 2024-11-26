import { TabItemsTrigger } from '@/components/ui/TabItems';

interface TabItemProps {
  /** 멤버 이름 */
  name: string;
  value: string;
}

const TabItem: React.FC<TabItemProps> = ({ name, value }) => {
  return (
    <TabItemsTrigger
      value={value}
      className='rounded-none px-6 py-2 text-14 data-[state=active]:border-b-4 data-[state=active]:border-black01 data-[state=active]:shadow-none'
    >
      {name}
    </TabItemsTrigger>
  );
};

export default TabItem;
