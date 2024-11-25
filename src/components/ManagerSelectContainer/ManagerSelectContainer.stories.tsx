import ManagerSelectContainer from '@/components/ManagerSelectContainer/ManagerSelectContainer';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'components/ManagerSelectContainer',
  component: ManagerSelectContainer,
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
} satisfies Meta<typeof ManagerSelectContainer>;

export default meta;
const ManagerSelectWithState = () => {
  const [selectedMember, setSelectedMember] = useState('');

  return (
    <ManagerSelectContainer
      selectedMember={selectedMember}
      handleSelectMember={setSelectedMember}
    />
  );
};

type Story = StoryObj<typeof ManagerSelectContainer>;

export const Default: Story = {
  render: () => <ManagerSelectWithState />,
};
