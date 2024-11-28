interface DateItemProps {
  /** 날짜 */
  date: string;
  /** 요일 */
  day: string;
  /** 미완료 집안일 개수 */
  pendingCnt: number;
  /** 활성화 상태 */
  isActive: boolean;
  /** 클릭 이벤트 */
  handleClick: () => void;
}

const DateItem = ({ date, day, pendingCnt, isActive, handleClick }: DateItemProps) => {
  return (
    // TODO rounded, font-weight 공통변수로 수정할 예정
    <div
      onClick={handleClick}
      className={`flex h-20 w-10 flex-col items-center justify-center gap-1 rounded-[30px] px-2 py-1 ${isActive ? 'bg-black02' : 'bg-white03'} `}
    >
      <span className={`text-14 ${isActive ? 'text-gray03' : 'text-gray02'}`}>{date}</span>
      <span className={`text-16 font-bold ${isActive ? 'text-white02' : 'text-black02'}`}>
        {day}
      </span>
      <span className={`text-14 ${isActive ? 'text-gray03' : 'text-gray02'}`}>+{pendingCnt}</span>
    </div>
  );
};

export default DateItem;
