import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px 20px;
`;

export const Item = styled.li`
  width: 158px;
  height: 249px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  border-radius: 6px;
  background-color: #e7e5e5;
  & div {
    width: 100%;
    height: 249px;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 6px;
  }
  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  & h4 {
    font-weight: 500;
    font-size: 12px;
    line-height: 130%;
    margin: 0;
    text-align: center;
    letter-spacing: 0.03em;
    color: #0e1721;
  }
  & p {
    width: 125px;
    font-weight: 400;
    font-size: 10px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #7f8e9d;
    margin: 0;
    & span {
      margin-left: 4px;
      color: #0e1721;
    }
  }
`;
