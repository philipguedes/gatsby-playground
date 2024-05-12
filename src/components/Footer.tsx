import React from 'react';

import {
  Box,
  Stack,
  Text,
  VStack,
  Image,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';

import Logo from 'images/logo_white.png';

const Footer = () => {
  const renderItem = (kind: 'whatsapp' | 'mail') => {
    if (kind === 'whatsapp') {
      return (
        <HStack flexDir="row" justify="center">
          <Icon boxSize="24px" as={FaWhatsapp} />
          <Text>{'(21) 96893-3095'}</Text>
        </HStack>
      );
    }

    return (
      <HStack flexDir="row" justify="center">
        <Icon boxSize="24px" as={AiOutlineMail} />
        <Text>{'contato@guedeselima.adv.br'}</Text>
      </HStack>
    );
  };

  return (
    <Box bg="azul_gdsl" mt="80px" id="fale-conosco">
      <VStack
        py="40px"
        px="48px"
        spacing="40px"
        alignItems="flex-start"
        textColor="white"
      >
        <Image src={Logo} />

        <Stack
          w="100%"
          flexDir={['column', 'column', 'row']}
          spacing={['32px', '32px', '8px']}
        >
          <VStack flex="1" alignItems="flex-start">
            <Text fontWeight="700">Endereço:</Text>
            <Text>Rua da Assembléia, 10 - Centro</Text>
            <Text>Rio de Janeiro - RJ</Text>
          </VStack>

          <VStack alignItems="flex-start">
            <Text fontWeight="700">Contato:</Text>
            {renderItem('whatsapp')}
            {renderItem('mail')}
          </VStack>
        </Stack>
      </VStack>
    </Box>
  );
};

export default Footer;
