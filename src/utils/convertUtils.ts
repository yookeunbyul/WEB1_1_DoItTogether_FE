/**
 * constants/TabName.ts 탭명을 Charger 타입 배열로 변환
 * Tab 컴포넌트에 필요한 chargers 배열을 생성하는 함수
 */
export const convertTabNameToChargers = (TabName: Record<string, string>) => {
  return Object.values(TabName).map(value => ({ name: value }));
};
