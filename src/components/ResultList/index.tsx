import React from 'react';

import { CardsWrapper } from './styles';
import { Data, Translation } from '../../resources/Database';
import { ProcessedData } from '../Dashboard';

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
