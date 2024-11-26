import type { Meta, StoryObj } from '@storybook/react';
import HouseworkListItem, {
  HouseworkListItemProps,
} from '@/components/home/HouseworkList/HouseworkListItem/HouseworkListItem';
import { fn } from '@storybook/test';

const meta = {
  title: 'components/home/HouseworkList/HouseworkListItem',
  component: HouseworkListItem,
  tags: ['autodocs'],
} satisfies Meta<typeof HouseworkListItem>;

export default meta;

type Story = StoryObj<HouseworkListItemProps>;

export const Default: Story = {
  args: {
    id: 1,
    actionStatus: 'incomplete',
    handleAction: fn(() => {
      console.log('action btn clicked');
    }),
    listTitle: '바닥 걸레질',
    charger: '종원',
    time: '오후 8:00',
    category: '거실',
    handleEdit: () => console.log('edit clicked!'),
    handleDelete: () => console.log('delete clicked!'),
  },
};

export const Complete: Story = {
  args: {
    id: 2,
    actionStatus: 'complete',
    handleAction: fn(() => {
      console.log('action btn clicked');
    }),
    listTitle: '청소',
    charger: '철수',
    time: '오후 9:00',
    category: '화장실',
    handleEdit: () => console.log('edit clicked!'),
    handleDelete: () => console.log('delete clicked!'),
  },
};
