import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import TimePicker from './TimePicker/TimePicker';

interface SelectedTime {
  hour: string;
  minute: string;
  dayPart: 'AM' | 'PM';
}

interface TimeContainerProps {
  onTimeChange: (time: SelectedTime) => void;
}

const TimeContainer: React.FC<TimeContainerProps> = ({ onTimeChange }) => {
  const [isAllDay, setIsAllDay] = useState(true);
  const [selectedTime, setSelectedTime] = useState<SelectedTime | null>(null);

  const handleSwitchChange = () => {
    setIsAllDay(!isAllDay);
    setSelectedTime(null);
  };

  const handleTimeChange = (time: SelectedTime) => {
    setSelectedTime(time);
    onTimeChange(time);
  };

  return (
    <div className='flex flex-col gap-2 rounded-lg bg-white03 p-4 shadow'>
      <div className='flex items-center justify-between'>
        {isAllDay ? (
          <Label htmlFor='time-mode'>하루종일 하기</Label>
        ) : (
          <Label htmlFor='time-mode'>시작시간이 언제인가요?</Label>
        )}
        <Switch id='time-mode' checked={isAllDay} onCheckedChange={handleSwitchChange} />
      </div>
      {!isAllDay && <TimePicker onTimeChange={handleTimeChange} />}
    </div>
  );
};

export default TimeContainer;
