import type { Meta, StoryObj } from '@storybook/react';
import CompletionRate from './CompletionRate';

const meta = {
  title: 'components/statistics/monthly/CompletionRate',
  component: CompletionRate,

  tags: ['autodocs'],
  argTypes: {
    rate: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '완료율 (0-100)',
    },
    size: {
      control: { type: 'range', min: 20, max: 60, step: 4 },
      description: '원형 프로그레스 크기',
    },
    bgColor: {
      control: 'color',
      description: '배경 원 색상',
    },
    gageColor: {
      control: 'color',
      description: '게이지 색상',
    },
  },
} satisfies Meta<typeof CompletionRate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rate: 80,
    size: 24,
    bgColor: '#f9f9f9',
    gageColor: '#989393',
  },
};

export const LowProgress: Story = {
  args: {
    rate: 30,
    size: 24,
    bgColor: '#ffeeee',
    gageColor: '#ffcccc',
  },
};

export const MidProgress: Story = {
  args: {
    rate: 50,
    size: 24,
    bgColor: '#ffeeff',
    gageColor: '#ffccff',
  },
};

export const Complete: Story = {
  args: {
    rate: 100,
    size: 24,
    bgColor: '#eeeeff',
    gageColor: '#ccccff',
  },
};

export const CustomSize: Story = {
  args: {
    rate: 75,
    size: 40,
    bgColor: '#eeffee',
    gageColor: '#ccffcc',
  },
};
