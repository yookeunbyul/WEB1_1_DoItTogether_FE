import type { Meta, StoryObj } from '@storybook/react';
import MemberTab from './MemberTab';

const meta = {
  title: 'Components/MemberTabContainer/MemberTab',
  component: MemberTab,
} satisfies Meta<typeof MemberTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    memberName: '홍길동',
  },
};
