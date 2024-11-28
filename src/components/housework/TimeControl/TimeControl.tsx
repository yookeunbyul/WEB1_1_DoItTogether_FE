import { useState } from 'react';
import { Label } from '@/components/common/ui/label';
import { Switch } from '@/components/common/ui/switch';
import TimePicker from '@/components/housework/TimeControl/TimePicker/TimePicker';

interface SelectedTime {
  hour: string;
  minute: string;
  dayPart: 'AM' | 'PM';
}

interface TimeControlProps {
  onTimeChange: (time: SelectedTime) => void;
}

const TimeControl: React.FC<TimeControlProps> = ({ onTimeChange }) => {
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

  console.log(selectedTime);

  return (
    <div className='flex flex-col gap-2 rounded-2xl border-[1px] border-solid border-white01 bg-background px-3 py-4 text-black01 shadow-sm'>
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

export default TimeControl;
