import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const PhotoCardWrapper = styled.div`
  background: ${(p: { index: number }) =>
    p.index % 2 === 0 ? 'rgb(250, 250, 250)' : 'rgb(241, 241, 242)'};
  border: 2px solid grey;
  border-radius: 4px;
  margin: 2px;
  padding: 2.2rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: row;
  :hover {
    box-shadow: 1px 1px;
    transition: all 0.2s ease-in-out;
  }
`;

export const CardWrapper = styled.div`
  background: ${(p: { index: number }) =>
    p.index % 2 === 0 ? 'rgb(250, 250, 250)' : 'rgb(241, 241, 242)'};
  border: 2px solid grey;
  border-radius: 4px;
  margin: 2px;
  padding: 2.2rem;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: 1px 1px;
    transition: all 0.2s ease-in-out;
  }
`;

export const ImgWrapper = styled.div`
  img {
    max-width: 350px;
    max-height: 350px;
  }
`;

export const CellWrapper = styled.p`
  text-align: left;
  font-size: 20px;
  margin: 12px;
  @media only screen and (max-width: 1200px) {
    border-top: 2px solid grey;
  }
`;

export const TagCellWrapper = styled.p`
  text-align: left;
  font-size: 20px;
`;

export const TranslationCellWrapper = styled.p`
  display: flex;
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
  font-size: 20px;
`;
