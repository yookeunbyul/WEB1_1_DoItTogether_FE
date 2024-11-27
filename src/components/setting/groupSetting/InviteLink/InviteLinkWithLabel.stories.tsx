import type { Meta, StoryObj } from '@storybook/react';
import InviteLink from '@/components/setting/groupSetting/InviteLink/InviteLink';

const meta: Meta<typeof InviteLink> = {
  title: 'components/setting/groupSetting/InviteLink/InviteLinkWithLabel',
  component: InviteLink,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InviteLink>;

export const Default: Story = {};
