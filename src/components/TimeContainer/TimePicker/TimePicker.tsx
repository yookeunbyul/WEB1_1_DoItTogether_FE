import Wheel from '@/components/TimeContainer/TimePicker/Wheel';
import { useEffect, useState } from 'react';

interface SelectedTime {
  hour: string;
  minute: string;
  ampm: 'AM' | 'PM';
}

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState<SelectedTime>({
    hour: '01',
    minute: '00',
    ampm: 'AM',
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

  // 임시 코드 -> 값 바뀌는지 확인 용
  useEffect(() => {
    console.log('Time Changed:', selectedTime);
  }, [selectedTime]);

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
