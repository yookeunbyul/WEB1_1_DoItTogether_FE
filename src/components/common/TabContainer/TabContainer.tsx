import Tab from '@/components/common/TabContainer/Tab/Tab';
import { Tabs, TabsList } from '@/components/ui/tabs';

const DUMMY_MEMBERS = [
  { name: '전체', value: 'all' },
  { name: '홍길동', value: 'hong' },
  { name: '김철수', value: 'kim' },
  { name: '이영희', value: 'lee' },
  { name: '박지성', value: 'park' },
  { name: '최민수', value: 'choi' },
];

const TabContainer = () => {
  return (
    <Tabs defaultValue='all'>
      <TabsList className='flex w-full justify-start gap-4 overflow-x-auto overflow-y-hidden bg-white03 p-0 no-scrollbar'>
        {DUMMY_MEMBERS.map(member => (
          <Tab key={member.value} name={member.name} value={member.value} />
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TabContainer;
