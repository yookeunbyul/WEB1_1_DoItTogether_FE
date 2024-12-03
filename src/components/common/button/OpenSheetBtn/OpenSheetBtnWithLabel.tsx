import { CheckIcon, EtcIcon } from '@/components/common/icon';
import { Button } from '@/components/common/ui/button';
import { User } from '@/types/apis/groupApi';

interface OpenSheetBtnWithLabelProps {
  /**선택된 value */
  selected: string | number;
  /** 클릭하는 이벤트 */
  handleClick: () => void;
  members?: User[];
  icon?: React.ReactNode;
}

const OpenSheetBtnWithLabel: React.FC<OpenSheetBtnWithLabelProps> = ({
  selected,
  handleClick,
  members,
  icon,
}: OpenSheetBtnWithLabelProps) => {
  const displayValue =
    members && typeof selected === 'number'
      ? members.find(member => member.userId === selected)?.nickName || selected
      : selected;

  return (
    <div>
      <Button
        variant='select'
        size='large'
        className='bg-white text-gray justify-between'
        onClick={handleClick}
      >
        <div className='flex items-center gap-x-4'>
          <div>{icon}</div>
          {displayValue}
        </div>
        <CheckIcon />
      </Button>
    </div>
  );
};

export default OpenSheetBtnWithLabel;
