import Button from '@/components/common/ButtonContainer/Button/Button';

interface ButtonContainerProps {
  /** 좌측 버튼 */
  buttonLeft: {
    label: string;
    variant: 'full' | 'outline' | 'secondary' | 'ghost' | 'link';
    size: 'small' | 'medium' | 'large';
  };
  /** 우측 버튼 */
  buttonRight: {
    label: string;
    variant: 'full' | 'outline' | 'secondary' | 'ghost' | 'link';
    size: 'small' | 'medium' | 'large';
  };
}

const ButtonContainer = ({ buttonLeft, buttonRight }: ButtonContainerProps) => {
  return (
    <div className='flex items-center gap-2'>
      <Button {...buttonLeft} />
      <Button {...buttonRight} />
    </div>
  );
};

export default ButtonContainer;
