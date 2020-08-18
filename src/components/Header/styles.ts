import styled from 'styled-components';

export const CenteredFlexDevWrapper = styled.div`
  display: flex;
  background-color: rgb(65, 80, 170);
  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }
  @media only screen and (max-width: 1200px) {
    width: 100vw;
  }
`;

export const TabsWrapper = styled.div`
  margin-left: 120px;
  display: flex;
  align-items: center;
`;

export const LeftHeadlineWrapper = styled.h2`
  font-size: 22px;
  color: white;
  margin: 20px;
`;
