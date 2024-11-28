import RegisterNotice from '@/components/register/RegisterNotice';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RegisterNotice> = {
  title: 'components/register/RegisterNotice',
  component: RegisterNotice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RegisterNotice>;

export const Default: Story = {
  args: {},
};
