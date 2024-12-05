export interface WeekDates {
  date: string; // 'YYYY-MM-DD' 형식으로 변경
  day: string;
}

export default function getWeekDates(date: Date): WeekDates[] {
  const weekDates: WeekDates[] = [];
  const startOfWeek = new Date(date);

  // 현재 주의 일요일로 설정
  const dayOfWeek = startOfWeek.getDay(); // 0 (일요일) ~ 6 (토요일)
  const sundayOffset = dayOfWeek === 0 ? 0 : -dayOfWeek; // 일요일일 경우 0, 그 외는 -요일
  startOfWeek.setDate(startOfWeek.getDate() + sundayOffset); // 일요일로 설정

  const daysShort = ['일', '월', '화', '수', '목', '금', '토'];

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
