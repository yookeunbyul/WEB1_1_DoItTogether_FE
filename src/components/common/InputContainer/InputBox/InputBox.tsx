import { Input } from '@/components/ui/input';

interface InputBoxProps {
  value?: string;
  placeholder?: string;
  disabled: boolean;
  handleChange?: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, placeholder, disabled, handleChange }) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        className='h-12 rounded-full text-16'
        disabled={disabled}
        value={value}
        onChange={e => handleChange?.(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
