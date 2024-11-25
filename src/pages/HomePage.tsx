import React, { useState } from 'react';
import HomeHeaderContainer from '@/components/HomeHeaderContainer/HomeHeaderContainer';
import WeeklyDateContainer from '@/components/WeeklyDateContainer/WeeklyDateContainer';
import TabContainer from '@/components/common/TabContainer/TabContainer';
import ListContainer from '@/components/ListContainer/ListContainer';

export const data = [
  {
    id: 1,
    actionStatus: 'incomplete',
    handleAction: () => {
      console.log('Action btn clicked for 바닥 걸레질');
    },
    listTitle: '바닥 걸레질',
    charger: '홍길동',
    time: '오후 8:00',
    handleEdit: () => {
      console.log('Edit triggered for 바닥 걸레질');
    },
    handleDelete: () => {
      console.log('Delete triggered for 바닥 걸레질');
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
    charger: '김철수',
    time: '오후 9:00',
    handleEdit: () => {
      console.log('Edit triggered for 주방 청소');
    },
    handleDelete: () => {
      console.log('Delete triggered for 주방 청소');
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
    charger: '이영희',
    time: '오후 10:00',
    handleEdit: () => {
      console.log('Edit triggered for 세탁기 돌리기');
    },
    handleDelete: () => {
      console.log('Delete triggered for 세탁기 돌리기');
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
    charger: '박지성',
    time: '오후 7:00',
    handleEdit: () => {
      console.log('Edit triggered for 정리 정돈');
    },
    handleDelete: () => {
      console.log('Delete triggered for 정리 정돈');
    },
    category: '침실',
  },
  {
    id: 5,
    actionStatus: 'incomplete',
    handleAction: () => {
      console.log('Action btn clicked for 화장실 청소');
    },
    listTitle: '화장실 청소',
    charger: '최민수',
    time: '오후 6:00',
    handleEdit: () => {
      console.log('Edit triggered for 화장실 청소');
    },
    handleDelete: () => {
      console.log('Delete triggered for 화장실 청소');
    },
    category: '화장실',
  },
  {
    id: 6,
    actionStatus: 'complete',
    handleAction: () => {
      console.log('Action btn clicked for 정원 가꾸기');
    },
    listTitle: '정원 가꾸기',
    charger: '홍길동',
    time: '오후 5:00',
    handleEdit: () => {
      console.log('Edit triggered for 정원 가꾸기');
    },
    handleDelete: () => {
      console.log('Delete triggered for 정원 가꾸기');
    },
    category: '정원',
  },
  {
    id: 7,
    actionStatus: 'incomplete',
    handleAction: () => {
      console.log('Action btn clicked for 쓰레기 버리기');
    },
    listTitle: '쓰레기 버리기',
    charger: '김철수',
    time: '오후 4:00',
    handleEdit: () => {
      console.log('Edit triggered for 쓰레기 버리기');
    },
    handleDelete: () => {
      console.log('Delete triggered for 쓰레기 버리기');
    },
    category: '기타',
  },
  {
    id: 8,
    actionStatus: 'complete',
    handleAction: () => {
      console.log('Action btn clicked for 빨래 널기');
    },
    listTitle: '빨래 널기',
    charger: '이영희',
    time: '오후 3:00',
    handleEdit: () => {
      console.log('Edit triggered for 빨래 널기');
    },
    handleDelete: () => {
      console.log('Delete triggered for 빨래 널기');
    },
    category: '세탁실',
  },
  {
    id: 9,
    actionStatus: 'incomplete',
    handleAction: () => {
      console.log('Action btn clicked for 청소기 돌리기');
    },
    listTitle: '청소기 돌리기',
    charger: '박지성',
    time: '오후 2:00',
    handleEdit: () => {
      console.log('Edit triggered for 청소기 돌리기');
    },
    handleDelete: () => {
      console.log('Delete triggered for 청소기 돌리기');
    },
    category: '거실',
  },
  {
    id: 10,
    actionStatus: 'complete',
    handleAction: () => {
      console.log('Action btn clicked for 정리 정돈');
    },
    listTitle: '정리 정돈',
    charger: '최민수',
    time: '오후 1:00',
    handleEdit: () => {
      console.log('Edit triggered for 정리 정돈');
    },
    handleDelete: () => {
      console.log('Delete triggered for 정리 정돈');
    },
    category: '침실',
  },
];

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('전체');

  return (
    <div>
      <HomeHeaderContainer />
      <div className='bg-white sticky top-0 z-10 shadow'>
        <WeeklyDateContainer />
        <TabContainer activeTab={activeTab} handleSetActiveTab={setActiveTab} />
      </div>
      <ListContainer
        items={data.filter(item => item.charger === activeTab || activeTab === '전체')}
      />
    </div>
  );
};

export default HomePage;
