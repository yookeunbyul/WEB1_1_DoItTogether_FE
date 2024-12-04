import { axiosInstance } from '@/services/axiosInstance';
import { GetGroupUserReq, GetGroupUserRes } from '@/types/apis/groupApi';
import { GetPageParams } from '@/types/apis/pageApi';

export const getGroupUser = async (
  { channelId }: GetGroupUserReq,
  params: GetPageParams = { page: 0, size: 20 }
) => {
  try {
    const response = await axiosInstance.get<GetGroupUserRes>(
      `/api/v1/channels/${channelId}/users`,
      { params }
    );
    return response.data;
  } catch (error) {
    throw new Error('그룹 사용자 조회에 실패했습니다');
  }
};
