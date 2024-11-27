import type { Meta, StoryObj } from '@storybook/react';
import HouseworkList, { HouseworkListProps } from '@/components/home/HouseworkList/HouseworkList';

const meta = {
  title: 'components/home/HouseworkList',
  component: HouseworkList,
  tags: ['autodocs'],
} satisfies Meta<typeof HouseworkList>;

export default meta;

type Story = StoryObj<HouseworkListProps>;

const data = [
  {
    id: 1,
    actionStatus: 'incomplete',
    handleAction: () => {
      console.log('Action btn clicked for 거실 바닥 걸레질');
    },
    listTitle: '바닥 걸레질',
    charger: '종원',
    time: '오후 8:00',
    category: '거실',
    handleEdit: () => console.log('edit clicked!'),
    handleDelete: () => console.log('delete clicked!'),
  },
  {
    id: 2,
    actionStatus: 'incomplete',
    handleAction: () => {
      console.log('Action btn clicked for 주방 청소');
    },
    listTitle: '청소',
    charger: '민수',
    time: '오후 9:00',
    category: '주방',
    handleEdit: () => console.log('edit clicked!'),
    handleDelete: () => console.log('delete clicked!'),
  },
  {
    id: 3,
    actionStatus: 'complete',
    handleAction: () => {
      console.log('Action btn clicked for 세탁기 돌리기');
    },
    listTitle: '세탁기 돌리기',
    charger: '지수',
    time: '오후 10:00',
    category: '기타',
    handleEdit: () => console.log('edit clicked!'),
    handleDelete: () => console.log('delete clicked!'),
  },
  {
    id: 4,
    actionStatus: 'complete',
    handleAction: () => {
      console.log('Action btn clicked for 정리 정돈');
    },
    listTitle: '정리 정돈',
    charger: '영희',
    time: '오후 7:00',
    category: '침실',
    handleEdit: () => console.log('edit clicked!'),
    handleDelete: () => console.log('delete clicked!'),
  },
];

export const Default: Story = {
  args: {
    items: data,
  },
};
