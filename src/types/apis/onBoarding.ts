import { BaseRes } from '@/types/apis/baseResponse';

export interface PostPersonalKeywordReq {
  surveyResultText: string[];
}

export interface PostPersonalKeywordRes extends BaseRes {
  result: {
    keywords: string[];
  };
}
