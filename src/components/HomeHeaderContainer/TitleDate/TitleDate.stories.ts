import type { Meta, StoryObj } from '@storybook/react';
import TitleDate from './TitleDate';

const meta = {
  title: 'TitleDate',
  component: TitleDate,
  tags: ['autodocs'],
} satisfies Meta<typeof TitleDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dateText: '2024년 11월 둘째 주',
  },
};
