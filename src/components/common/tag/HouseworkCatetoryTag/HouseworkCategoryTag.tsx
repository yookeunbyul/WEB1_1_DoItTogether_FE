import { Badge } from '@/components/common/ui/badge';

export interface HouseworkCategoryTagProps {
  /** 집안일 카테고리 */
  category: string;
  /** 상태 */
  status?: string;
  isDark?: boolean;
  isSelected?: boolean;
}

const HouseworkCategoryTag: React.FC<HouseworkCategoryTagProps> = ({
  category,
  status,
  isDark,
  isSelected,
}) => {
  return (
    <div>
      <Badge
        variant={'secondary'}
        className={`px-1 text-12 ${isDark && 'dark'} ${status === 'complete' && 'border-none bg-gray02'} ${isSelected && 'bg-[#1FCFBA]'}`}
      >
        {category}
      </Badge>
    </div>
  );
};

export default HouseworkCategoryTag;
