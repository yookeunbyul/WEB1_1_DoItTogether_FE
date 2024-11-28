import { Badge } from '@/components/common/ui/badge';

interface TextTagProps {
  /** 타입 */
  type: 'darkfill' | 'grayfill';
  /** 라벨 */
  label: string;
}

const TextTag = ({ type, label }: TextTagProps) => {
  return <Badge variant={type}>{label}</Badge>;
};

export default TextTag;
