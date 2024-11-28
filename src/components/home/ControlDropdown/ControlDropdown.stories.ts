import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ControlDropdown from '@/components/home/ControlDropdown/ControlDropdown';

const meta = {
  title: 'components/home/ControlDropdown',
  component: ControlDropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ControlDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleEdit: action('Edit button clicked'),
    handleDelete: action('Delete button clicked'),
  },
};
