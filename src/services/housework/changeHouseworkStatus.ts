import { axiosInstance } from '@/services/axiosInstance';
import { ChangeHouseworkStatusReq, ChangeHouseworkStatusRes } from '@/types/apis/houseworkApi';

export const changeHouseworkStatus = async ({
  channelId,
  houseworkId,
}: ChangeHouseworkStatusReq) => {
  try {
    const response = await axiosInstance.put<ChangeHouseworkStatusRes>(
      `/api/v1/channels/${channelId}/houseworks/${houseworkId}/changeStatus`
    );
    return response.data;
  } catch (error) {
    throw new Error('집안일 상태 변경 실패');
  }
};
