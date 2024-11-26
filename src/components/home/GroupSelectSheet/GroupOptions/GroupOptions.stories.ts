import GroupOptionContainer from '@/components/GroupOptionContainer/GroupOptionContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/GroupOptionContainer',
  component: GroupOptionContainer,
} satisfies Meta<typeof GroupOptionContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
