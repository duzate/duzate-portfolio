
import styled from 'styled-components';
import { theme } from '../../global/styles/themes';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  text-align: center;
  margin-top: 20px;
  margin-left: 10px;
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.bgTechs};
    font-size: 14px;
    font-weight: 700;
    color: #000;
    height: 24px;
    border-radius: 30px;
  }
`;
