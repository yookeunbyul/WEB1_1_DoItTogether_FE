import ProfileImg from '@/components/common/profile/ProfileImg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileImg> = {
  title: 'components/common/profile/ProfileImg',
  component: ProfileImg,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileImg>;

export const Default: Story = {
  args: {},
};
