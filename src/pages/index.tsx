import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import Menu from 'components/Menu';
import SectionA from 'components/SectionA';
import SectionB from 'components/SectionB';
import SectionC from 'components/SectionC';
import Footer from 'components/Footer';

const IndexPage = () => {
  return (
    <Box w="100vw" pt="96px">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Guedes & Lima</title>
      </Helmet>
      <Menu />

      <Box bg="cinza">
        <SectionA />
        <SectionB />
        <SectionC />
        <Footer />
      </Box>
    </Box>
  );
};

export default IndexPage;
