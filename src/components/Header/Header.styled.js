import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Head = styled.header`
  background: #0d0d0d;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 3px 10px rgba(2, 15, 61, 0.25);
  color: white;
  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Logo = styled.div`
  display: block;
  color: red;
  width: 203.95px;
  height: 40px;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.03em;

  color: #ffffff;
`;
export const LinkNav = styled(NavLink)`
  position: relative;
  padding: 29px 0;

  &:hover {
    font-weight: 700;
    color: #e10914;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: 0;
    width: 0%;
    height: 4px;
    background: #e10914;
    will-change: left, width;
    border-radius: 2px;
    transition: left 250ms cubic-bezier(0.4, 0, 0.2, 1),
      width 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::after {
    left: 0;
    width: 100%;
  }

  &.active {
    color: #e10914;
    &::after {
      position: absolute;
      content: '';
      bottom: -1px;
      left: 0;
      height: 4px;
      width: 100%;
      background: $active-color;
      border-radius: 2px;
    }
  }
`;
