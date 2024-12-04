import type { Meta, StoryObj } from '@storybook/react';
import Completion from './Completion';
import { HeartIcon } from '@/components/common/icon';

const meta = {
  title: 'components/statistics/monthly/Completion',
  component: Completion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: '완료 횟수',
    },
    icon: {
      control: 'object',
      description: '아이콘 컴포넌트',
    },
  },
} satisfies Meta<typeof Completion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 18,
    icon: <HeartIcon className='h-4 w-4' />,
  },
};

export const Sub01: Story = {
  args: {
    count: 13,
    icon: <HeartIcon className='h-4 w-4' />,
  },
};

export const Sub02: Story = {
  args: {
    count: 20,
    icon: <HeartIcon className='h-4 w-4' />,
  },
};
