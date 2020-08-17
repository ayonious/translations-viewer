import React from 'react';

import { ProcessedData } from '../Dashboard';
import { CardsWrapper } from './styles';

interface RsProps {
  results: ProcessedData[];
  PostCard: any;
}

const ResultList = ({ results, PostCard }: RsProps) => {
  return (
    <CardsWrapper>
      {results.map((res: ProcessedData, index) => (
        <PostCard res={res} index={index} />
      ))}
    </CardsWrapper>
  );
};

export default ResultList;
