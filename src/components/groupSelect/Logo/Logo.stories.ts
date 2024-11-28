import Logo from '@/components/groupSelect/Logo/Logo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/groupSelect/Logo/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
