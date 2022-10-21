import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 38px;
`;
export const Item = styled.li`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px rgba(47, 3, 3, 0.43);
  }
`;
export const ItemImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Tumb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;

  background: rgba(94, 92, 92, 0.34);
  box-shadow: inset 11.9px -11.9px 11.9px rgba(165, 165, 165, 0.051),
    inset -11.9px 11.9px 11.9px rgba(255, 255, 255, 0.051);
  backdrop-filter: blur(11.305px);
`;
export const ItemName = styled.h2`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.03em;
  margin: 0;

  color: #ffffff;
`;
