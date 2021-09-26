import React from 'react';
import { Box, VStack, Center, Text, HStack } from '@chakra-ui/react';

const TITLE = 'ÁREAS DE ATUAÇÃO';

const ItemKeyArray = ['trabalho', 'penal', 'civil'] as const;
type ItemKey = typeof ItemKeyArray[number];

type Items = {
  [key in ItemKey]: { description: string; title: string };
};

const ITEMS: Items = {
  trabalho: {
    title: 'DIREITO DO TRABALHO',
    description:
      'Especializados em direito e processo do trabalho, o time guedeselima esclarecerá as suas dúvidas sobre os fatos relativos ao seu contrato de trabalho e te ajudará a buscar reparação da violação de seus direitos trabalhistas.',
  },
  civil: {
    title: 'DIREITO CIVIL',
    description:
      'No âmbito do Direito Civil, orientamos os nossos clientes em questões pertinentes  às relações  familiares, esclarecendo quais são os direitos e obrigações provenientes dessas relações, buscando promover a dignidade da pessoa humana e a igualdade substancial de seus membros.',
  },
  penal: {
    title: 'DIREITO PENAL',
    description:
      'Nossa área criminal é baseada em uma visão humanitária, onde não julgamos a situação de nossos clientes, sejam réus ou vítimas. Agimos sempre em defesa de seus direitos, verificando a regularidade da investigação, do processo criminal, e eventual prisão, para que não haja nenhum ilícito ou violação a qualquer garantia constitucional. Com sigilo, respeito, empatia e dedicação total a causa, buscamos atuar da melhor forma em favor de nossos clientes.',
  },
};

const Item = ({ itemKey }: { itemKey: ItemKey }) => {
  const { title, description } = ITEMS[itemKey];

  return (
    <Box p="16px">
      <HStack spacing="16px" alignItems="flex-start">
        <Box pt="4px">
          <Box w="16px" h="16px" transform="rotate(-45deg);" bg="amarelo" />
        </Box>
        <VStack spacing="16px" alignItems="flex-start">
          <Text variant="h2">{title}</Text>
          <Text variant="p">&emsp;&ensp;{description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

const SectionC = () => {
  return (
    <Box bg="white">
      <Center position="relative" bottom="40px" p="16px">
        <Box bg="white" px="64px" py="16px">
          <Text variant="h1">{TITLE}</Text>
        </Box>
      </Center>

      <VStack
        mt="-32px"
        mx={['16px', '32px']}
        spacing="32px"
        alignItems="flex-start"
      >
        <Item itemKey="trabalho" />
        <Item itemKey="penal" />
        <Item itemKey="civil" />
      </VStack>
    </Box>
  );
};

export default SectionC;
