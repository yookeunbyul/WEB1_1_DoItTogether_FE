import { axiosInstance } from '@/services/axiosInstance';
import { DeleteHouseworkReq, DeleteHouseworkRes } from '@/types/apis/houseworkApi';

export const deleteHousework = async ({ channelId, houseworkId }: DeleteHouseworkReq) => {
  try {
    const response = await axiosInstance.delete<DeleteHouseworkRes>(
      `/api/v1/channels/${channelId}/houseworks/${houseworkId}`
    );
    return response.data;
  } catch (error) {
    throw new Error('집안일 삭제 실패');
  }
};
