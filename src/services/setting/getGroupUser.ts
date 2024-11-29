import { axiosInstance } from '@/services/axiosInstance';
import { GetGroupUserRes } from '@/types/apis/groupApi';
import { GetPageParams } from '@/types/apis/pageApi';

export const getGroupUser = async (
  channelId: number,
  params: GetPageParams = { page: 0, size: 20 }
) => {
  try {
    const response = await axiosInstance.get<GetGroupUserRes>(
      `/api/v1/channels/${channelId}/users`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error('그룹 멤버 조회 실패:', error);
    throw error;
  }
};
