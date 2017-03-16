// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Image } from '../../common/components';
import { Link } from '../../browser/components';
import { Icons } from '../../browser/themes';

type TypeGlyphLink = {
  to: string,
  message: Object,
  children?: any,
};

export const GlyphLink = (
  {
    to = '/',
    message = {},
    children = null,
  }: TypeGlyphLink,
) => (
  <FormattedMessage {...message}>
    {message => (
      <Link
        bold
        paddingHorizontal={0.5}
        paddingVertical={0.5}
        to={to}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, { message }))}
      </Link>
    )}
  </FormattedMessage>
);

const getSrcIcon = icon => Icons[icon];

type TypeGlyph = {
  icon: string,
  message?: string,
};

export const Glyph = ({ icon = '', message = '' }: TypeGlyph) => (
  <Image
    src={getSrcIcon(icon)}
    alt={message}
    title={message}
    size={{ width: 15, height: 15 }}
    marginVertical={0}
  />
);
