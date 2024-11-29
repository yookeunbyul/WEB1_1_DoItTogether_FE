import { axiosInstance } from '@/services/axiosInstance';
import { CreateGroupReq, CreateGroupRes } from '@/types/apis/groupApi';

export const postCreateGroup = async (data: CreateGroupReq) => {
  try {
    const response = await axiosInstance.post<CreateGroupRes>('/api/v1/channels', data);
    return response.data;
  } catch (error) {
    console.error('채널 생성 실패:', error);
    throw error;
  }
};
