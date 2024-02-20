"use client"
import React, { useState } from 'react';
import { Box, Flex, Button, Heading, Text, Input } from '@chakra-ui/react';
import Header from '../../Components/Header';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/seller/login', { email, password });
      const data = response.data;
      
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.seller))
        // Redirect to dashboard after successful login
        router.push('/dashboard');
      } else {
        // Handle error, show message to user
        alert(data.error);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle error, show generic error message to user
      alert('An error occurred while processing your request. Please try again later.');
    }
  };

  return (
    <Box>
      <Header />
      <Flex align="center" justify="center" height="80vh">
        <Flex direction="column" align="center">
          <Heading mb={6}>Login</Heading>
          <Box p={6} shadow="md" borderWidth="1px" width="300px">
            <Input 
              placeholder="Email" 
              mb={4} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Input 
              placeholder="Password" 
              type="password" 
              mb={6} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <Button colorScheme="blue" onClick={handleLogin} width="100%">
              Login
            </Button>
          </Box>
          <Text mt={4}>Don't have an account? <Button variant="link" onClick={() => router.push('/signup')}>Sign up</Button></Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoginPage;
