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
        bold
        paddingHorizontal={0.5}
        paddingVertical={0.5}
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
    flexWrap="wrap"
    flexDirection="row"
    paddingHorizontal={0.5}
    borderWidth={1}
    borderStyle="solid"
  >
    <HeaderLink exact to="/" message={linksMessages.home} />
    {false && !viewer && 'bottom'}
  </Box>
);

export default compose(
  connect((state: State) => ({ viewer: state.users.viewer })),
)(Header);

// <HeaderLink to="/users" message={linksMessages.users} />
// <HeaderLink to="/todos" message={linksMessages.todos} />
// <HeaderLink to="/fields" message={linksMessages.fields} />
// <HeaderLink to="/intl" message={linksMessages.intl} />
// <HeaderLink to="/offline" message={linksMessages.offline} />
// <HeaderLink to="/me" message={linksMessages.me} />
// {!viewer && <HeaderLink to="/signin" message={linksMessages.signIn} />}
