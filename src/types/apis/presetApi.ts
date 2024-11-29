import { BaseRes } from '@/types/apis/baseResponse';
import { Common } from '@/types/apis/commonApi';

/** 프리셋 카테고리 생성 */

export interface CreatePresetReq extends Pick<Common, 'channelId'> {
  category: string;
}
export interface CreatePresetRes extends BaseRes {
  result: {
    presetCategoryId: number;
    category: string;
  };
}
