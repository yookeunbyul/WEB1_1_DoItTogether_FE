import { axiosInstance } from '@/services/axiosInstance';
import { CreatePresetCategoryReq, CreatePresetCategoryRes } from '@/types/apis/presetApi';

export const postCreateCategory = async (data: CreatePresetCategoryReq) => {
  try {
    const response = await axiosInstance.post<CreatePresetCategoryRes>(
      `/api/v1/channels/${data.channelId}/presets/categories`,
      data.category
    );
    return response.data;
  } catch (error) {
    console.error('프리셋 카테고리 생성 실패:', error);
    throw error;
  }
};
