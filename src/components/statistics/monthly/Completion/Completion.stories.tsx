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
      options: ['text-black01', 'text-black02', 'text-gray01', 'text-gray02', 'text-gray03'],
      description: '텍스트 색상',
    },
  },
} satisfies Meta<typeof CompletionDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 18,
    color: 'text-black02',
  },
};

export const Sub01: Story = {
  args: {
    count: 13,
    color: 'text-gray01',
  },
};

export const Sub02: Story = {
  args: {
    count: 20,
    color: 'text-gray02',
  },
};
