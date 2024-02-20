"use client"
import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText, Flex, Image, Spacer } from '@chakra-ui/react';
import Header from '../../Components/Header';
import axios from 'axios'
import { useRouter } from 'next/navigation';

const SellerRegisterPage = () => {
    const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    shopName: '',
    shopAddress: '',
    gstNumber: '',
    phoneNumber: '',
    profilePicture: null,
    companyLogo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
  
    try {
      const resp = await axios.post('/api/seller/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      router.push("/login")
      console.log(resp.data);
      // Handle successful response
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  

  return (
    <Box>
      <Header />
      <Box maxW="xl" mx="auto" mt={8} p={8} borderWidth="1px" borderRadius="md" boxShadow="lg">
        <Heading as="h2" mb={6}>Seller Register</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" value={formData.password} onChange={handleChange} />
          </FormControl>
          <FormControl id="shopName" mb={4}>
            <FormLabel>Shop Name</FormLabel>
            <Input type="text" name="shopName" value={formData.shopName} onChange={handleChange} />
          </FormControl>
          <FormControl id="shopAddress" mb={4}>
            <FormLabel>Shop Address</FormLabel>
            <Input type="text" name="shopAddress" value={formData.shopAddress} onChange={handleChange} />
          </FormControl>
          <Flex direction={{ base: 'column', md: 'row' }} mb={4}>
            <FormControl id="gstNumber" mr={{ md: 4 }} mb={{ base: 4, md: 0 }}>
              <FormLabel>GST Number</FormLabel>
              <Input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} />
            </FormControl>
            <FormControl id="phoneNumber">
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </FormControl>
          </Flex>
          <Flex direction={{ base: 'column', md: 'row' }} mb={4}>
            <FormControl id="profilePicture" mr={{ md: 4 }} mb={{ base: 4, md: 0 }}>
              <FormLabel>Profile Picture</FormLabel>
              <Input type="file" accept="image/*" name="profilePicture" onChange={handleChange} />
              <FormHelperText>Upload your profile picture.</FormHelperText>
            </FormControl>
            <FormControl id="companyLogo">
              <FormLabel>Company Logo</FormLabel>
              <Input type="file" accept="image/*" name="companyLogo" onChange={handleChange} />
              <FormHelperText>Upload your company logo.</FormHelperText>
            </FormControl>
          </Flex>
          <Flex justify="flex-end">
            <Button colorScheme="blue" type="submit" >Register</Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
}

export default SellerRegisterPage;
