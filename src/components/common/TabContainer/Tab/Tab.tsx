import { TabsTrigger } from '@/components/ui/tabs';

interface TabProps {
  /** 멤버 이름 */
  name: string;
  value: string;
}

const Tab: React.FC<TabProps> = ({ name, value }) => {
  return (
    <TabsTrigger
      value={value}
      className='rounded-none px-6 py-2 text-14 data-[state=active]:border-b-2 data-[state=active]:border-black01 data-[state=active]:shadow-none'
    >
      {name}
    </TabsTrigger>
  );
};

export default Tab;
