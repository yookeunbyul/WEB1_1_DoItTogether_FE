import HouseWorkSheetContainer from '@/components/bottomSheet/HouseWorkSheetContainer/HouseWorkSheetContainer';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'components/common/bottomSheet/HouseWorkSheetContainer',
  component: HouseWorkSheetContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof HouseWorkSheetContainer>;

export default meta;

type Story = StoryObj<typeof HouseWorkSheetContainer>;

export const Default: Story = {
  args: {
    isOpen: true,
    setOpen: action('setOpen'),
  },
};
