import React from 'react';
import { Badge } from '@/components/ui/badge';

export interface HouseworkCategoryTagProps {
  /** 집안일 카테고리 */
  category: string;
  /** 상태 */
  status?: string;
  isDark?: boolean;
}

const HouseworkCategoryTag: React.FC<HouseworkCategoryTagProps> = ({
  category,
  status,
  isDark,
}) => {
  return (
    <div>
      <Badge
        variant={'secondary'}
        className={`px-1 text-12 ${isDark && 'dark'} ${status === 'complete' && 'border-none bg-gray02'}`}
      >
        {category}
      </Badge>
    </div>
  );
};

export default HouseworkCategoryTag;
