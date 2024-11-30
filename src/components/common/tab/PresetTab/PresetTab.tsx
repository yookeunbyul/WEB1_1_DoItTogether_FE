import PresetItem from '@/components/common/preset/PresetItem';
import PresetTabItem from '@/components/common/tab/PresetTab/PresetTabItem';
import { Tabs, TabsContent, TabsList } from '@/components/common/ui/tabs';
import { Category as PresetCategory } from '@/constants/Category';

interface PresetItem {
  id: number;
  description: string;
}

interface PresetData {
  category: string;
  items: PresetItem[];
}

interface PresetTabProps {
  data: PresetData[];
  isInPresetSetting?: boolean;
  deleteButtonStates?: Record<number, boolean>;
  handleSettingClick?: (itemId: number) => void;
  handleDeleteClick?: (itemId: number) => void;
  isBottomSheet?: boolean;
  handleClick?: (id: number, description: string, category: string) => void;
  selectedItem?: number | null;
}

const PresetTab: React.FC<PresetTabProps> = ({
  data,
  isInPresetSetting = false,
  deleteButtonStates = {},
  handleSettingClick,
  handleDeleteClick,
  isBottomSheet = false,
  handleClick,
  selectedItem,
}) => {
  const allPresetData = {
    category: PresetCategory.ALL,
    items: data.flatMap(category =>
      category.items.map(item => ({ ...item, category: category.category }))
    ),
  };

  return (
    <Tabs defaultValue={PresetCategory.ALL}>
      <TabsList className='flex w-full justify-start gap-4 overflow-x-auto overflow-y-hidden bg-white03 p-0 px-5 no-scrollbar'>
        <PresetTabItem name={allPresetData.category} value={allPresetData.category} icon='' />
        {data.map((tab, index) => (
          <PresetTabItem key={index} name={tab.category} value={tab.category} icon='' />
        ))}
      </TabsList>
      <TabsContent
        key={allPresetData.category}
        value={allPresetData.category}
        className={`${isBottomSheet ? 'h-[250px]' : 'h-auto'} overflow-y-auto no-scrollbar`}
      >
        {allPresetData.items.map(item => (
          <div key={item.id}>
            <PresetItem
              category={item.category}
              housework={item.description}
              handleSelectClick={() =>
                handleClick && handleClick(item.id, item.description, item.category)
              }
              isInPresetSetting={isInPresetSetting}
              isShowDeleteBtn={deleteButtonStates[item.id]} //각 아이템의 boolean값이 들어간다.
              handleSettingClick={handleSettingClick && (() => handleSettingClick(item.id))}
              handleDeleteClick={handleDeleteClick && (() => handleDeleteClick(item.id))}
              isSelected={selectedItem === item.id}
            />
          </div>
        ))}
      </TabsContent>

      {data.map(tabData => (
        <TabsContent
          key={tabData.category}
          value={tabData.category}
          className={`${isBottomSheet ? 'h-[250px]' : 'h-auto'} overflow-y-auto no-scrollbar`}
        >
          {tabData.items.map(item => (
            <div key={item.id}>
              <PresetItem
                category={tabData.category}
                housework={item.description}
                handleSelectClick={() =>
                  handleClick && handleClick(item.id, item.description, tabData.category)
                }
                isInPresetSetting={isInPresetSetting}
                isShowDeleteBtn={deleteButtonStates[item.id]} //각 아이템의 boolean값이 들어간다.
                handleSettingClick={handleSettingClick && (() => handleSettingClick(item.id))}
                handleDeleteClick={handleDeleteClick && (() => handleDeleteClick(item.id))}
                isSelected={selectedItem === item.id}
              />
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PresetTab;
