import AccountSetBtn from '@/components/my/AccountSetBtn/AccountSetBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/my/AccountSetBtn/AccountSetBtn',
  component: AccountSetBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof AccountSetBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
