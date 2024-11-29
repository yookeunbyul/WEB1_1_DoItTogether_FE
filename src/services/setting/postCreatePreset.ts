import { axiosInstance } from '@/services/axiosInstance';
import { CreatePresetReq, CreatePresetRes } from '@/types/apis/presetApi';

export const postCreatePreset = async (channelId: number, data: CreatePresetReq) => {
  try {
    const response = await axiosInstance.post<CreatePresetRes>(
      `/api/v1/channels/${channelId}/presets/categories`,
      data
    );
    return response.data;
  } catch (error) {
    console.error('프리셋 생성 실패:', error);
    throw error;
  }
};
