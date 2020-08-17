import React, { useContext } from 'react';

import {
  IconWrapper,
  LinkCenter,
  NavBar,
  NavCenter,
  NavHeader,
  SpanWrapper,
} from './styles';

const Footer = () => {
  return (
    <NavBar>
      <NavCenter>
        <NavHeader>
          <SpanWrapper>
            This is an opensource project you can find the source code in
          </SpanWrapper>
          <LinkCenter href="https://github.com/ayonious/translations-viewer">
            <SpanWrapper>gitHub</SpanWrapper>
          </LinkCenter>
        </NavHeader>
      </NavCenter>
    </NavBar>
  );
};

export default Footer;
