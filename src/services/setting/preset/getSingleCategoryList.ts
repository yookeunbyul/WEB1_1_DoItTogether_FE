import { axiosInstance } from '@/services/axiosInstance';
import { GetSinglePresetListReq, GetSinglePresetListRes } from '@/types/apis/presetApi';
import { GetPageParams } from '@/types/apis/pageApi';

export const getSingleCategoryList = async (
  data: GetSinglePresetListReq,
  params: GetPageParams = { page: 0, size: 20 }
) => {
  try {
    const response = await axiosInstance.get<GetSinglePresetListRes>(
      `/api/v1/channels/${data.channelId}/presets/categories/${data.presetCategoryId}/items`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error('프리셋 특정 카테고리 조회 실패:', error);
    throw error;
  }
};
