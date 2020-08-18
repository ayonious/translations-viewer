import React from 'react';

import { ProcessedData } from '../../components/Dashboard';
import { Language, Photo, Translation } from '../../resources/Database';
import {
  CardWrapper,
  CellWrapper,
  ColumnWrapper,
  TagCellWrapper,
  ImgWrapper,
  PhotoCardWrapper,
  TranslationCellWrapper,
} from './styles';

export interface PostCardProps {
  res: ProcessedData;
  index: number;
}

const TranslationsCard = (props: PostCardProps) => {
  const {
    res: { rawData },
    index,
  } = props;

  const data: Translation = rawData as Translation;

  return (
    <CardWrapper index={index}>
      <ColumnWrapper>
        <TagCellWrapper> {data.tag} </TagCellWrapper>
        <TranslationCellWrapper>
          {Object.keys(data.translations).map((language: string) => (
            <CellWrapper>
              ({language}) {data.translations[language as Language]}
            </CellWrapper>
          ))}
        </TranslationCellWrapper>
      </ColumnWrapper>
    </CardWrapper>
  );
};

const PhotoCard = (props: PostCardProps) => {
  const {
    res: { rawData },
    index,
  } = props;

  const data: Photo = rawData as Photo;

  return (
    <PhotoCardWrapper index={index}>
      <ImgWrapper>
        <img src={data.url}></img>
      </ImgWrapper>
      <div>
        <CellWrapper> {data.title} </CellWrapper>
        <CellWrapper> {data.description} </CellWrapper>
      </div>
    </PhotoCardWrapper>
  );
};

const PostCard = (props: PostCardProps) => {
  const { res, index } = props;

  if (res.type === 'translation') {
    return <TranslationsCard res={res} index={index} />;
  }

  if (res.type === 'photo') {
    return <PhotoCard res={res} index={index} />;
  }
  return <></>;
};

export default PostCard;
