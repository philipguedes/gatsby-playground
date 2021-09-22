import { extendTheme } from '@chakra-ui/react';

import components from './components';

const theme = {
  colors: {
    amarelo: '#D69E2E',
    azul: '#29235C',
  },
  components,
};

export default extendTheme(theme);
