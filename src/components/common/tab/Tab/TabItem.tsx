import { TabsTrigger } from '@/components/common/ui/tabs';

interface TabItemProps {
  /** 멤버 이름 */
  name: string;
  value: string;
}

const TabItem: React.FC<TabItemProps> = ({ name, value }) => {
  return (
    <TabsTrigger
      value={value}
      className='border-transparent rounded-none border-b-2 px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-black01 data-[state=active]:shadow-none'
    >
      {name}
    </TabsTrigger>
  );
};

export default TabItem;
