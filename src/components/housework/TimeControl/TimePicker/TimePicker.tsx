import Wheel from '@/components/TimeContainer/TimePicker/Wheel';
import { useEffect, useState } from 'react';

interface SelectedTime {
  hour: string;
  minute: string;
  dayPart: 'AM' | 'PM';
}

interface TimePickerProps {
  onTimeChange: (time: SelectedTime) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onTimeChange }) => {
  const [selectedTime, setSelectedTime] = useState<SelectedTime>({
    hour: '01',
    minute: '00',
    dayPart: 'AM',
  });

  const formatHour = (relative: number) => {
    const hour = relative + 1;
    return hour.toString().padStart(2, '0');
  };

  const formatMinute = (relative: number) => {
    const minute = relative * 5;
    return minute.toString().padStart(2, '0');
  };

  const formatAMPM = (relative: number) => {
    return relative === 0 ? 'AM' : 'PM';
  };

  const handleHourDragEnd = (value: string) => {
    setSelectedTime(prev => ({ ...prev, hour: value }));
  };

  const handleMinuteDragEnd = (value: string) => {
    setSelectedTime(prev => ({ ...prev, minute: value }));
  };

  const handleAMPMDragEnd = (value: string) => {
    setSelectedTime(prev => ({ ...prev, ampm: value as 'AM' | 'PM' }));
  };

  useEffect(() => {
    onTimeChange(selectedTime);
  }, [selectedTime, onTimeChange]);

  return (
    <div className='flex justify-center gap-4'>
      <div className='h-48 w-20'>
        <Wheel
          initIdx={0}
          length={12}
          width={23}
          loop={false}
          setValue={formatHour}
          perspective='center'
          onDragEnd={handleHourDragEnd}
        />
      </div>
      <div className='h-48 w-20'>
        <Wheel
          initIdx={0}
          length={12}
          width={23}
          loop={false}
          setValue={formatMinute}
          perspective='center'
          onDragEnd={handleMinuteDragEnd}
        />
      </div>
      <div className='h-48 w-20'>
        <Wheel
          initIdx={0}
          length={2}
          width={40}
          loop={false}
          setValue={formatAMPM}
          perspective='center'
          onDragEnd={handleAMPMDragEnd}
        />
      </div>
    </div>
  );
};

export default TimePicker;
