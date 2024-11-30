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
      <div className='flex items-center justify-between'>
        {isAllday ? (
          <Label htmlFor='time-mode'>하루종일 하기</Label>
        ) : (
          <Label htmlFor='time-mode'>시작시간이 언제인가요?</Label>
        )}
        <Switch id='time-mode' checked={isAllday} onCheckedChange={handleSwitchChange} />
      </div>
      {!isAllday && <TimePicker onTimeChange={handleTimeChange} initialTime={startTime} />}
    </div>
  );
};

export default TimeControl;
