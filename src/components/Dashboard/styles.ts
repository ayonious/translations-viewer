import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FixedRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 200px;
  padding: 30px;
`;

export const CenterPageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 992px) {
    max-width: 992px;
  }
  @media only screen and (min-width: 992px) {
    width: 992px;
  }
`;

export const WholePageWrapper = styled.div`
  display: flex;
  font-family: 'Comic Neue', cursive;
  justify-content: center;
  padding: 0px;
  margin: 0px;
`;
