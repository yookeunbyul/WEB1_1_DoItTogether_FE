import RegisterTitle from '@/components/register/RegisterTitle';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RegisterTitle> = {
  title: 'components/register/RegisterTitle',
  component: RegisterTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RegisterTitle>;

export const Default: Story = {
  args: {},
};
