export interface PresetSettingResponse {
  isSuccess: boolean;
  httpStatus: string;
  code: string;
  message: string;
  result: {
    presetCategoryId: number;
    category: string;
  };
}
