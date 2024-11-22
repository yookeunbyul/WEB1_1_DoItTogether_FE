import type { Meta, StoryObj } from '@storybook/react';
import BottomSheetTitle from './BottomSheetTitle';

const meta = {
  title: 'components/common/BottomSheetContainer/BottomSheetTitle',
  component: BottomSheetTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheetTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '모임 변경',
  },
};
