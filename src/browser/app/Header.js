// @flow
import type { State, User } from '../../common/types';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box } from '../../common/components';
import { FormattedMessage } from 'react-intl';
import { Link } from '../components';
import { compose } from 'ramda';
import { connect } from 'react-redux';

const HeaderLink = ({ to, message, ...props }) => (
  <FormattedMessage {...message}>
    {message => (
      <Link
        regular
        paddingHorizontal={0.5}
        paddingVertical={0.1}
        to={to}
        {...props}
      >
        {message}
      </Link>
    )}
  </FormattedMessage>
);

type HeaderProps = {
  viewer: ?User,
};

const Header = ({ viewer }: HeaderProps) => (
  <Box
    alignSelf="flex-end"
    flexWrap="wrap"
    flexDirection="row"
    paddingHorizontal={0.1}
  >
    {!viewer && <HeaderLink to="/signin" message={linksMessages.signIn} />}
  </Box>
);

export default compose(
  connect((state: State) => ({ viewer: state.users.viewer })),
)(Header);

