import BottomNav from '@/components/common/bottomNav/BottomNav';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/common/bottomNav/BottomNav',
  component: BottomNav,

  tags: ['autodocs'],
} satisfies Meta<typeof BottomNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
