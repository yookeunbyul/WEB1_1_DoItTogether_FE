import IconView from '@/components/common/icon/IconView';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/common/IconView/IconView',
  component: IconView,
  tags: ['autodocs'],
} satisfies Meta<typeof IconView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <IconView />,
};
