import styled from 'styled-components';
import background from '../..//img/hero.jpg';

export const Hero = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 511px;

  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px 0 0 0;

  font-weight: 800;
  font-size: 60px;
  line-height: 74.69%;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #0d0d0d;

  & span {
    font-weight: 900;
    font-size: 40px;
    line-height: 76.69%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 8px;

    color: #ffffff;
  }
`;

export const FilmList = styled.ul`
  padding: 21px;
  background: #ffffff;
  box-shadow: -2px -2px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;

  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 38px;

  margin-top: 400px;
  margin-bottom: 100px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
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
    cursor: zoom-in;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.37))
      drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25));
    border-radius: 6.52px;
  }
`;
export const ItemImage = styled.img`
  width: 100%;
  height: auto;
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
