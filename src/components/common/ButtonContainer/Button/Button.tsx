import { Button as ButtonComponent } from '@/components/ui/button';

interface ButtonProps {
  /** 라벨 */
  label: string;
  /** 타입 */
  variant: 'full' | 'outline' | 'secondary' | 'ghost' | 'link';
  /** 사이즈 */
  size: 'small' | 'medium' | 'large';
  handleClick?: () => void;
}

const Button = ({ label, variant = 'full', size, handleClick }: ButtonProps) => {
  return (
    <ButtonComponent variant={variant} size={size} onClick={handleClick}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
