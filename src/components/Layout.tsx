import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BottomBar from '~/components/BottomBar';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      return navigate('/recent');
    }
  }, [navigate]);
  return (
    <BottomBarAvoider>
      <Outlet />
      <BottomBar />
    </BottomBarAvoider>
  );
};

export default Layout;

const BottomBarAvoider = styled.div`
  padding-bottom: 72px;
`;
