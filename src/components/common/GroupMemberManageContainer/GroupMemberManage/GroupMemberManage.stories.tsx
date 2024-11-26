import type { Meta, StoryObj } from '@storybook/react';
import GroupMemberManage from './GroupMemberManage';

const meta: Meta<typeof GroupMemberManage> = {
  title: 'Components/GroupMemberManageContainer/GroupMemberManage',
  component: GroupMemberManage,
  tags: ['autodocs'],
  argTypes: {
    leader: { control: 'boolean' },
    member: { control: 'text' },
    isCurrentUser: { control: 'boolean' },
    handleClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof GroupMemberManage>;

export const Leader: Story = {
  args: {
    leader: true,
    member: '민재',
    isCurrentUser: false,
  },
};

export const CurrentUser: Story = {
  args: {
    leader: false,
    member: '민재',
    isCurrentUser: true,
  },
};

export const OtherMember: Story = {
  args: {
    leader: false,
    member: '서준',
    isCurrentUser: false,
  },
};

export const LeaderAndCurrentUser: Story = {
  args: {
    leader: true,
    member: '민재',
    isCurrentUser: true,
  },
};
