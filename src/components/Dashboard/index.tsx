import _ from 'lodash';
import React from 'react';

import PostCard from '../../externalcomponents/PostCard';
import database, { Photo, Translation } from '../../resources/Database';
import { createDropDown } from '../FilterFunctionCreater';
import Filters, { Filter } from '../Filters';
import Greeting from '../Greeting';
import Header from '../Header';
import Footer from '../Footer';
import ResultList from '../ResultList';
import {
  ColumnWrapper,
  FixedRowWrapper,
  CenterPageContentWrapper,
  WholePageWrapper,
} from './styles';

export type filterNameType = 'slug' | 'type' | 'country' | 'featured';

export type dataType = 'photo' | 'translation';

export interface ProcessedData {
  type: dataType;
  slug: string;
  country: string;
  featured: boolean;
  mainImage: Photo;
  rawData: Translation | Photo;
}

const processedData = (): ProcessedData[] => {
  let ret: ProcessedData[] = [];
  database.forEach((cityData) => {
    cityData.translations.forEach((translation: Translation) => {
      ret.push({
        rawData: translation,
        type: 'translation',
        slug: cityData.slug,
        country: cityData.country,
        featured: cityData.featured,
        mainImage: cityData.image,
      });
    });

    cityData.photosCollection.items.forEach((image: Photo) => {
      ret.push({
        rawData: image,
        type: 'photo',
        slug: cityData.slug,
        country: cityData.country,
        featured: cityData.featured,
        mainImage: cityData.image,
      });
    });
  });
  return ret;
};

const makeWithoutAll = (param: filterNameType): string[] =>
  _.uniq(processedData().map((single: ProcessedData) => single[param]));

const makeArray = (param: filterNameType): string[] =>
  ['all'].concat(makeWithoutAll(param));

const filterFn = (
  segment: ProcessedData,
  param: filterNameType,
  acceptedValue: string
) => {
  return acceptedValue === 'all' || acceptedValue === segment[param];
};

const Dashboard = () => {
  const [contentTypeFilterObject] = createDropDown(
    'Content Type',
    'type',
    makeWithoutAll('type')
  );

  const [blogFilterObject] = createDropDown(
    'Blog Post',
    'slug',
    makeArray('slug')
  );

  const [countryFilterObject] = createDropDown(
    'Country',
    'country',
    makeArray('country')
  );

  const filtersOnLeft: Filter[] = [blogFilterObject, countryFilterObject];
  const filtersOnNavbar: Filter[] = [contentTypeFilterObject];
  const allFilters: Filter[] = [...filtersOnLeft, ...filtersOnNavbar];

  const filteredRes: ProcessedData[] = processedData().filter(
    (segment: ProcessedData) => {
      let ret = true;
      allFilters.forEach((filter) => {
        ret = ret && filterFn(segment, filter.param, filter.selectedThing);
      });
      return ret;
    }
  );

  return (
    <WholePageWrapper>
      <FixedRowWrapper>
        <Greeting />
        <Filters filters={filtersOnLeft} />
      </FixedRowWrapper>
      <CenterPageContentWrapper>
        <Header filters={filtersOnNavbar} />
        <ColumnWrapper>
          <ResultList PostCard={PostCard} results={filteredRes} />
        </ColumnWrapper>
        <Footer />
      </CenterPageContentWrapper>
    </WholePageWrapper>
  );
};

export default Dashboard;
