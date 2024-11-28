import Button from '@/components/common/button/Button/Button';
import InputBox from '@/components/common/input/InputBox';
import React from 'react';

interface GroupCreateStep1Props {
  handleNext: () => void;
  roomName: string;
  setRoomName: (value: string) => void;
}

const GroupCreateStep1: React.FC<GroupCreateStep1Props> = ({
  handleNext,
  roomName,
  setRoomName,
}) => {
  return (
    <div className='flex h-full flex-col justify-between p-5'>
      <div>
        <InputBox
          placeholder='방 이름을 입력해주세요'
          disabled={false}
          value={roomName}
          handleChange={setRoomName}
        />
      </div>
      <div>
        <Button
          label='다음'
          size='large'
          variant='full'
          className='mb-0'
          handleClick={handleNext}
          disabled={!roomName.trim()}
        />
      </div>
    </div>
  );
};

export default GroupCreateStep1;
