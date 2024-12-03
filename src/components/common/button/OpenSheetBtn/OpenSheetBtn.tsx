import { ArrowRightIcon, HomeIcon } from '@/components/common/icon';
import { Button } from '@/components/common/ui/button';

interface OpenSheetBtnProps {
  /** 셀렉트 버튼 title*/
  text: string;
  /** 클릭하는 이벤트 */
  handleClick: () => void;
  type: string;
}

const OpenSheetBtn: React.FC<OpenSheetBtnProps> = ({
  text,
  handleClick,
  type,
}: OpenSheetBtnProps) => {
  return (
    <Button
      variant={type === 'housework' ? 'select' : 'group'}
      size='large'
      className='items-center !justify-between'
      onClick={handleClick}
    >
      <div className='flex items-center gap-x-4'>
        {type === 'housework' ? '' : <HomeIcon width={24} height={24} />}
        <div className='font-body'>{text}</div>
      </div>

      <div>{type === 'housework' ? '+' : <ArrowRightIcon />}</div>
    </Button>
  );
};

export default OpenSheetBtn;
