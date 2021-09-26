import React from 'react';

import { Box } from '@chakra-ui/react';

import SectionB1 from './B1';
import SectionB2 from './B2';

const SectionB = () => {
  return (
    <Box px={['16px', '48px']}>
      <Box bg="white" position="relative" bottom="32px" px="32px" py="32px">
        <SectionB1 />
      </Box>

      <Box mt="32px" pb="80px">
        <SectionB2 />
      </Box>
    </Box>
  );
};

export default SectionB;
