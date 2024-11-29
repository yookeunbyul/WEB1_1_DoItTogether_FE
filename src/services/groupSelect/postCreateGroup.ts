import { axiosInstance } from '@/services/axiosInstance';
import { CreateGroupRes } from '@/types/apis/groupApi';

export const postCreateGroup = async (name: string) => {
  try {
    const response = await axiosInstance.post<CreateGroupRes>('/api/v1/channels', { name: name });
    return response.data;
  } catch (error) {
    console.error('채널 생성 실패:', error);
    throw error;
  }
};
