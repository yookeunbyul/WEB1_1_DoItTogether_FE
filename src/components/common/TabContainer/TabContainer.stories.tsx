// TabContainer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import TabContainer from './TabContainer';
import { Tabs, TabsList } from '@radix-ui/react-tabs';
import Tab from '@/components/common/TabContainer/Tab/Tab';

const meta = {
  title: 'Components/common/TabContainer',
  component: TabContainer,
} satisfies Meta<typeof TabContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 멤버 목록을 보여주는 스토리
export const Default: Story = {
  args: {},
};

// 사용자 정의와 프리셋을 보여주는 스토리
export const WithPresets: Story = {
  render: () => {
    const PRESET_MEMBERS = [
      { name: '사용자 정의', value: 'custom' },
      { name: '프리셋', value: 'preset' },
    ];

    return (
      <Tabs defaultValue='custom'>
        <TabsList className='flex w-full justify-start gap-4 overflow-x-auto overflow-y-hidden bg-white03 p-0 no-scrollbar'>
          {PRESET_MEMBERS.map(member => (
            <Tab key={member.value} name={member.name} value={member.value} />
          ))}
        </TabsList>
      </Tabs>
    );
  },
};

// 모든 케이스를 한번에 보여주는 스토리
export const AllCases: Story = {
  render: () => {
    return (
      <div className='space-y-4'>
        <div className='rounded border p-4'>
          <h3 className='text-sm mb-2 font-medium'>기본 멤버 목록</h3>
          <TabContainer />
        </div>

        <div className='rounded border p-4'>
          <h3 className='text-sm mb-2 font-medium'>사용자 정의/프리셋</h3>
          <Tabs defaultValue='custom'>
            <TabsList className='flex w-full justify-start gap-4 overflow-x-auto overflow-y-hidden bg-white03 p-0 no-scrollbar'>
              <Tab name='사용자 정의' value='custom' />
              <Tab name='프리셋' value='preset' />
            </TabsList>
          </Tabs>
        </div>
      </div>
    );
  },
};
