import { useState } from 'react';
import { Label } from '@/components/common/ui/label';
import { Switch } from '@/components/common/ui/switch';
import TimePicker from '@/components/housework/TimeControl/TimePicker/TimePicker';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';
import { cn } from '@/lib/utils';
import { ClockIcon } from '@/components/common/icon';

interface SelectedTime {
  hour: string;
  minute: string;
  ampm: 'AM' | 'PM';
}

interface TimeControlProps {
  onTimeChange: (time: SelectedTime | null) => void;
}

const TimeControl: React.FC<TimeControlProps> = ({ onTimeChange }) => {
  const { isAllday, setIsAllday, startTime } = useAddHouseWorkStore();
  const [selectedTime, setSelectedTime] = useState<SelectedTime | null>(null);

  const handleSwitchChange = () => {
    if (!isAllday) {
      //false때 누르면 하루종일하기가 활성화
      setIsAllday(true);
      setSelectedTime(null);
      onTimeChange(null);
    } else {
      //true일때 누르면 하루종일하기가 비활성화
      setIsAllday(false);
    }
  };

  console.log(selectedTime);

  const handleTimeChange = (time: SelectedTime) => {
    setSelectedTime(time);
    onTimeChange(time);
  };

  return (
    <div
      className={cn(
        'flex flex-col justify-center gap-2 rounded-2xl border-b-2 border-solid border-gray5 border-opacity-30 bg-white03 px-2',
        isAllday ? 'h-14' : 'h-auto py-4'
      )}
    >
      <div className='flex items-center justify-between text-gray font-body'>
        {isAllday ? (
          <Label htmlFor='time-mode' className='flex items-center gap-4'>
            <ClockIcon />
            <p>하루종일 하기</p>
          </Label>
        ) : (
          <Label htmlFor='time-mode' className='flex items-center gap-4 text-main'>
            <ClockIcon />
            <p>시작시간이 언제인가요?</p>
          </Label>
        )}
        <Switch
          id='time-mode'
          checked={isAllday}
          onCheckedChange={handleSwitchChange}
          className='border data-[state=checked]:border-sub2 data-[state=checked]:bg-main'
        />
      </div>
      {!isAllday && <TimePicker onTimeChange={handleTimeChange} initialTime={startTime} />}
    </div>
  );
};

export default TimeControl;
