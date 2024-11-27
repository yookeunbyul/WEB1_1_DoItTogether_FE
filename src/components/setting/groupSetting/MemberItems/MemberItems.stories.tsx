import MemberItems from '@/components/setting/groupSetting/MemberItems/MemberItems';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MemberItems> = {
  title: 'components/setting/groupSetting/MemberItems',
  component: MemberItems,
  tags: ['autodocs'],
  argTypes: {
    leader: { control: 'boolean' },
    members: { control: 'object' },
    currentUser: { control: 'text' },
    handleClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof MemberItems>;

export const LeaderView: Story = {
  args: {
    leader: true,
    members: ['민재', '서준', '지우'],
    currentUser: '민재',
  },
};

export const MemberView: Story = {
  args: {
    leader: false,
    members: ['민재', '서준', '지우'],
    currentUser: '민재',
  },
};

export const SingleMember: Story = {
  args: {
    leader: false,
    members: ['민재'],
    currentUser: '민재',
  },
};

export const ManyMembers: Story = {
  args: {
    leader: true,
    members: ['민재', '서준', '지우', '현우', '도윤', '주원'],
    currentUser: '민재',
  },
};

export const EmptyMembers: Story = {
  args: {
    leader: false,
    members: [],
    currentUser: '민재',
  },
};
