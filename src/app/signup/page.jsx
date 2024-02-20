"use client"
import React from 'react'
import { Box, Flex, Button, Heading, Text } from '@chakra-ui/react';
import Header from '../../Components/Header';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
    return (
    <Box>
    <Header/>
    <Flex align="center" justify="center" height="80vh">
      <Flex direction="column" align="center">
        <Heading mb={6}>Choose Registration Type</Heading>
        <Flex>
          <Box m={4} p={6} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Seller Register</Heading>
            <Text mt={4}>
              Register as a seller to start selling your products.
            </Text>
            <Button mt={4} colorScheme="blue" onClick={()=> router.push('/seller-register')}>Register as Seller</Button>
          </Box>
          <Box m={4} p={6} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Customer Register</Heading>
            <Text mt={4}>
              Register as a customer to start shopping.
            </Text>
            <Button mt={4} colorScheme="green">Register as Customer</Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
    </Box>
  )
}

export default Page;
