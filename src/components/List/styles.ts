
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  li {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 700;
  }
  
  span {
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
  }
  
  p { 
    margin-left: 20px;
    font-size: 14px;
    font-weight: 300;
  }
`;
