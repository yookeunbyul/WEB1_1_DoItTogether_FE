import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import SelectBtn from '@/components/common/SelectBtn/SelectBtn';

const meta = {
  title: 'components/common/SelectBtn',
  component: SelectBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '어떤 집안일인가요?',
    handleClick: action('i clicked!'),
  },
};
