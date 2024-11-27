import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import ManagerSelectSheet from '@/components/housework/ManagerSelectSheet/ManagerSelectSheet';
import Button from '@/components/common/button/Button/Button';
import ManagerItems from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItems';
import AiChoice from '@/components/housework/AiChoice/AiChoice';

const meta = {
  title: 'components/housework/ManagerSelectSheet/ManagerSelectSheet',
  component: ManagerSelectSheet,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: '시트 오픈 여부',
      control: 'boolean',
    },
    setIsOpen: {
      description: '바텀시트 여는 set함수',
    },
    selectedMember: {
      description: '선택된 멤버',
      control: 'text',
    },
    handleSetSelectMember: {
      description: '담당자 선택하는 set 함수',
    },
    handleDoneClick: {
      description: '선택 후 처리하는 함수',
    },
  },
} satisfies Meta<typeof ManagerSelectSheet>;

export default meta;

const BottomSheetWithManager = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState('');
  const [isAiCardOpen, setIsAiCardOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState<string[]>([]);

  const handleDoneClick = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setIsAiCardOpen(true);
    setTimeout(() => {
      setTags(['규칙적으로 청소', '나 자신을 위해', '청소 각오는 만땅!', '화장실 청소 좋아!']);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Bottom Sheet</button>
      <BottomSheet isOpen={isOpen} setOpen={setOpen} title='담당자 고르기'>
        <div className='flex flex-col px-5 pb-6'>
          {isAiCardOpen && <AiChoice isLoading={isLoading} tags={tags} />}
          <ManagerItems selectedMember={selectedMember} handleSelectMember={setSelectedMember} />
          <div className='flex gap-3'>
            <Button label='ai 선택' variant='outline' size='large' handleClick={handleClick} />
            <Button label='완료' variant='full' size='large' handleClick={handleDoneClick} />
          </div>
        </div>
      </BottomSheet>
    </>
  );
};

type Story = StoryObj<typeof ManagerSelectSheet>;

export const Default: Story = {
  render: () => <BottomSheetWithManager />,
};
