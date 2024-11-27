import type { Meta, StoryObj } from '@storybook/react';
import MemberItem from '@/components/setting/groupSetting/MemberItems/MemberItem';

const meta: Meta<typeof MemberItem> = {
  title: 'components/setting/groupSetting/MemberItems/MemberItem',
  component: MemberItem,
  tags: ['autodocs'],
  argTypes: {
    leader: { control: 'boolean' },
    member: { control: 'text' },
    isCurrentUser: { control: 'boolean' },
    handleClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof MemberItem>;

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
