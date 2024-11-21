import { useState } from 'react';
import MemberTab from './MemberTab/MemberTab';

const MemberTabContainer = () => {
  const dummyMembers = ['전체', '홍길동', '김철수', '이영희', '박지성', '최민수'];
  const [activeTab, setActiveTab] = useState(dummyMembers[0]);

  return (
    <div className='max-w px-5 text-center'>
      <div className='no-scrollbar overflow-x-auto overflow-y-hidden'>
        <ul className='-mb-px flex flex-nowrap'>
          {dummyMembers.map((memberName, index) => (
            <li className='me-2 flex-shrink-0' key={index}>
              <a
                href='#'
                onClick={e => {
                  e.preventDefault();
                  setActiveTab(memberName);
                }}
                className={`hover:border-black02 hover:text-gray02 inline-block w-20 py-2 ${
                  activeTab === memberName
                    ? 'border-black02 text-black02 border-b-2'
                    : 'border-none'
                }`}
              >
                <MemberTab memberName={memberName} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemberTabContainer;
