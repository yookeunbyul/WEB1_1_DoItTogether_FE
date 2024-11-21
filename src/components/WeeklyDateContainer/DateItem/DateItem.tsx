interface DateItemProps {
  /** 날짜 */
  date: number;
  /** 요일 */
  day: string;
  /** 미완료 집안일 개수 */
  pendingCnt: number;
  /** 활성화 상태 */
  isActive: boolean;
}

const DateItem = ({ date, day, pendingCnt, isActive }: DateItemProps) => {
  return (
    // TODO rounded, font-weight 공통변수로 수정할 예정
    <div
      className={`flex h-20 w-10 flex-col items-center justify-center gap-0.5 rounded-[30px] px-2 py-1 ${isActive ? 'text-white03 bg-black02' : 'bg-white03 text-black02'} `}
    >
      <span className='text-14 text-white01'>{date}</span>
      <span className='text-16 font-bold'>{day}</span>
      <span className='text-14'>+{pendingCnt}</span>
    </div>
  );
};

export default DateItem;
