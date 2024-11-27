import type { Meta, StoryObj } from '@storybook/react';
import Tab from '@/components/common/tab/Tab';

const meta = {
  title: 'components/common/tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockChargers = [{ name: 'Charger 1' }, { name: 'Charger 2' }, { name: 'Charger 3' }];

export const Default: Story = {
  args: {
    activeTab: mockChargers[0].name,
    handleSetActiveTab: () => {},
    chargers: mockChargers,
  },
};

export const SingleTab: Story = {
  args: {
    activeTab: 'Single',
    handleSetActiveTab: () => {},
    chargers: [{ name: 'Single' }],
  },
};

export const ManyTabs: Story = {
  args: {
    activeTab: 'Tab 1',
    handleSetActiveTab: () => {},
    chargers: Array.from({ length: 10 }, (_, i) => ({
      name: `Tab ${i + 1}`,
    })),
  },
};

export const CustomPresets: Story = {
  args: {
    activeTab: 'custom',
    handleSetActiveTab: () => {},
    chargers: [{ name: '사용자 정의' }, { name: '프리셋' }],
  },
};
