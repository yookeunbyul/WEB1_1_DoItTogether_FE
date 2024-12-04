import {
  BathRoomIcon,
  BedRoomIcon,
  EtcIcon,
  KitchenIcon,
  LivingRoomIcon,
  ProfileIcon,
} from '@/components/common/icon';
import { Badge } from '@/components/common/ui/badge';

interface TextTagProps {
  /** 타입 */
  type: 'darkfill' | 'grayfill' | 'secondary';
  /** 라벨 */
  label: string;
  className?: string;
  findNameByMember?: string;
  category?: string;
}

const TextTag = ({ type, label, className, findNameByMember, category }: TextTagProps) => {
  return (
    <Badge variant={type} className={className}>
      {category && category === '거실' && <LivingRoomIcon />}
      {category && category === '주방' && <KitchenIcon />}
      {category && category === '욕실' && <BathRoomIcon />}
      {category && category === '침실' && <BedRoomIcon />}
      {category && category === '기타' && <EtcIcon />}
      {findNameByMember && <ProfileIcon />}
      {label}
    </Badge>
  );
};

export default TextTag;
