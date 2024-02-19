import React from 'react';
import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../public/sab-milega-high-resolution-logo-black-transparent.png';

const Header = () => {
  return (
    <Flex
      bg="teal.500"
      p={4}
      color="white"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
      position="fixed"
      width="100%"
      zIndex={10}
      mb={10}
    >
      <Flex alignItems="center">
        <Image src={logo} alt="Sab Milega Logo" height={100} width={100} />
        <Box ml={4}>
          <Heading fontSize="2xl">Sab Milega</Heading>
         <Box
            fontSize="sm"
            mt={1}
            borderColor="white"
            borderWidth={1}
            color="teal.500"
            p={1}
            fontWeight={'bold'}
            bg='white'
            borderRadius="md"
          >
            Kya chahiye apko?
          </Box>
        </Box>
      </Flex>

      <Box>
        <Button colorScheme="teal" variant="outline" mr={4}>
          Sign In
        </Button>
        <Button colorScheme="teal">Sign Up</Button>
      </Box>
    </Flex>
  );
};

export default Header;
