import { Input } from '@/components/common/ui/input';

interface InputBoxProps {
  value?: string;
  placeholder?: string;
  disabled: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, placeholder, disabled, handleChange }) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        className='h-12 rounded-full text-16'
        disabled={disabled}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;
