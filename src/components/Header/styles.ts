import styled from 'styled-components';

export const CenteredFlexDevWrapper = styled.div`
  display: flex;
  background-color: rgb(65, 80, 170);
  @media only screen and (min-width: 992px) {
    width: 992px;
  }
  @media only screen and (max-width: 992px) {
    width: 100vw;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftHeadlineWrapper = styled.h2`
  font-size: 22px;
  color: white;
  margin: 20px;
`;
