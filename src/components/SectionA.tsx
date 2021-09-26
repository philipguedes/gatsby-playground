import React from 'react';

import { Button, Text, Box, Flex, VStack } from '@chakra-ui/react';

import hands from 'images/hands.png';

const SectionA = () => {
  return (
    <Box display="flex" bgImage={hands} bgSize="cover" bgPos="center">
      <Flex
        flex="1"
        bg="linear-gradient(255.96deg, rgba(0, 0, 0, 0.3) 0%, #171623 100%);"
      >
        <VStack
          align="start"
          justifyContent="center"
          mx={['32px', '64px', '80px']}
          maxW="480px"
          mb={['80px']}
          mt={['64px']}
          spacing="32px"
        >
          <Text
            // mr={['16px', '0px']}
            color="white"
            fontSize="18px"
            fontWeight="600"
          >
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
