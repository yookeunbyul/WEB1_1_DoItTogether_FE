export default function convertTimeTo12HourFormat(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? '오후' : '오전';
  const adjustedHours = hours % 12 === 0 ? 12 : hours % 12;

  return `${period} ${adjustedHours}:${minutes.toString().padStart(2, '0')}`;
}
