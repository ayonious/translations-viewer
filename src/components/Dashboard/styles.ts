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
  @media only screen and (min-width: 800px) {
    width: 800px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const WholePageWrapper = styled.div`
  display: flex;
  font-family: 'Comic Neue', cursive;
  justify-content: center;
  background-color: rgb(227, 230, 230);
  padding: 0px;
  margin: 0px;
`;
