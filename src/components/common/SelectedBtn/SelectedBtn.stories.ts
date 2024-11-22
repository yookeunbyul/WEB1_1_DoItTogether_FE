import { action } from '@storybook/addon-actions';
import SelectedBtn from '@/components/common/SelectedBtn/SelectedBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/common/SelectedBtn',
  component: SelectedBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    houseWork: '음식물 쓰레기 처리',
    handleClick: action('i clicked!!!!'),
  },
};
