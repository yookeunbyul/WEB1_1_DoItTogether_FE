import { Button } from '@/components/common/ui/button';
import { members } from '@/mock/addHousework';

interface OpenSheetBtnWithLabelProps {
  /**버튼 타이틀 */
  title: string;
  /**선택된 value */
  selected: string | number;
  /** 클릭하는 이벤트 */
  handleClick: () => void;
}

const OpenSheetBtnWithLabel: React.FC<OpenSheetBtnWithLabelProps> = ({
  title,
  selected,
  handleClick,
}: OpenSheetBtnWithLabelProps) => {
  const displayValue =
    typeof selected === 'number' ? members.find(member => member.id === selected)?.name : selected;

  return (
    <div className='flex items-center justify-between gap-x-6'>
      <div className='min-w-[48px] whitespace-nowrap bg-white03 text-left'>{title}</div>
      <Button variant='select' size='full' className='text-gray02' onClick={handleClick}>
        {displayValue}
      </Button>
    </div>
  );
};

export default OpenSheetBtnWithLabel;
