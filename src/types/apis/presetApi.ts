import { BaseRes } from '@/types/apis/baseResposne';

/** 프리셋 카테고리 생성 */
export interface CreatePresetRes extends BaseRes {
  result: {
    presetCategoryId: number;
    category: string;
  };
}

/** 프리셋 카테고리 생성 */
export interface CreatePresetReq {
  category: string;
}
