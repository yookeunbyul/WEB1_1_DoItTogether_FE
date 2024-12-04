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
      className='data-[state=active]:border-main font-label rounded-none border-b-[3px] border-transparent px-5 py-3 data-[state=active]:border-b-[3px] data-[state=active]:shadow-none'
    >
      {name}
    </TabsTrigger>
  );
};

export default TabItem;
