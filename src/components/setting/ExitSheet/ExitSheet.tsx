import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import Button from '@/components/common/button/Button/Button';
import { User } from '@/types/apis/groupApi';

interface ExitSheetProps {
  /** sheet Title */
  sheetTitle: string;
  /** 버튼 text */
  btnText: string;
  /** 바텀시트 오픈 여부 */
  isOpen: boolean;
  /** isOpen 바꾸는 set함수 */
  setOpen: (isOpen: boolean) => void;
  /** 선택된 멤버 */
  selectedMember: User | null;
  /** 보내 나가 */
  handleExit?: (member: User) => void;
  /** 안 보낼래 */
  handleClose?: () => void;
}

const ExitSheet: React.FC<ExitSheetProps> = ({
  sheetTitle,
  btnText,
  isOpen,
  setOpen,
  selectedMember,
  handleExit,
  handleClose,
}) => {
  const handleExitClick = () => {
    if (handleExit && selectedMember) {
      handleExit(selectedMember);
    }
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} title={sheetTitle} closeBtn={false}>
      <div className='flex flex-row gap-4 p-5'>
        <Button
          label={btnText}
          size='large'
          variant='full'
          className='mb-0'
          handleClick={handleExitClick}
        />
        <Button
          label='취소'
          size='large'
          variant='full'
          className='mb-0'
          handleClick={handleClose}
        />
      </div>
    </BottomSheet>
  );
};

export default ExitSheet;
