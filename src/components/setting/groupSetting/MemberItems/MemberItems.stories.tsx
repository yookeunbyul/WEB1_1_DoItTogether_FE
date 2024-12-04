import MemberItems from '@/components/setting/groupSetting/MemberItems/MemberItems';
import type { Meta, StoryObj } from '@storybook/react';
import { User } from '@/types/apis/groupApi';

const meta: Meta<typeof MemberItems> = {
  title: 'components/setting/groupSetting/MemberItems',
  component: MemberItems,
  tags: ['autodocs'],
  argTypes: {
    leader: { control: 'boolean' },
    members: { control: 'object' },
    currentUser: { control: 'object' },
    handleClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof MemberItems>;

const dummyUsers: User[] = [
  { userId: 1, email: 'minjae@example.com', nickName: '민재', role: 'ADMIN' },
  { userId: 2, email: 'seojun@example.com', nickName: '서준', role: 'PARTICIPANT' },
  { userId: 3, email: 'jiwoo@example.com', nickName: '지우', role: 'PARTICIPANT' },
  { userId: 4, email: 'hyunwoo@example.com', nickName: '현우', role: 'PARTICIPANT' },
  { userId: 5, email: 'doyun@example.com', nickName: '도윤', role: 'PARTICIPANT' },
  { userId: 6, email: 'juwon@example.com', nickName: '주원', role: 'PARTICIPANT' },
];

export const LeaderView: Story = {
  args: {
    leader: true,
    members: dummyUsers.slice(0, 3),
    currentUser: dummyUsers[0],
  },
};

export const MemberView: Story = {
  args: {
    leader: false,
    members: dummyUsers.slice(0, 3),
    currentUser: dummyUsers[0],
  },
};

export const SingleMember: Story = {
  args: {
    leader: false,
    members: [dummyUsers[0]],
    currentUser: dummyUsers[0],
  },
};

export const ManyMembers: Story = {
  args: {
    leader: true,
    members: dummyUsers,
    currentUser: dummyUsers[0],
  },
};

export const EmptyMembers: Story = {
  args: {
    leader: false,
    members: [],
    currentUser: dummyUsers[0],
  },
};
