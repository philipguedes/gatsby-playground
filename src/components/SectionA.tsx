import React from 'react';

import { Button, Text, Box, Flex, VStack } from '@chakra-ui/react';

import hands from 'images/hands.png';
import { WHATSAPP_LINK } from 'utils';

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
          maxW="400px"
          mb={['80px']}
          mt={['64px']}
          spacing="32px"
        >
          <Text color="white" fontSize="18px" fontWeight="600">
            Ética, objetividade e transparência serão os nossos compromissos com
            você.
            <br />
            Aqui o Direito é levado a sério.
          </Text>

          <Button
            bg="amarelo"
            textColor="azul"
            _hover={{ bg: 'amarelo' }}
            as="a"
            href={WHATSAPP_LINK}
            target="_blank"
          >
            Fale conosco
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default SectionA;
