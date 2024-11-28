export default function getWeekText(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0부터 시작하므로 11월은 10
  const firstDayOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // 한 주의 시작이 월요일부터 시작되도록 함
  const weekNumber = Math.ceil((date.getDate() + firstDayOfWeek - 1) / 7);

  return `${year}년 ${new Intl.DateTimeFormat('ko-KR', { month: 'long' }).format(date)} ${weekNumber}주차`;
}
