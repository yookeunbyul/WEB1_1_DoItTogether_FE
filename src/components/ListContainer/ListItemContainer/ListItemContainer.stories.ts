import type { Meta, StoryObj } from '@storybook/react';
import ListItemContainer, { ListItemContainerProps } from './ListItemContainer';
import { fn } from '@storybook/test'; // Mock function을 가져오기

const meta = {
  title: 'components/ListContainer/ListItemContainer',
  component: ListItemContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof ListItemContainer>;

export default meta;

type Story = StoryObj<ListItemContainerProps>;

export const Default: Story = {
  args: {
    id: 1,
    actionStatus: 'incomplete',
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

export const Complete: Story = {
  args: {
    id: 2,
    actionStatus: 'complete',
    handleAction: fn(() => {
      console.log('action btn clicked');
    }),
    listTitle: '화장실 청소',
    charger: '철수',
    time: '오후 9:00',
    handleEditOrDelete: fn(() => {
      console.log('Edit or Delete triggered');
    }),
  },
};
