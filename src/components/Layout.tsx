import { useEffect, Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BottomBar from '~/components/BottomBar';
import LoaderSuspense from '~/components/LoaderSuspense';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      return navigate('/recent');
    }
  }, [navigate]);
  return (
    <BottomBarAvoider>
      <Suspense fallback={<LoaderSuspense />}>
        <Outlet />
      </Suspense>
      <BottomBar />
    </BottomBarAvoider>
  );
};

export default Layout;

const BottomBarAvoider = styled.div`
  padding-bottom: 72px;
`;
