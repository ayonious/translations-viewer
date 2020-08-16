import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const TabWrapper = styled.div`
  margin: 10px;
  cursor: pointer;
  color: ${(p: { isSelected: boolean }) => (p.isSelected ? 'white' : 'grey')};
`;
