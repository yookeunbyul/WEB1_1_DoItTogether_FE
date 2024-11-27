import ManagerItems from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItems';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'components/housework/ManagerSelectSheet/ManagerItem/ManagerItems',
  component: ManagerItems,
  tags: ['autodocs'],
  argTypes: {
    selectedMember: {
      description: '선택된 멤버',
      control: 'text',
    },
    handleSelectMember: {
      description: '멤버 선택 시 호출되는 함수',
    },
  },
} satisfies Meta<typeof ManagerItems>;

export default meta;
const ManagerSelectWithState = () => {
  const [selectedMember, setSelectedMember] = useState('');

  return <ManagerItems selectedMember={selectedMember} handleSelectMember={setSelectedMember} />;
};

type Story = StoryObj<typeof ManagerItems>;

export const Default: Story = {
  render: () => <ManagerSelectWithState />,
};
