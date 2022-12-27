import styled from 'styled-components';
import { theme } from '../../global/styles/themes';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${theme.colors.bgCards};
  box-shadow: 5px 5px 5px -1px #141414;
  border-radius: 1rem;
  padding: 30px;
  margin-bottom: 30px;
`;
