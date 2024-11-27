import GroupOptions from '@/components/home/GroupSelectSheet/GroupOptions/GroupOptions';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/home/GroupSelectSheet/GroupOptions',
  component: GroupOptions,
} satisfies Meta<typeof GroupOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
