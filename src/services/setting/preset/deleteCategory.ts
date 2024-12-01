import { axiosInstance } from '@/services/axiosInstance';
import { DeletePresetCategoryReq, DeletePresetCategoryRes } from '@/types/apis/presetApi';

// 현재 호출부 없음
export const deleteCategory = async (data: DeletePresetCategoryReq) => {
  try {
    const response = await axiosInstance.delete<DeletePresetCategoryRes>(
      `/api/v1/channels/${data.channelId}/presets/categories/${data.presetCategoryId}`
    );
    return response.data;
  } catch (error) {
    console.error('프리셋 카테고리 삭제 실패:', error);
    throw error;
  }
};
