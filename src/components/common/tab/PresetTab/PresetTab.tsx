import PresetItem from '@/components/common/preset/PresetItem';
import PresetTabItem from '@/components/common/tab/PresetTab/PresetTabItem';
import { Tabs, TabsContent, TabsList } from '@/components/common/ui/tabs';
import { Category as PresetCategory } from '@/constants/category';

interface PresetItem {
  // 프리셋 아이템 아이디
  presetItemId: number;
  // 프리셋 아이템 이름
  name: string;
}
interface PresetList {
  // 프리셋 카테고리 아이디
  presetCategoryId: number;
  // 프리셋 카테고리 이름
  category: string;
  // 프리셋 아이템 리스트
  presetItemList: Array<PresetItem>;
}

interface PresetTabProps {
  presetData: PresetList[];
  isPresetSettingCustom?: boolean;
  deleteButtonStates?: Record<number, boolean>;
  handleSettingClick?: (itemId: number) => void;
  handleDeleteClick?: (itemId: number) => void;
  isBottomSheet?: boolean;
  handleClick?: (id: number, description: string, category: string) => void;
  selectedItem?: number | null;
}

const PresetTab: React.FC<PresetTabProps> = ({
  presetData,
  isPresetSettingCustom = false,
  deleteButtonStates = {},
  handleSettingClick,
  handleDeleteClick,
  isBottomSheet = false,
  handleClick,
  selectedItem,
}) => {
  const allPresetData = {
    category: PresetCategory.ALL,
    items: presetData.flatMap(categoryList =>
      categoryList.presetItemList.map(item => ({ ...item, category: categoryList.category }))
    ),
  };

  return (
    <Tabs defaultValue={PresetCategory.ALL}>
      <TabsList className='flex w-full justify-start gap-4 overflow-x-auto overflow-y-hidden bg-white03 p-0 px-5 no-scrollbar'>
        <PresetTabItem name={allPresetData.category} value={allPresetData.category} icon='' />
        {presetData.map(categoryList => (
          <PresetTabItem
            key={categoryList.presetCategoryId}
            name={categoryList.category}
            value={categoryList.category}
            icon=''
          />
        ))}
      </TabsList>
      <TabsContent
        key={allPresetData.category}
        value={allPresetData.category}
        className={`${isBottomSheet ? 'h-[250px]' : 'h-auto'} overflow-y-auto no-scrollbar`}
      >
        {allPresetData.items.map(item => (
          <div key={item.presetItemId}>
            <PresetItem
              category={item.category}
              housework={item.name}
              handleSelectClick={() =>
                handleClick && handleClick(item.presetItemId, item.name, item.category)
              }
              isBottomSheet={isBottomSheet}
              isPresetSettingCustom={isPresetSettingCustom}
              isShowDeleteBtn={deleteButtonStates[item.presetItemId]} //각 아이템의 boolean값이 들어간다.
              handleSettingClick={
                handleSettingClick && (() => handleSettingClick(item.presetItemId))
              }
              handleDeleteClick={handleDeleteClick && (() => handleDeleteClick(item.presetItemId))}
              isSelected={selectedItem === item.presetItemId}
            />
          </div>
        ))}
      </TabsContent>

      {presetData.map(categoryList => (
        <TabsContent
          key={categoryList.presetCategoryId}
          value={categoryList.category}
          className={`${isBottomSheet ? 'h-[250px]' : 'h-auto'} overflow-y-auto no-scrollbar`}
        >
          {categoryList.presetItemList.map(item => (
            <div key={item.presetItemId}>
              <PresetItem
                category={categoryList.category}
                housework={item.name}
                handleSelectClick={() =>
                  handleClick && handleClick(item.presetItemId, item.name, categoryList.category)
                }
                isBottomSheet={isBottomSheet}
                isPresetSettingCustom={isPresetSettingCustom}
                isShowDeleteBtn={deleteButtonStates[item.presetItemId]} //각 아이템의 boolean값이 들어간다.
                handleSettingClick={
                  handleSettingClick && (() => handleSettingClick(item.presetItemId))
                }
                handleDeleteClick={
                  handleDeleteClick && (() => handleDeleteClick(item.presetItemId))
                }
                isSelected={selectedItem === item.presetItemId}
              />
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PresetTab;
