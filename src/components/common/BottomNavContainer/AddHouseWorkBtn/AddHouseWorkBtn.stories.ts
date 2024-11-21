import type { Meta, StoryObj } from '@storybook/react';
import AddHouseWorkBtn from './AddHouseWorkBtn';

const meta = {
  title: 'Components/AddHouseWorkBtn/AddHouseWorkBtn',
  component: AddHouseWorkBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AddHouseWorkBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
