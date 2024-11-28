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
    <Button variant='select' size='full' className='!justify-between' onClick={handleClick}>
      <div>{text}</div>
      <div>{type === 'housework' ? '+' : '>'}</div>
    </Button>
  );
};

export default OpenSheetBtn;
