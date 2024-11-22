import { Button } from '@/components/ui/button';

interface SelectedBtnProps {
  /**선택된 집안일 */
  houseWork: string;
  /** 클릭하는 이벤트 */
  handleClick: () => void;
}
const SelectedBtn: React.FC<SelectedBtnProps> = ({ houseWork, handleClick }: SelectedBtnProps) => {
  return (
    <div className='flex items-center gap-x-11'>
      <div className='w-auto whitespace-nowrap'>집안일</div>
      <Button variant='select' size='full' className='text-gray02' onClick={handleClick}>
        {houseWork}
      </Button>
    </div>
  );
};

export default SelectedBtn;
