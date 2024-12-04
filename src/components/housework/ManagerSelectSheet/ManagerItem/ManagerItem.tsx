import React from 'react';

interface ManagerItemProps {
  /**멤버 이름 */
  name: string;
  /** 선택 상태 */
  selectState?: 'default' | 'person' | 'ai';
  /**클릭 함수 */
  handleClick: () => void;
}

const ManagerItem: React.FC<ManagerItemProps> = ({
  name,
  selectState = 'default',
  handleClick,
}: ManagerItemProps) => {
  const getStyle = () => {
    switch (selectState) {
      case 'person':
        return {
          container: 'bg-gray4',
          icon: 'bg-gray3',
          text: 'text-white',
        };
      case 'ai':
        return {
          container: 'bg-white shadow-md',
          icon: 'bg-white',
          text: 'text-gray4',
        };
      default:
        return {
          container: 'bg-white',
          icon: 'bg-white',
          text: 'text-gray4',
        };
    }
  };

  const styles = getStyle();

  return (
    <li
      className={`flex cursor-pointer items-center gap-x-3 rounded-full p-2 ${styles.container}`}
      onClick={handleClick}
    >
      <div className={`h-6 w-6 rounded-full ${styles.icon}`}></div>
      <div className={`text-14 ${styles.text}`}>{name}</div>
    </li>
  );
};

export default ManagerItem;
