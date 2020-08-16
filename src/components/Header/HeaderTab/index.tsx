import React from 'react';

import { Filter } from '../../Filters';
import { TabsWrapper, TabWrapper } from './styles';

const createEvent = (value: string) => ({
  target: {
    value,
  },
});

const HeaderTab = ({ filter }: { filter: Filter }) => {
  return (
    <TabsWrapper>
      {filter.values.map((value: string) => (
        <TabWrapper
          isSelected={value === filter.selectedThing}
          onClick={() => filter.changeThing(createEvent(value))}
        >
          {value}
        </TabWrapper>
      ))}
    </TabsWrapper>
  );
};

export default HeaderTab;
