import { axiosInstance } from '@/services/axiosInstance';
import { CreateChannelResponse } from '@/types/apis/chnnel';

interface CreateChannelRequest {
  name: string;
}

export const postCreateGroup = async (data: CreateChannelRequest) => {
  try {
    const response = await axiosInstance.post<CreateChannelResponse>('/api/v1/channels', data);
    return response.data;
  } catch (error) {
    console.error('채널 생성 실패:', error);
    throw error;
  }
};
