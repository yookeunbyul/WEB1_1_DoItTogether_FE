export interface WeekDates {
  date: string; // 'YYYY-MM-DD' 형식으로 변경
  day: string;
}

export default function getWeekDates(date: Date): WeekDates[] {
  const weekDates: WeekDates[] = [];
  const startOfWeek = new Date(date);

  // 현재 주의 월요일로 설정
  const dayOfWeek = startOfWeek.getDay(); // 0 (일요일) ~ 6 (토요일)
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // 일요일일 경우 -6, 그 외는 1 - 요일
  startOfWeek.setDate(startOfWeek.getDate() + mondayOffset); // 월요일로 설정

  const daysShort = ['월', '화', '수', '목', '금', '토', '일'];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startOfWeek);
    currentDate.setDate(startOfWeek.getDate() + i);

    // YYYY-MM-DD 형식으로 변환
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 0~11을 1~12로
    const day = String(currentDate.getDate()).padStart(2, '0');

    // YYYY-MM-DD 형식으로 날짜 생성
    const formattedDate = `${year}-${month}-${day}`;
    const dayName = daysShort[i]; // 축약된 요일 사용

    weekDates.push({ date: formattedDate, day: dayName });
  }

  return weekDates;
}
