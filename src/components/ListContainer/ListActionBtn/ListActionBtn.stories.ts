import type { Meta, StoryObj } from '@storybook/react';
import ListActionBtn, { ListActionBtnProps } from './ListActionBtn';
import { fn } from '@storybook/test'; // Mock function을 가져오기

const meta = {
  title: 'components/ListContainer/ListActionBtn',
  component: ListActionBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof ListActionBtn>;

export default meta;

type Story = StoryObj<ListActionBtnProps>;

export const Default: Story = {
  args: {
    actionStatus: 'incomplete', // 초기 상태 설정
    handleAction: fn(() => {
      console.log('Action triggered');
    }),
  },
};

export const Complete: Story = {
  args: {
    actionStatus: 'complete', // 완료 상태 설정
    handleAction: fn(() => {
      console.log('Action triggered');
    }),
  },
};

export const Poke: Story = {
  args: {
    actionStatus: 'poke', // 찌르기 상태 설정
    handleAction: fn(() => {
      console.log('Poke action triggered');
    }),
  },
};

export const Praise: Story = {
  args: {
    actionStatus: 'praise', // 칭찬 상태 설정
    handleAction: fn(() => {
      console.log('Praise action triggered');
    }),
  },
};
