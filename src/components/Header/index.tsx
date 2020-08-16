import React from 'react';

import {
  CenteredFlexDevWrapper,
  TabsWrapper,
  LeftHeadlineWrapper,
} from './styles';
import { Filter } from '../Filters';
import HeaderTab from './HeaderTab';

const Header = ({ filters }: { filters: Filter[] }) => {
  return (
    <CenteredFlexDevWrapper>
      <LeftHeadlineWrapper> Travel Blog Reviewer </LeftHeadlineWrapper>
      <TabsWrapper>
        {filters.map((filter: Filter) => {
          if (filter.type === 'dropdown') {
            return <HeaderTab filter={filter} />;
          }
        })}
      </TabsWrapper>
    </CenteredFlexDevWrapper>
  );
};

export default Header;
