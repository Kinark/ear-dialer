import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import Img from '~/components/Img';

import bookFill from '~/assets/images/book-fill.svg';
import clipboardFill from '~/assets/images/clipboard-text-fill.svg';
import ear from '~/assets/images/ear.svg';

const BottomBar = () => {
  return (
    <Bar>
      <BarList>
        <BarLink to="contacts" label="Contacts" icon={bookFill} />
        <li>
          <DialerButton to="dialer">
            <Img src={ear} />
          </DialerButton>
        </li>
        <BarLink to="recent" label="Recents" icon={clipboardFill} />
      </BarList>
    </Bar>
  );
};

interface BarLinkProps {
  to: string;
  label: string;
  icon: string;
}

const BarLink = ({ to, label, icon }: BarLinkProps) => (
  <BarItem>
    <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
      <Img src={icon} />
      {label}
    </NavLink>
  </BarItem>
);

export default BottomBar;

const Bar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bottomBar};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  height: 72px;
  z-index: 2;
`;

const BarList = styled.ul`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const BarItem = styled.li`
  flex: 1;
  a {
    &.active {
      font-weight: 600;
      opacity: 1;
    }
    transition: opacity 150ms ease-out, font-weight 300ms ease-out;
    opacity: 0.5;
    display: flex;
    gap: 2px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

const DialerButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  top: 0;
  transition: transform ${({ theme }) => theme.animation.easings.quick},
    top ${({ theme }) => theme.animation.easings.quick}, box-shadow ${({ theme }) => theme.animation.easings.quick};
  &.active {
    transform: scale(1.2);
    top: -32px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  }
`;
