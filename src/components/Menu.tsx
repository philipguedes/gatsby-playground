import {
  Box,
  HStack,
  Img,
  useRadio,
  useRadioGroup,
  Text,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { FC } from 'react';
import logo from '../images/logo.png';

const Logo = () => (
  <Img htmlHeight="60px" htmlWidth="229px" src={logo} alt="Logo" />
);

const MenuButton: FC<any> = ({ label, ...rest }) => {
  const { getInputProps, getCheckboxProps } = useRadio(rest);

  return (
    <Box as="label">
      <input {...getInputProps()} />
      <Box
        {...getCheckboxProps()}
        cursor="pointer"
        // borderWidth="1px"
        // borderRadius="md"
        // boxShadow="md"
        _checked={{
          borderBottom: '2px solid rgba(196, 196, 196, 0.88)',
          fontWeight: 'bold',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        my="8px"
      >
        <Text fontSize="14px">{label}</Text>
      </Box>
    </Box>
  );
};

const MenuOptions = () => {
  const options = [
    'Quem somos nós',
    'Nossos valores',
    'Áreas de atuação',
    'Fale conosco',
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'menu-options',
    onChange: console.log,
  });

  return (
    <HStack {...getRootProps()} spacing={{ sm: '24px', lg: '32px' }}>
      {options.map((value) => (
        <MenuButton key={value} label={value} {...getRadioProps({ value })} />
      ))}
    </HStack>
  );
};

const Menu = () => {
  const showOptions = useBreakpointValue({ md: true });

  return (
    <Flex
      position="fixed"
      boxShadow="0px 4px 8px -1px rgba(0, 0, 0, 0.25)"
      top="0"
      width="100%"
      align="center"
      justify="space-between"
      h="96px"
      p="4"
      bg="white"
      zIndex="2"
    >
      <Logo />

      {showOptions && <MenuOptions />}
    </Flex>
  );
};

export default Menu;
