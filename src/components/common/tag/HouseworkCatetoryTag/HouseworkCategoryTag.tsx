import { Badge } from '@/components/common/ui/badge';

export interface HouseworkCategoryTagProps {
  /** 집안일 카테고리 */
  category: string;
  /** 상태 */
  variant?: 'primary' | 'secondary' | 'disabled' | 'grayfill' | 'darkfill';
}

const HouseworkCategoryTag: React.FC<HouseworkCategoryTagProps> = ({
  category,
  variant = 'primary',
}) => {
  return (
    <div>
      <Badge variant={variant}>{category}</Badge>
    </div>
  );
};

export default HouseworkCategoryTag;