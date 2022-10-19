import styled from 'styled-components';
import CommentSvg from '../../../img/comment.svg';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const Item = styled.li`
  display: flex;
  letter-spacing: 0.03em;
  color: #0e1721;
  & h3 {
    color: #7f8e9d;
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  & p {
    position: relative;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    padding: 21px 28px;
    border: 1px solid #c5c5c5;
    border-radius: 1px 6px 6px 6px;
    &::before {
      top: -2.5px;
      left: -6px;
      z-index: 2;
      content: '';
      position: absolute;
      background: url(${CommentSvg}) no-repeat 0 0;
      background-size: 7px 11px;
      width: 8px;
      height: 9px;
      vertical-align: middle;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  width: 75px;
  height: 75px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Comment = styled.div`
  width: 968px;
`;
