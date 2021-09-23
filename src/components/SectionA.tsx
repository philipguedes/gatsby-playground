import React from 'react';

import { Button, Text, Box, Flex, VStack } from '@chakra-ui/react';

import hands from 'images/hands.png';

const SectionA = () => {
  return (
    <Box
      h={['320px', '400px', '496px']}
      bgImage={hands}
      bgSize="cover"
      bgPos="center"
    >
      <Flex
        h="100%"
        bg="linear-gradient(255.96deg, rgba(0, 0, 0, 0.3) 0%, #171623 100%);"
      >
        <VStack
          align="start"
          justifyContent="center"
          pl={['32px', '48px', '64px', '80px']}
          maxW="480px"
          spacing="32px"
        >
          <Text color="white" fontSize="18px" fontWeight="600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            congue nulla, et maximus ex. Fusce fermentum laoreet eros eu
            scelerisque. Mauris at molestie orci. Integer eleifend libero leo,
            placerat tempor dui ultrices eu.
          </Text>

          <Button bg="amarelo" textColor="azul" _hover={{ bg: 'amarelo' }}>
            Fale conosco
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default SectionA;
