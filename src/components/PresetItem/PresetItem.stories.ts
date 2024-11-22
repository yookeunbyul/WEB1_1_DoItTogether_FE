import type { Meta, StoryObj } from '@storybook/react';
import PresetItem, { PresetItemProps } from '@/components/PresetItem/PresetItem';

const meta = {
  title: 'components/PresetItem',
  component: PresetItem,
  tags: ['autodocs'],
} satisfies Meta<typeof PresetItem>;

export default meta;

type Story = StoryObj<PresetItemProps>;

export const Default: Story = {
  args: {
    category: '거실',
    housework: '쓰레기통 비우기',
    handleClick: () => console.log('preset item clicked!'),
  },
};
