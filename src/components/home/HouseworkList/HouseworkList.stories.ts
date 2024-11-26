import type { Meta, StoryObj } from '@storybook/react';
import ListContainer, { ListContainerProps } from './HouseworkList';

const meta = {
  title: 'components/ListContainer',
  component: ListContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof ListContainer>;

export default meta;

type Story = StoryObj<ListContainerProps>;

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
    handleEditOrDelete: () => {
      console.log('Edit or Delete triggered for 거실 바닥 걸레질');
    },
    category: '거실',
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
    handleEditOrDelete: () => {
      console.log('Edit or Delete triggered for 주방 청소');
    },
    category: '주방',
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
    handleEditOrDelete: () => {
      console.log('Edit or Delete triggered for 세탁기 돌리기');
    },
    category: '기타',
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
    handleEditOrDelete: () => {
      console.log('Edit or Delete triggered for 정리 정돈');
    },
    category: '침실',
  },
];

export const Default: Story = {
  args: {
    items: data,
  },
};
