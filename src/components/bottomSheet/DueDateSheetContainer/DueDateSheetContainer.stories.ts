import type { Meta, StoryObj } from '@storybook/react';
import DueDateSheetContainer from '@/components/bottomSheet/DueDateSheetContainer/DueDateSheetContainer';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'components/common/bottomSheet/DueDateSheetContainer',
  component: DueDateSheetContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof DueDateSheetContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    setOpen: action('setOpen'),
  },
};
