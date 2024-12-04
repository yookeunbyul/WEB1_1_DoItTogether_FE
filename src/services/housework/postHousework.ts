import { axiosInstance } from '@/services/axiosInstance';
import { AddHouseworkReq, AddHouseworkRes } from './../../types/apis/houseworkApi';

export const postHousework = async ({
  channelId,
  category,
  startDate,
  task,
  startTime,
  userId,
}: AddHouseworkReq) => {
  try {
    const response = await axiosInstance.post<AddHouseworkRes>(
      `api/v1/channels/${channelId}/houseworks`,
      {
        category,
        task,
        startDate,
        startTime,
        userId,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('집안일 추가 실패');
  }
};