import { BaseRes } from '@/types/apis/baseResponse';
import { Common } from '@/types/apis/commonApi';

export interface ComplimentReq extends Pick<Common, 'channelId'> {
  targetUserId: number;
}

export interface ComplimentRes extends BaseRes {
  result: {};
}

export interface PokeReq extends Pick<Common, 'channelId'> {
  targetUserId: number;
}

export interface PokeRes extends BaseRes {
  result: {};
}
