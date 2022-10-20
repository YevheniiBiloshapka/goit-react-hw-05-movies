import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  padding: 21px;
  background: #ffffff;
  box-shadow: -2px -2px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;

  color: #0d0d0d;
  & h1 {
    font-weight: 800;
    font-size: 24px;
    line-height: 84.19%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #0d0d0d;

    & span {
      color: #ffffff;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  width: 240px;
  height: 300px;

  border-radius: 6px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Descr = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 10px 0 0 21px;
`;

export const FilmName = styled.div`
  & h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.03em;
    color: #0e1721;
    margin-bottom: 4px;
  }
  & p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;

    color: #636363;
    & span {
      font-weight: 600;
      color: #0e1721;
      margin-left: 4px;
    }
  }
`;

export const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & h3 {
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #0e1721;
  }
  & p {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.03em;

    color: #0e1721;
  }
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0px;
  align-items: center;
  padding: 4px 8px 4px 10px;
  gap: 7px;

  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  align-items: center;
  letter-spacing: 0.03em;

  color: #0e1721;
  & svg {
    width: 16px;
    height: 16px;
    fill: #e10914;
  }

  &:hover {
    background: #f5454e;
    color: #ffffff;
    & svg {
      fill: #fff;
    }
  }
`;

export const Addition = styled.div`
  padding: 21px;
  background: #ffffff;
  box-shadow: -2px -2px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;

  color: #0d0d0d;
  margin-bottom: 50px;
  & h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;

    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #0e1721;
  }
`;

export const TabList = styled.ul`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #c5c5c5;
  margin-bottom: 20px;

  & li {
    position: relative;
  }
`;

export const Item = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  font-weight: 500;

  &:hover {
    color: #e10914;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: 0;
    width: 0%;
    height: 2px;
    background: #e10914;
    will-change: left, width;
    border-radius: 2px;
    transition: left 250ms cubic-bezier(0.4, 0, 0.2, 1),
      width 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    color: #e10914;
    &::after {
      position: absolute;
      content: '';
      bottom: -1px;
      left: 0;
      height: 2px;
      width: 100%;
      background: $active-color;
      border-radius: 2px;
    }
  }
`;
