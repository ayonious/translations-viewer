import React, { useState } from 'react';
import { Filter } from '../Filters';
import { filterNameType } from '../Dashboard';

export const createDropDown = (
  name: string,
  param: filterNameType,
  values: string[]
): [any] => {
  const [selectedItem, changeSelectedItem] = useState(
    (values.length && values[0]) || 'all'
  );
  const onSelectItem = (event: any) => {
    changeSelectedItem(event.target.value);
  };
  const filterObj: Filter = {
    values, // to be used as dfropdown results
    name, // to be used in UI
    param, // key by which to filter from main database object
    selectedThing: selectedItem,
    changeThing: onSelectItem,
    type: 'dropdown',
  };
  return [filterObj];
};

/*
export const createCheckList = (name: string, values: string[]): [any] => {
  const [selectedItem, changeSelectedItem] = useState([...values]);
  const onSelectItem = (event: any) => {
    if (selectedItem.includes(event)) {
      changeSelectedItem(selectedItem.filter((single) => single !== event));
    } else {
      changeSelectedItem(selectedItem.concat(event));
    }
    changeSelectedItem(event.target.value);
  };
  const filterObj: Filter = {
    values,
    name,
    nameSmall: name.toLowerCase(),
    selectedThing: selectedItem,
    changeThing: onSelectItem,
    type: 'dropdown',
  };
  return [filterObj];
};
*/
