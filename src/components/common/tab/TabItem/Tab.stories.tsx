import type { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';
import { Tabs, TabsList } from '@radix-ui/react-tabs';

const meta = {
  title: 'Components/common/TabContainer/Tab',
  component: Tab,
  decorators: [
    Story => (
      <Tabs defaultValue='default'>
        <TabsList>
          <Story />
        </TabsList>
      </Tabs>
    ),
  ],
} satisfies Meta<typeof Tab>;

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
