import HouseWorkSelectedBtn from '@/components/HouseWorkSelectedBtn/HouseWorkSelectedBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/HouseWorkSelectedBtn',
  component: HouseWorkSelectedBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof HouseWorkSelectedBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    houseWork: '음식물 쓰레기 처리',
  },
};
