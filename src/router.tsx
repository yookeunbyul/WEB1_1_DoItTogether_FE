import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';

import MainLayout from '@/layout/MainLayout';
import StatisticsLayout from '@/layout/StatisticsLayout';

import ErrorPage from '@/pages/ErrorPage';
import LandingPage from '@/pages/LandingPage';
import RegisterPage from '@/pages/RegisterPage';
import SurveyIntroPage from '@/pages/SurveyIntroPage';
import SurveyPage from '@/pages/SurveyPage';
import GroupCreatePage from '@/pages/GroupCreatePage';
import GroupSelectPage from '@/pages/GroupSelectPage';
import GroupSettingPage from '@/pages/GroupSettingPage';
import HomePage from '@/pages/HomePage';
import WeeklyStatisticsPage from '@/pages/WeeklyStatisticsPage';
import MonthlyStatisticsPage from '@/pages/MonthlyStatisticsPage';
import PresetSettingPage from '@/pages/PresetSettingPage';
import MyPage from '@/pages/MyPage';
import MyPageEditPage from '@/pages/MyPageEditPage';
import AccountManagePage from '@/pages/AccountManagePage';
import LeavePage from '@/pages/LeavePage';
import HouseWorkStepOnePage from '@/pages/HouseWorkStepOnePage';
import HouseWorkStepTwoPage from '@/pages/HouseWorkStepTwoPage';
import GroupInviteReceivePage from '@/pages/GroupInviteReceivePage';
import ScrollToTop from '@/components/common/scroll/ScrollToTop';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const RootLayout = () => {
  const location = useLocation();

  // main 경로에 대해서는 애니메이션 제외
  const shouldAnimate = !location.pathname.startsWith('/main');

  return (
    <>
      <ScrollToTop />
      {shouldAnimate ? (
        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={300} classNames='page'>
            <div className='page'>
              <Outlet />
            </div>
          </CSSTransition>
        </TransitionGroup>
      ) : (
        <Outlet />
      )}
      <Toaster />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/survey-intro',
        element: <SurveyIntroPage />,
      },
      {
        path: '/survey',
        element: <SurveyPage />,
      },
      {
        path: '/group-select',
        element: <GroupSelectPage />,
      },
      {
        path: '/group/create',
        element: <GroupCreatePage />,
      },
      {
        path: '/group/invite-receive',
        element: <GroupInviteReceivePage />,
      },
      {
        path: '/main',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'statistics',
            element: <StatisticsLayout />,
            children: [
              {
                index: true, // 기본 리다이렉트
                element: <WeeklyStatisticsPage />,
              },
              {
                path: 'weekly',
                element: <WeeklyStatisticsPage />,
              },
              {
                path: 'monthly',
                element: <MonthlyStatisticsPage />,
              },
            ],
          },
          {
            path: 'group-setting',
            element: <GroupSettingPage />,
          },
          {
            path: 'my-page',
            element: <MyPage />,
          },
          {
            path: 'my-page/edit',
            element: <MyPageEditPage />,
          },
        ],
      },
      {
        path: 'my-page/account-manage',
        element: <AccountManagePage />,
      },
      {
        path: 'my-page/leave',
        element: <LeavePage />,
      },
      {
        path: '/group-setting/preset-setting',
        element: <PresetSettingPage />,
      },
      {
        path: '/add-housework/step1',
        element: <HouseWorkStepOnePage />,
      },
      {
        path: '/add-housework/step2',
        element: <HouseWorkStepTwoPage />,
      },
    ],
  },
]);
