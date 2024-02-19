import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';

import image1 from '../../public/image1.jpeg';
import image2 from '../../public/image2.jpeg';
import image3 from '../../public/image3.jpeg';
import image4 from '../../public/image4.webp';
import Header from '../Components/Header';

const Page = () => {
  const categories = [
    {
      title: 'Consumer Goods',
      description: 'Explore a variety of everyday products for personal use.',
      image: image1,
    },
    {
      title: 'Industrial Products',
      description: 'Discover essential goods and equipment for various industries.',
      image: image2,
    },
    {
      title: 'Technology',
      description: 'Experience the latest in electronic devices and technological innovations.',
      image: image3,
    },
    {
      title: 'Lifestyle',
      description: 'Find products related to leisure, entertainment, and personal interests.',
      image: image4,
    },
  ];

  return (
    <Box minH='100vh'>
      <Header />  
      <Flex direction="column" align="center" pt={4} bg="gray.100">
        <Flex direction="column" align="center" p="8" pt="20">
          <Heading mb="8" color="teal.500">
            Explore Categories
          </Heading>
          <Flex flexWrap="wrap" justifyContent="space-between" maxW="800px">
            {categories.map((category, index) => (
              <Box key={index} width={{ base: '100%', md: '48%' }} mb="4" ml={index%2 != 0 ? '2%' : 0} borderRadius="lg" mt={3} overflow="hidden" boxShadow="lg">
                <Box position="relative" height="300px">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    borderRadius="lg"
                  />
                </Box>
                <Box p="4" bg="white">
                  <Heading fontSize="xl" mb="2" color="teal.500">
                    {category.title}
                  </Heading>
                  <Text color="gray.600" mb="4">
                    {category.description}
                  </Text>
                  <Button colorScheme="teal" variant="outline" w="100%">
                    Explore {category.title}
                  </Button>
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Page;
