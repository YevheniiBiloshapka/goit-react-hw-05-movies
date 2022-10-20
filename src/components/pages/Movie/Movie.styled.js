import styled from 'styled-components';
import background from '../..//img/hero.jpg';

export const Hero = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 511px;

  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

export const HeroForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 31px 0 0 0;

  font-weight: 800;
  font-size: 20px;
  line-height: 74.69%;
  letter-spacing: 0.03em;
  text-transform: uppercase;

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
export const Box = styled.div`
  display: flex;
  flex-direction: column;

  padding: 21px;
  background: #ffffff;
  box-shadow: -2px -2px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
  z-index: 1;
  position: relative;

  max-width: calc(100vw - 48px);

  margin-top: 400px;
  margin-bottom: 100px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  & button {
    margin: 0 auto;
    margin-top: 40px;
  }
`;
