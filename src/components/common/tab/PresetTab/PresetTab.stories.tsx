// PresetTab.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import PresetTab from '@/components/common/tab/PresetTab/PresetTab';

const meta = {
  title: 'components/common/tab/PresetTab',
  component: PresetTab,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof PresetTab>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = {
  userData: [
    {
      category: '거실',
      items: [{ id: 1, description: '매일 아침 화장실 청소하기' }],
    },
    {
      category: '부엌',
      items: [{ id: 2, description: '아침 식사 후 설거지하기' }],
    },
    {
      category: '1번 방',
      items: [{ id: 3, description: '1번 방 바닥 청소' }],
    },
    {
      category: '2번 방',
      items: [{ id: 4, description: '2번 방 옷장 정리' }],
    },
    {
      category: '3번 방',
      items: [{ id: 5, description: '3번 방 나가기' }],
    },
  ],
  presetData: [
    {
      category: '거실',
      items: [
        { id: 1, description: '매일 아침 화장실 청소하기' },
        { id: 2, description: '거실 바닥 청소하기' },
        { id: 3, description: '거실 청소기 돌리기' },
      ],
    },
    {
      category: '부엌',
      items: [
        { id: 4, description: '아침 식사 후 설거지하기' },
        { id: 5, description: '저녁 식사 후 설거지하기' },
        { id: 6, description: '오븐 청소' },
      ],
    },
    {
      category: '1번 방',
      items: [{ id: 7, description: '1번 방 청소' }],
    },
    {
      category: '2번 방',
      items: [{ id: 8, description: '2번 방 청소' }],
    },
    {
      category: '3번 방',
      items: [{ id: 9, description: '3번 방 청소' }],
    },
  ],
};

export const UserData: Story = {
  args: {
    data: mockData.userData,
  },
};

export const PresetData: Story = {
  args: {
    data: mockData.presetData,
  },
};

export const WithContainer: Story = {
  decorators: [
    Story => (
      <div className='max-w-2xl w-full rounded-lg border p-4'>
        <Story />
      </div>
    ),
  ],
  args: {
    data: mockData.presetData,
  },
};
