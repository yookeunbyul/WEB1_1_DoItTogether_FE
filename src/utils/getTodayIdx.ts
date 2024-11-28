import { WeekDates } from '@/utils/getWeekDates';

export default function getTodayIdx(today: Date, weekDates: WeekDates[]) {
  const currentDate = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  return weekDates.findIndex(week => {
    const [year, month, day] = week.date.split('.').map(Number);
    return year === currentYear && month === currentMonth && day === currentDate;
  });
}
