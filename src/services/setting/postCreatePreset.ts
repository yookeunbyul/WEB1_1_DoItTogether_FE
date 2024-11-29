import { axiosInstance } from '@/services/axiosInstance';
import { PresetSettingResponse } from '@/types/apis/presetSetting';

interface CreatePresetRequest {
  category: string;
}

export const postCreatePreset = async (channelId: number, data: CreatePresetRequest) => {
  try {
    const response = await axiosInstance.post<PresetSettingResponse>(
      `/api/v1/channels/${channelId}/presets/categories`,
      data
    );
    return response.data;
  } catch (error) {
    console.error('프리셋 생성 실패:', error);
    throw error;
  }
};
