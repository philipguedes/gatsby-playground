import React from 'react';
import { Stack, StackDivider, VStack, Text, Image } from '@chakra-ui/react';

import EMPATIA from 'images/empatia.png';
import DEDICACAO from 'images/dedicacao.png';
import RESILIENCIA from 'images/resiliencia.png';

const ItemKeyArray = ['empatia', 'dedicacao', 'resiliencia'] as const;
type ItemKey = typeof ItemKeyArray[number];

type Items = {
  [key in ItemKey]: { img: string; title: string; text: string };
};

const ITEMS: Items = {
  empatia: {
    img: EMPATIA,
    title: 'EMPATIA',
    text: 'Com empatia aos nossos clientes e aos seus problemas, buscamos ajudá-los com uma visão humanitária, os respeitando, sem qualquer julgamento.',
  },
  dedicacao: {
    img: DEDICACAO,
    title: 'DEDICAÇÃO',
    text: 'Nos comprometemos em dar o melhor atendimento possível aos nossos clientes, tratando de seu caso de forma eficiente, nos dedicando inteiramente a causa, dando total atenção aos seus problemas e eventuais dúvidas. Livre informação quanto aos seus direitos, deveres e ao andamento do processo.',
  },
  resiliencia: {
    img: RESILIENCIA,
    title: 'RESILIÊNCIA',
    text: 'Buscamos solucionar seus problemas de forma resiliente, estamos juntos até o final do processo, sempre buscando a melhor forma de garantir seus direitos.',
  },
};

const Item = ({ itemKey }: { itemKey: ItemKey }) => {
  const { img, title, text } = ITEMS[itemKey];

  return (
    <VStack spacing="16px" flex="1">
      <VStack h="80px">
        <Image src={img} />
        <Text variant="h2" borderBottom="2px" borderBottomColor="amarelo">
          {title}
        </Text>
      </VStack>

      <Text variant="p">{text}</Text>
    </VStack>
  );
};

const B1 = () => {
  return (
    <Stack
      direction={['column', 'column', 'row']}
      spacing="32px"
      divider={<StackDivider borderColor="gray.200" />}
    >
      <Item itemKey="empatia" />
      <Item itemKey="dedicacao" />
      <Item itemKey="resiliencia" />
    </Stack>
  );
};

export default B1;
