import type { Meta, StoryObj } from '@storybook/react';
import HouseworkList, { HouseworkListProps } from '@/components/home/HouseworkList/HouseworkList';
import { HOUSEWORK_STATUS } from '@/constants/homePage';
import { Category } from '@/constants';
import { fn } from '@storybook/test';

const meta = {
  title: 'components/home/HouseworkList',
  component: HouseworkList,
  tags: ['autodocs'],
} satisfies Meta<typeof HouseworkList>;

export default meta;

type Story = StoryObj<HouseworkListProps>;

const mockData = [
  {
    houseworkId: 1,
    category: Category.LIVING_ROOM,
    task: '바닥 걸레질',
    startTime: '20:00',
    isAllDay: false,
    assignee: '종원',
    status: HOUSEWORK_STATUS.UN_COMPLETE,
  },
  {
    houseworkId: 2,
    category: Category.KITCHEN,
    task: '청소',
    startTime: '21:00',
    isAllDay: false,
    assignee: '민수',
    status: HOUSEWORK_STATUS.UN_COMPLETE,
  },
  {
    houseworkId: 3,
    category: Category.BATH_ROOM,
    task: '세탁기 돌리기',
    startTime: '22:00',
    isAllDay: false,
    assignee: '지수',
    status: HOUSEWORK_STATUS.COMPLETE,
  },
  {
    houseworkId: 4,
    category: Category.BED_ROOM,
    task: '정리 정돈',
    startTime: '19:00',
    isAllDay: false,
    assignee: '영희',
    status: HOUSEWORK_STATUS.COMPLETE,
  },
];

export const Default: Story = {
  args: {
    items: mockData,
    handleAction: fn(houseworkId => {
      console.log('Action triggered for housework:', houseworkId);
    }),
    handleEdit: fn(houseworkId => {
      console.log('Edit triggered for housework:', houseworkId);
    }),
    handleDelete: fn(houseworkId => {
      console.log('Delete triggered for housework:', houseworkId);
    }),
  },
};
