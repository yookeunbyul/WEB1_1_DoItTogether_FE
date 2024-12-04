import type { Meta, StoryObj } from '@storybook/react';
import MemberItem from '@/components/setting/groupSetting/MemberItems/MemberItem';

const meta: Meta<typeof MemberItem> = {
  title: 'components/setting/groupSetting/MemberItems/MemberItem',
  component: MemberItem,
  tags: ['autodocs'],
  argTypes: {
    leader: { control: 'boolean' },
    nickName: { control: 'text' }, // member -> nickName
    isCurrentUser: { control: 'boolean' },
    handleClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof MemberItem>;

export const Leader: Story = {
  args: {
    leader: true,
    nickName: '민재', // member -> nickName
    isCurrentUser: false,
  },
};

export const CurrentUser: Story = {
  args: {
    leader: false,
    nickName: '민재', // member -> nickName
    isCurrentUser: true,
  },
};

export const OtherMember: Story = {
  args: {
    leader: false,
    nickName: '서준', // member -> nickName
    isCurrentUser: false,
  },
};

export const LeaderAndCurrentUser: Story = {
  args: {
    leader: true,
    nickName: '민재', // member -> nickName
    isCurrentUser: true,
  },
};
