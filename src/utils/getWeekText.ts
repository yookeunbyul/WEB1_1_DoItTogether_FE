export default function getWeekText(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0부터 시작하므로 11월은 10
  const firstDayOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // 한 주의 시작이 일요일로 설정
  // 주차 계산을 위해 요일을 일요일 기준으로 조정
  const adjustedDay = date.getDate() + (firstDayOfWeek === 0 ? 0 : 7 - firstDayOfWeek);
  const weekNumber = Math.ceil(adjustedDay / 7);

  return `${year}년 ${new Intl.DateTimeFormat('ko-KR', { month: 'long' }).format(date)} ${weekNumber}주차`;
}
