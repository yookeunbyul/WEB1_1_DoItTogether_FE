import { axiosInstance } from '@/services/axiosInstance';
import { BanUserReq, BanUserRes } from '@/types/apis/groupApi';

export const postBanUser = async (channelId: number, data: BanUserReq) => {
  try {
    const response = await axiosInstance.post<BanUserRes>(
      `/api/v1/channels/${channelId}/kick`,
      data
    );
    return response.data;
  } catch (error) {
    console.error('멤버 추방 및 나가기 실패:', error);
    throw error;
  }
};
