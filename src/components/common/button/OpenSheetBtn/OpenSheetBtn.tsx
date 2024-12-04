import { ArrowRightIcon, HomeIcon, PlusIcon } from '@/components/common/icon';
import { Button } from '@/components/common/ui/button';

interface OpenSheetBtnProps {
  /** 셀렉트 버튼 title*/
  text: string;
  /** 클릭하는 이벤트 */
  handleClick: () => void;
  type: string;
  icon?: React.ReactNode;
}

const OpenSheetBtn: React.FC<OpenSheetBtnProps> = ({
  text,
  handleClick,
  type,
  icon,
}: OpenSheetBtnProps) => {
  return (
    <Button
      variant={type === 'housework' ? 'group' : 'group'}
      size='large'
      className='items-center !justify-between bg-white px-3'
      onClick={handleClick}
    >
      <div className='flex items-center gap-x-4'>
        {type === 'housework' ? '' : <HomeIcon width={24} height={24} />}
        {type === 'housework' && icon}
        <div className='font-body'>{text}</div>
      </div>

      <div>
        {type === 'housework' ? (
          <PlusIcon width={20} height={20} className='text-gray1' />
        ) : (
          <ArrowRightIcon className='text-main' />
        )}
      </div>
    </Button>
  );
};

export default OpenSheetBtn;
