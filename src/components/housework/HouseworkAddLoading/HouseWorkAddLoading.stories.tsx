import type { Meta, StoryObj } from '@storybook/react';
import HouseWorkAddLoading from './HouseWorkAddLoading';

const meta: Meta<typeof HouseWorkAddLoading> = {
  title: 'components/housework/HouseWorkAddLoading/HouseWorkAddLoading',
  component: HouseWorkAddLoading,
  argTypes: {
    date: {
      control: 'text',
      description: '날짜',
    },
    housework: {
      control: 'text',
      description: '집안일',
    },
    member: {
      control: 'text',
      description: '담당자',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HouseWorkAddLoading>;

export const Default: Story = {
  args: {
    date: '24년 11월 28일',
    housework: '청소하기',
    member: 1,
  },
};

export const LongText: Story = {
  args: {
    date: '24년 11월 28일',
    housework: '장시간 대청소하기',
    member: 2,
  },
};

export const ShortText: Story = {
  args: {
    date: '24년 11월 28일',
    housework: '청소',
    member: 3,
  },
};
