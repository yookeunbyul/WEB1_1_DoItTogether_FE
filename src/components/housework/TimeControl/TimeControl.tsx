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
  setTime: React.Dispatch<React.SetStateAction<SelectedTime | null>>;
  time: SelectedTime | null;
}

const TimeControl = ({ setTime, time }: TimeControlProps) => {
  const { isAllday, setIsAllday } = useAddHouseWorkStore();

  const handleSwitchChange = () => {
    if (!isAllday) {
      //false때 누르면 하루종일하기가 활성화
      setIsAllday(true);
      setTime(null);
    } else {
      //true일때 누르면 하루종일하기가 비활성화
      setIsAllday(false);
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col justify-center gap-2 !rounded-none border-b-[1px] border-solid border-gray4 border-opacity-30 bg-white px-3',
        isAllday ? 'h-14' : 'h-auto py-4'
      )}
    >
      <div className='flex items-center justify-between text-black font-body'>
        {isAllday ? (
          <Label htmlFor='time-mode' className='flex items-center gap-4'>
            <ClockIcon
              fillClass='fill-main'
              circleStrokeClass='stroke-main'
              handStrokeClass='stroke-white'
            />
            <p>하루종일 하기</p>
          </Label>
        ) : (
          <Label htmlFor='time-mode' className='text-gray flex items-center gap-4'>
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
      {!isAllday && <TimePicker initialTime={time} setTime={setTime} />}
    </div>
  );
};

export default TimeControl;
