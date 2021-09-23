import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';

import Menu from 'components/Menu';
import SectionA from 'components/SectionA';
import SectionB from 'components/SectionB';

const SectionC = () => {
  return (
    <Box h={['320px', '400px', '496px']} bg="cinza" px="48px">
      <Box h="300px" bg="red" position="relative" bottom="48px"></Box>

      <Box h="300px" bg="red" mt="32px"></Box>
    </Box>
  );
};

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
