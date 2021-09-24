import '@fontsource/cormorant';
import '@fontsource/metropolis';
import '@fontsource/montserrat';

import { extendTheme } from '@chakra-ui/react';

import components from './components';

const theme = {
  colors: {
    amarelo: '#D69E2E',
    azul: '#29235C',
    cinza: '#F7F7F7',
    azul_gdsl: '#1A365D',
  },
  components,
};

export default extendTheme(theme);
