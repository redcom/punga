// @flow
import type { State, User } from '../../common/types';
import React from 'react';
import { Box, Image } from '../../common/components';
import { Icons } from '../../browser/themes';
import { Link } from '../components';

const getWebsiteLogo = () => Icons.logo;

const Logo = () => (
  <Box
    alignItems="center"
    alignSelf="center"
    flexWrap="wrap"
    flexDirection="row"
    paddingBottom={0.5}
    marginTop={-0.5}
  >
    <Link to="/">
      <Image
        src={getWebsiteLogo()}
        alt="Go to Pinstery Home"
        size={{ width: 400, height: 140 }}
      />
    </Link>
  </Box>
);

export default Logo;
