import { BaseRes } from '@/types/apis/baseResponse';
import { Common } from '@/types/apis/commonApi';
import { Preset } from './../../components/common/tab/Tab/TabItem.stories';

/** 프리셋 카테고리 정보 */
export interface Preset {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
  /** 카테고리 이름 */
  category: string;
}

/** 프리셋 카테고리 생성 */
export interface CreatePresetReq extends Pick<Common, 'channelId'> {
  /** 카테고리 이름 */
  category: string;
}
export interface CreatePresetRes extends BaseRes {
  result: Preset;
}

/** 프리셋 카테고리 삭제 */
export interface DeletePresetReq {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
}

export interface DeletePresetRes {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
}

/** 모든 프리셋 카테고리 이름 조회 */
export interface GetAllPresetRes {
  /** 카테고리 이름 리스트 */
  categoryList: Array<Preset>;
}

/** 프리셋 리스트 정보 */
export interface PresetList {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
  /** 프리셋 카테고리 이름 */
  category: string;
  /** 프리셋 아이디 */
  presetId: number;
  /** 프리셋 아이템 이름 */
  // TODO 백엔드 키값 수정되면 여기도 수정 'name'
  value: string;
}

/** 전체 프리셋 리스트 조회 */
export interface GetAllPresetListRes {
  presetKeywordList: Array<PresetList>;
}

/** 프리셋 아이템 정보 */
export interface PresetItem {
  presetItemId: number;
  // TODO 백엔드 키값 수정되면 여기도 수정 'name'
  value: string;
}

/** 특정 프리셋 카테고리의 프리셋 아이템 리스트 조회 */
export interface GetPresetListRes {
  presetCategoryId: number;
  category: string;
  presetList: Array<PresetItem>;
}

/** 프리셋 아이템 생성 */
export interface CreatePresetItemReq {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
  /** 프리셋 아이템 이름 */
  name: string;
}
export interface CreatePresetItemRes {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
  /** 프리셋 아이템 아이디 */
  presetItemId: number;
  /** 프리셋 아이템 카테고리 */
  category: string;
}

/** 프리셋 아이템 삭제 */
export interface DeletePresetItemReq {
  /** 프리셋 아이템 아이디 */
  presetItemId: number;
}
export interface DeletePresetItemRes {
  /** 프리셋 아이템 아이디 */
  presetItemId: number;
}
