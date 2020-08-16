import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FixedRowWrapper = styled.div`
  display: flex;
  position: fixed;
  left: 20px;
  flex-direction: column;
  align-content: center;
  max-width: 200px;
  padding: 30px;
`;

export const CenterPageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

export const WholePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(227, 230, 230);
  border: 2px solid black;
  padding: 0px;
  margin: 0px;
`;
