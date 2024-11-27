import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList } from '@/components/common/ui/tabs';
import TabItem from '@/components/common/tab/TabItem/TabItem';

const meta = {
  title: 'components/common/tab/TabItem',
  component: TabItem,
  decorators: [
    Story => (
      <Tabs defaultValue='default'>
        <TabsList>
          <Story />
        </TabsList>
      </Tabs>
    ),
  ],
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '홍길동',
    value: 'default',
  },
};

export const Preset: Story = {
  args: {
    name: '사용자 정의',
    value: 'preset',
  },
};
