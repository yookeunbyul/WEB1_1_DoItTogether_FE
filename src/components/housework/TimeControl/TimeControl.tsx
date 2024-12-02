import { useState } from 'react';
import { Label } from '@/components/common/ui/label';
import { Switch } from '@/components/common/ui/switch';
import TimePicker from '@/components/housework/TimeControl/TimePicker/TimePicker';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';

interface SelectedTime {
  hour: string;
  minute: string;
  ampm: 'AM' | 'PM';
}

interface TimeControlProps {
  onTimeChange: (time: SelectedTime) => void;
}

const TimeControl: React.FC<TimeControlProps> = ({ onTimeChange }) => {
  const { isAllday, setIsAllday, startTime } = useAddHouseWorkStore();
  const [selectedTime, setSelectedTime] = useState<SelectedTime | null>(null);

  const handleSwitchChange = () => {
    setIsAllday(!isAllday);
    setSelectedTime(null);
  };

  const handleTimeChange = (time: SelectedTime) => {
    setSelectedTime(time);
    onTimeChange(time);
  };

  console.log(selectedTime);

  return (
    <div className='flex flex-col gap-2 rounded-2xl border-[1px] border-solid border-white01 bg-white03 px-3 py-4 shadow-sm'>
      <div className='font-body text-gray flex items-center justify-between'>
        {isAllday ? (
          <Label htmlFor='time-mode' className='flex items-center gap-4'>
            <i className='text-main h-4 w-4 border border-solid'></i>
            <p>하루종일 하기</p>
          </Label>
        ) : (
          <Label htmlFor='time-mode' className='text-main flex items-center gap-4'>
            <i className='h-4 w-4 border border-solid'></i>
            <p>시작시간이 언제인가요?</p>
          </Label>
        )}
        <Switch
          id='time-mode'
          checked={isAllday}
          onCheckedChange={handleSwitchChange}
          className='data-[state=checked]:bg-main data-[state=checked]:border-sub2 border'
        />
      </div>
      {!isAllday && <TimePicker onTimeChange={handleTimeChange} initialTime={startTime} />}
    </div>
  );
};

export default TimeControl;
