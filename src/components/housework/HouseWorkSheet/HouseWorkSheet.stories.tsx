import HouseWorkSheet from '@/components/housework/HouseWorkSheet/HouseWorkSheet';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'components/housework/HouseWorkSheet/HouseWorkSheet',
  component: HouseWorkSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof HouseWorkSheet>;

export default meta;

type Story = StoryObj<typeof HouseWorkSheet>;

export const Default: Story = {
  args: {
    isOpen: true,
    setOpen: action('setOpen'),
  },
};
