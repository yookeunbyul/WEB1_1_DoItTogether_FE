import ProfileEditBtn from '@/components/my/ProfileEditBtn/ProfileEditBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/my/ProfileEditBtn/ProfileEditBtn',
  component: ProfileEditBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileEditBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
