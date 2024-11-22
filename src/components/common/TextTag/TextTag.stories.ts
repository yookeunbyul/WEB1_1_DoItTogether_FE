import type { Meta, StoryObj } from '@storybook/react';
import TextTag from '@/components/common/TextTag/TextTag';

const meta = {
  title: 'components/common/TextTag',
  component: TextTag,
  tags: ['autodocs'],
} satisfies Meta<typeof TextTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'darkfill',
    label: '담당자',
  },
};

export const GrayFill: Story = {
  args: {
    type: 'grayfill',
    label: '담당자',
  },
};
