import { Badge } from '@/components/common/ui/badge';

interface TextTagProps {
  /** 타입 */
  type: 'darkfill' | 'grayfill' | 'secondary';
  /** 라벨 */
  label: string;
  className: string;
}

const TextTag = ({ type, label, className }: TextTagProps) => {
  return (
    <Badge variant={type} className={className}>
      {label}
    </Badge>
  );
};

export default TextTag;
