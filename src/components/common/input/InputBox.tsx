import { Input } from '@/components/common/ui/input';

interface InputBoxProps {
  value?: string;
  placeholder?: string;
  disabled: boolean;
  handleChange?: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, placeholder, disabled, handleChange }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange?.(e.target.value);
  };

  return (
    <div>
      <Input
        placeholder={placeholder}
        className='h-12 rounded-lg font-label'
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
