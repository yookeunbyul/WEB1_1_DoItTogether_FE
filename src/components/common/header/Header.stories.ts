import Header from '@/components/common/header/Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/common/header/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '헤더 타이틀',
      control: 'text',
    },
    isNeededBackBtn: {
      description: '뒤로가기버튼이 있어야 하는지',
      control: 'boolean',
    },
    isNeededDoneBtn: {
      description: '완료버튼이 있어야 하는지',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const GroupSetting: Story = {
  args: {
    title: '그룹 설정',
    isNeededBackBtn: false,
    isNeededDoneBtn: false,
  },
};

export const GroupSettingWithDone: Story = {
  args: {
    title: '그룹 설정',
    isNeededBackBtn: false,
    isNeededDoneBtn: true,
  },
};

export const PresetSetting: Story = {
  args: {
    title: '프리셋 관리',
    isNeededBackBtn: true,
    isNeededDoneBtn: true,
  },
};

export const GroupSelect: Story = {
  args: {
    title: '방 만들기',
    isNeededBackBtn: true,
    isNeededDoneBtn: false,
  },
};
