import { useEffect } from 'react';
import {
  getAllCategoryName,
  postCreateCategory,
  postCreatePresetItem,
} from '@/services/setting/preset';
import { Category } from '@/constants';
import usePresetSettingStore from '@/store/usePresetSettingStore';
import { useNavigate } from 'react-router-dom';
import { mockData } from '@/mock/mockPresetSettingPage';
import { PresetDefault, PresetTabName } from '@/constants';
import useHomePageStore from '@/store/useHomePageStore';

const usePresetSetting = () => {
  const navigate = useNavigate();
  const { setCategoryList, setDeleteButtonStates, activeTab } = usePresetSettingStore();
  const { currentGroup } = useHomePageStore();
  const channelId = currentGroup.channelId;

  useEffect(() => {
    let ignore = false;

    // TODO
    // 고정 카테고리값을 여기서 생성하는것이 불필요한 과정이라서,
    // 백엔드측에 기본 고정값을 그룹생성 시점에 넣어달라고 요청한 상태
    // 수정이 완료된다면, create 호출문 제거하고 service/ 폴더에서도 미사용 문구 넣어주기
    const initCategories = async () => {
      try {
        const response = await getAllCategoryName({ channelId });
        const categoryListData = response.result.categoryList;

        if (!ignore) {
          if (categoryListData.length === 0) {
            const CategoryWithoutAll = Object.values(Category).filter(
              value => value !== Category.ALL
            );

            await Promise.all(
              CategoryWithoutAll.map(categoryName =>
                postCreateCategory({
                  channelId,
                  category: categoryName,
                })
              )
            );

            const newResponse = await getAllCategoryName({ channelId });
            if (!ignore) {
              setCategoryList(newResponse.result.categoryList);
            }
          } else {
            setCategoryList(categoryListData);
          }
        }
      } catch (error) {
        console.error('카테고리 초기화 오류: ', error);
      }
    };

    initCategories();

    return () => {
      ignore = true;
    };
  }, [channelId, setCategoryList]);

  const handleAddInput = async (name: string, presetCategoryId: number) => {
    try {
      const response = await postCreatePresetItem({
        channelId,
        presetCategoryId,
        name,
      });
      console.log(response);
    } catch (error) {
      console.error('프리셋 아이템 추가 오류: ', error);
    }
  };

  const handleSettingClick = (itemId: number) => {
    setDeleteButtonStates(prev => ({
      ...prev,
      [itemId]: true,
    }));
  };

  const handleDeleteClick = (itemId: number) => {
    setDeleteButtonStates(prev => ({
      ...prev,
      [itemId]: false,
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const getPresetData = () => {
    return activeTab === PresetTabName.USER_DATA ? mockData.userData : PresetDefault;
  };

  return {
    handleAddInput,
    handleSettingClick,
    handleDeleteClick,
    handleBack,
    getPresetData,
  };
};

export default usePresetSetting;
