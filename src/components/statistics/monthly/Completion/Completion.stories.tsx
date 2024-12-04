import type { Meta, StoryObj } from '@storybook/react';
import CompletionDate from './Completion';

const meta = {
  title: 'components/statistics/monthly/CompletionDate',
  component: CompletionDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'text',
      description: '날짜 텍스트',
    },
    color: {
      control: 'select',
      options: ['text-black', 'text-black', 'text-gray1', 'text-gray3', 'text-gray4'],
      description: '텍스트 색상',
    },
  },
} satisfies Meta<typeof CompletionDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 18,
    color: 'text-black',
  },
};

export const Sub01: Story = {
  args: {
    count: 13,
    color: 'text-gray',
  },
};

export const Sub02: Story = {
  args: {
    count: 20,
    color: 'text-gray',
  },
};
