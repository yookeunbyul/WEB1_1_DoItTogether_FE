import { PostPersonalKeywordReq, PostPersonalKeywordRes } from './../../types/apis/onBoarding';
import { axiosInstance } from '@/services/axiosInstance';

export const postPersonalKeyword = async ({ surveyResultText }: PostPersonalKeywordReq) => {
  try {
    const response = await axiosInstance.post<PostPersonalKeywordRes>(`api/v1/personalities`, {
      surveyResultText,
    });
    return response.data;
  } catch (error) {
    throw new Error('성향 키워드 추출이 되지 않습니다.');
  }
};
