import { axiosInstance } from '@/services/axiosInstance';
import { LeaveGroupReq, LeaveGroupRes } from '@/types/apis/groupApi';

export const deleteGroupUser = async ({ channelId }: LeaveGroupReq) => {
  try {
    const response = await axiosInstance.delete<LeaveGroupRes>(
      `/api/v1/channels/${channelId}/leave`
    );
    return response.data;
  } catch (error) {
    console.error('방 나가기 실패:', error);
    throw error;
  }
};
