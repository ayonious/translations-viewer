import React from 'react';

import {
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
            <SpanWrapper>GitHub</SpanWrapper>
          </LinkCenter>
        </NavHeader>
      </NavCenter>
    </NavBar>
  );
};

export default Footer;
