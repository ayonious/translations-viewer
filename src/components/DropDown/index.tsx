import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';

import { Filter } from '../Filters';

interface Props {
  filterName: Filter;
}

const DropDown = ({ filterName }: Props) => {
  return (
    <FormControl className="myFormClass">
      <Select
        value={filterName.selectedThing}
        onChange={filterName.changeThing}
        autoWidth={false}
      >
        {filterName.values.map((eachVal) => (
          <MenuItem key={eachVal} value={eachVal}>
            {eachVal}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{filterName.name}</FormHelperText>
    </FormControl>
  );
};

export default DropDown;
