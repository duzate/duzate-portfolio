import styled from 'styled-components';
import { theme } from '../../global/styles/themes';

export const Container = styled.div`
  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.green};
  }
`;
