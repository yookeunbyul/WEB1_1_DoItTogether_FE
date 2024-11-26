import { Input } from '@/components/ui/input';

interface InputBoxProps {
  value?: string;
  placeholder?: string;
  disabled: boolean;
  onChange?: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, placeholder, disabled, onChange }) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        className='rounded-full text-16'
        disabled={disabled}
        value={value}
        onChange={e => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
