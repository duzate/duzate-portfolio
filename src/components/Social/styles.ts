
import styled from 'styled-components';
import { theme } from '../../global/styles/themes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-left: 40px;
  
  & + div {
    font-weight: 400;
    margin-top: 20px;
  }
  
  svg {
    font-size: 24px;
    color: ${theme.colors.textColor};
  }
`;
