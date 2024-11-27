import { Calendar } from '@/components/common/ui/calendar';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface WorkStatus {
  day: string;
  status: 'done' | 'soso' | 'no';
}

interface MonthlyGrassProps {
  workData: WorkStatus[];
}

const MonthlyGrass: React.FC<MonthlyGrassProps> = ({ workData }) => {
  const [date, setDate] = useState<Date>();

  const getDayStatus = (day: Date | undefined) => {
    if (!day) return '';

    const found = workData.find(work => work.day === day.toISOString().split('T')[0]);

    if (!found) return '';

    return cn({
      'bg-gray-800': found.status === 'done',
      'bg-gray-300': found.status === 'soso',
      'bg-white': found.status === 'no',
    });
  };

  return (
    <div className='h-80 max-w'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md'
        modifiersStyles={{
          disabled: { opacity: 1 },
        }}
        modifiers={{
          disabled: date => {
            const today = new Date();
            return date > today;
          },
        }}
        modifiersClassNames={{
          selected: getDayStatus(date),
        }}
        disabled={date => {
          const today = new Date();
          return date > today;
        }}
      />
    </div>
  );
};

export default MonthlyGrass;
