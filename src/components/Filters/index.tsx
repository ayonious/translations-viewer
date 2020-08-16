import React from 'react';

import { filterNameType } from '../Dashboard';
import DropDown from '../DropDown';

export interface Filter {
  values: string[];
  name: string;
  param: filterNameType;
  selectedThing: string;
  changeThing: any;
  type: 'dropdown' | 'checkbox';
}

const Filters = ({ filters }: { filters: Filter[] }) => {
  return (
    <>
      {filters.map((filter: Filter, index) => {
        if (filter.type === 'dropdown') {
          return <DropDown filterName={filter} />;
        }
      })}
    </>
  );
};

export default Filters;
