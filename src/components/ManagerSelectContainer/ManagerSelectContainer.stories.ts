import ManagerSelectContainer from '@/components/ManagerSelectContainer/ManagerSelectContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/ManagerSelectContainer',
  component: ManagerSelectContainer,
} satisfies Meta<typeof ManagerSelectContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
