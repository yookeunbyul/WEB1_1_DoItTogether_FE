import { Button as ButtonComponent } from '@/components/common/ui/button';

interface ButtonProps {
  /** 라벨 */
  label: string;
  /** 타입 */
  variant: 'full' | 'outline' | 'secondary' | 'ghost' | 'link';
  /** 사이즈 */
  size: 'small' | 'medium' | 'large';
  /** 클릭 이벤트 */
  handleClick?: () => void;
  /** 커스텀 스타일 */
  className?: string;
}

const Button = ({ label, variant = 'full', size, handleClick, className }: ButtonProps) => {
  return (
    <ButtonComponent variant={variant} size={size} onClick={handleClick} className={className}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
