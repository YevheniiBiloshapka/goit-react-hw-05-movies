import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 11px 25px;
  gap: 10px;
  border: none;
  max-width: 180px;
  height: 40px;

  background: #e10914;
  box-shadow: 2px 2px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;

  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: #f5454e;

    transform: scale(1.02);
  }
`;

export const Input = styled.input`
  width: 288px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 11px 16px;
  gap: 8px;

  background: #f4f4f4;
  border: 1px solid #c5c5c5;
  border-radius: 6px;
  outline: none;
  &:hover,
  &:focus {
    border: 1px solid #e10914;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 16px;
`;
