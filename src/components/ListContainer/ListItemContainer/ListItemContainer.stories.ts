import type { Meta, StoryObj } from '@storybook/react';
import ListItemContainer, { ListItemContainerProps } from './ListItemContainer';
import { fn } from '@storybook/test'; // Mock function을 가져오기

const meta = {
  title: 'components/ListContainer',
  component: ListItemContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof ListItemContainer>;

export default meta;

type Story = StoryObj<ListItemContainerProps>;

export const Default: Story = {
  args: {
    actionStatus: 'incompleteㄹ',
    handleAction: fn(() => {
      console.log('action btn clicked');
    }),
    listTitle: '거실 바닥 걸레질',
    charger: '종원',
    time: '오후 8:00',
    handleEditOrDelete: fn(() => {
      console.log('Edit or Delete triggered');
    }),
  },
};
