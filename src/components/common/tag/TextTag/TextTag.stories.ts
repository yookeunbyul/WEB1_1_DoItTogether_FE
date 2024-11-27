import TextTag from '@/components/common/tag/TextTag/TextTag';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/common/tag/TextTag',
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
