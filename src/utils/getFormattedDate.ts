/**
 * todo
 * getWeekDates와 공유하기
 */

export default function getFormattedDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0'); // 일자가 한 자리 수일 경우 앞에 0 추가
  return `${year}. ${month}. ${day}.`;
}
