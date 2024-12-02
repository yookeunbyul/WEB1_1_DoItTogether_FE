import { axiosInstance } from '@/services/axiosInstance';
import { GetHouseworkByIdReq, GetHouseworkByIdRes } from '@/types/apis/houseworkApi';

export const getHouseworkById = async ({ channelId, houseworkId }: GetHouseworkByIdReq) => {
  try {
    const response = await axiosInstance.get<GetHouseworkByIdRes>(
      `/api/v1/channels/${channelId}/houseworks/${houseworkId}`
    );
    return response.data;
  } catch (error) {
    throw new Error('집안일 id별 상세 정보 조회 실패');
  }
};
