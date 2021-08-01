import { extendTheme } from '@chakra-ui/react';

import components from './components';

const theme = {
  colors: {
    primary: 'rebeccapurple',
  },
  components,
};

export default extendTheme(theme);
