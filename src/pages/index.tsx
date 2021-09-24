import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';

import Menu from 'components/Menu';
import SectionA from 'components/SectionA';
import SectionB from 'components/SectionB';
import SectionC from 'components/SectionC';

const IndexPage = () => {
  return (
    <Box w="100vw" pt="96px">
      <Menu />

      <SectionA />
      <SectionB />
      <SectionC />
    </Box>
  );
};

export default IndexPage;
