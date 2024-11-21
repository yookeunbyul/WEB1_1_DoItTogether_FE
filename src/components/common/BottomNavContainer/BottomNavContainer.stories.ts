import type { Meta, StoryObj } from '@storybook/react';
import BottomNavContainer from './BottomNavContainer';

const meta = {
  title: 'Components/BottomNavContainer',
  component: BottomNavContainer,

  tags: ['autodocs'],
} satisfies Meta<typeof BottomNavContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
