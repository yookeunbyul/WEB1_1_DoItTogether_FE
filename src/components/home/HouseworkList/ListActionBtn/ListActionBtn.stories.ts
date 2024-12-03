import type { Meta, StoryObj } from '@storybook/react';
import ListActionBtn, { ListActionBtnProps } from './ListActionBtn';
import { fn } from '@storybook/test';
import { HOUSEWORK_STATUS } from '@/constants/homePage';

const meta = {
  title: 'components/home/HouseworkList/ListActionBtn',
  component: ListActionBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof ListActionBtn>;

export default meta;

type Story = StoryObj<ListActionBtnProps>;

export const Incomplete: Story = {
  args: {
    status: HOUSEWORK_STATUS.UN_COMPLETE,
    handleAction: fn(() => {
      console.log('Action triggered');
    }),
    id: 1,
  },
};

export const Complete: Story = {
  args: {
    status: HOUSEWORK_STATUS.COMPLETE,
    handleAction: fn(() => {
      console.log('Action triggered');
    }),
    id: 1,
  },
};
