import GroupSelectTitle from '@/components/groupSelect/GroupSelectTitle/GroupSelectTitle';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/groupSelect/GroupSelectTitle/GroupSelectTitle',
  component: GroupSelectTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof GroupSelectTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
