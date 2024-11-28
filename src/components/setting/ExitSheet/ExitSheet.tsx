import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import Button from '@/components/common/button/Button/Button';

interface ExitSheetProps {
  /** sheet Title tag */
  tag?: string;
  /** sheet Title */
  sheetTitle: string;
  /** 버튼 text */
  btnText: string;
  /** 바텀시트 오픈 여부 */
  isOpen: boolean;
  /** isOpen 바꾸는 set함수 */
  setOpen: (isOpen: boolean) => void;
  /** 보내 나가 */
  handleExit?: () => void;
  /** 안 보낼래 */
  handleClose?: () => void;
}

const ExitSheet: React.FC<ExitSheetProps> = ({
  tag,
  sheetTitle,
  btnText,
  isOpen,
  setOpen,
  handleExit,
  handleClose,
}) => {
  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} title={sheetTitle} closeBtn={false} tag={tag}>
      <div className='flex flex-col gap-4 p-5'>
        <Button
          label={btnText}
          size='large'
          variant='full'
          className='mb-0'
          handleClick={handleExit}
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
