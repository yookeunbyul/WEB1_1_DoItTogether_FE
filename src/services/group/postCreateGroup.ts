import { axiosInstance } from '@/services/axiosInstance';
import { CreateGroupReq, CreateGroupRes } from '@/types/apis/groupApi';

export const postCreateGroup = async ({ name }: CreateGroupReq) => {
  try {
    const response = await axiosInstance.post<CreateGroupRes>('/api/v1/channels', { name });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
