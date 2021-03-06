import React from 'react';
import {
  Box,
  VStack,
  Text,
  Image,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import GIAMMARCO from 'images/giammarco.png';

const TITLE = 'QUEM SOMOS NÓS';

const DESCRIPTION1 = `
Guedes & Lima é uma sociedade de advogados que surgiu de uma união familiar, \
onde cada um dos membros é especializado em uma área do direito. \
E, trabalham em conjunto para oferecer o melhor atendimento possível aos clientes, defendendo seus interesses judicial ou extrajudicialmente.`;

const DESCRIPTION2 = `
Atendemos nossos clientes com empatia, buscando a melhor estratégia na defesa de suas causas. Caminhamos lado a lado durante todo o processo, lhe passando confiança e informações de todo andamento processual. Observamos a legalidade e o devido processo legal, para que não haja desrespeito às normas, princípios ou a violação de algum direito.`;

const FOOTER = 'Amamos o que fazemos e será um prazer te ajudar!';

const SectionB2 = () => {
  const showImage = useBreakpointValue({ sm: false, md: true });

  const renderImage = () => {
    if (!showImage) return null;

    return (
      <Box pl="20px" pt="20px" mr="24px">
        <Box bg="amarelo">
          <Image
            maxW="none"
            position="relative"
            bottom="20px"
            right="20px"
            src={GIAMMARCO}
          />
        </Box>
      </Box>
    );
  };

  return (
    <HStack flexDir="row">
      {renderImage()}
      <VStack spacing="24px">
        <Text variant="h1">{TITLE}</Text>
        <Box px={['16px', '0px']}>
          <Text variant="p" align="justify">
            &emsp;{DESCRIPTION1}
          </Text>
          <br />
          <Text variant="p" align="justify">
            &emsp;{DESCRIPTION2}
          </Text>
        </Box>
        <Text variant="p" fontWeight="bold" color="azul" textAlign="center">
          {FOOTER}
        </Text>
      </VStack>
    </HStack>
  );
};

export default SectionB2;
