// @flow
import * as themes from '../themes';
import React from 'react';
import {
  Box,
  Button,
  Heading,
  Image,
  PageHeader,
  Paragraph,
  SwitchTheme,
  Text,
  ToggleBaseline,
} from '../../common/components';
import { Link, Title } from '../components';

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
