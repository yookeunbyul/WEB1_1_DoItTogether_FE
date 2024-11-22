import { Button } from '@/components/ui/button';

interface SelectBtnProps {
  /** 셀렉트 버튼 title*/
  text: string;
  /** 클릭하는 이벤트 */
  handleClick: () => void;
}

const SelectBtn: React.FC<SelectBtnProps> = ({ text, handleClick }: SelectBtnProps) => {
  return (
    <Button variant='select' size='full' className='!justify-between' onClick={handleClick}>
      <div>{text}</div>
      <div className='h-4 w-4 rounded-full bg-gray02'></div>
    </Button>
  );
};

export default SelectBtn;
