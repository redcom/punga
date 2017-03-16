// @flow
import React from 'react';
import { Box, PageHeader } from '../../common/components';
import { Title } from '../components';

const HomePage = () => (
  <Box>
    <Title message="Punga" />
    <PageHeader
      heading="Punga"
      description="For a new beginning"
      size={{
        height: 50,
        width: 50,
      }}
    />
  </Box>
);
export default HomePage;
