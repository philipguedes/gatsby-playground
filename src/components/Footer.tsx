import React from 'react';

import { Box, Flex, Text, VStack, Image, Icon, HStack } from '@chakra-ui/react';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';

import Logo from 'images/logo_white.png';

const Footer = () => {
  const renderItem = (kind: 'whatsapp' | 'mail') => {
    if (kind === 'whatsapp') {
      return (
        <HStack flexDir="row" justify="center">
          <Icon boxSize="24px" as={FaWhatsapp} />
          <Text>{'(+55)(11) 99999-9999'}</Text>
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
    <Box bg="azul_gdsl" mt="80px">
      <VStack
        py="40px"
        px="48px"
        spacing="40px"
        alignItems="flex-start"
        textColor="white"
      >
        <Image src={Logo} />

        <Flex w="100%" flexDir="row">
          <VStack flex="1" alignItems="flex-start">
            <Text fontWeight="700">Endereço:</Text>
            <Text>Avenida Marechal Rondon 1155</Text>
            <Text>Rio de Janeiro - RJ</Text>
          </VStack>

          <VStack alignItems="flex-start">
            <Text fontWeight="700">Contato:</Text>
            {renderItem('whatsapp')}
            {renderItem('mail')}
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;
