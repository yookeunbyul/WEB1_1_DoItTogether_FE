import { axiosInstance } from '@/services/axiosInstance';
import { ChangeGroupNameReq, ChangeGroupNameRes } from '@/types/apis/groupApi';

export const putChangeGroupName = async ({ channelId, name }: ChangeGroupNameReq) => {
  try {
    const response = await axiosInstance.put<ChangeGroupNameRes>(
      `/api/v1/channels/${channelId}/name`,
      name
    );
    return response.data;
  } catch (error) {
    console.error('방 이름 수정 실패:', error);
    throw error;
  }
};
