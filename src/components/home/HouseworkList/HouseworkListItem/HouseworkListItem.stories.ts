import type { Meta, StoryObj } from '@storybook/react';
import HouseworkListItem, {
  HouseworkListItemProps,
} from '@/components/home/HouseworkList/HouseworkListItem/HouseworkListItem';
import { fn } from '@storybook/test';
import { HOUSEWORK_STATUS } from '@/constants/homePage';
import { Category } from '@/constants';

const meta = {
  title: 'components/home/HouseworkList/HouseworkListItem',
  component: HouseworkListItem,
  tags: ['autodocs'],
} satisfies Meta<typeof HouseworkListItem>;

export default meta;

type Story = StoryObj<HouseworkListItemProps>;

export const Incomplete: Story = {
  args: {
    houseworkId: 1,
    category: Category.LIVING_ROOM,
    task: '바닥 걸레질',
    startTime: '20:00',
    isAllDay: false,
    assignee: '종원',
    status: HOUSEWORK_STATUS.UN_COMPLETE,
    handleAction: fn(() => {
      console.log('action btn clicked');
    }),
    handleEdit: fn(() => console.log('edit clicked!')),
    handleDelete: fn(() => console.log('delete clicked!')),
  },
};

export const Complete: Story = {
  args: {
    houseworkId: 2,
    category: Category.BATH_ROOM,
    task: '청소',
    startTime: '21:00',
    isAllDay: false,
    assignee: '철수',
    status: HOUSEWORK_STATUS.COMPLETE,
    handleAction: fn(() => {
      console.log('action btn clicked');
    }),
    handleEdit: fn(() => console.log('edit clicked!')),
    handleDelete: fn(() => console.log('delete clicked!')),
  },
};

export const AllDay: Story = {
  args: {
    houseworkId: 3,
    category: Category.KITCHEN,
    task: '설거지',
    isAllDay: true,
    assignee: '영희',
    status: HOUSEWORK_STATUS.UN_COMPLETE,
    handleAction: fn(() => {
      console.log('action btn clicked');
    }),
    handleEdit: fn(() => console.log('edit clicked!')),
    handleDelete: fn(() => console.log('delete clicked!')),
  },
};
