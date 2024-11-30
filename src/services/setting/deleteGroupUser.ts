import { axiosInstance } from '@/services/axiosInstance';
import { LeaveGroupRes } from '@/types/apis/groupApi';

export const deleteGroupUser = async (channelId: number) => {
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
