"use client"
import React, { useEffect, useState } from 'react';
import { Flex, Heading, Box, Avatar, Wrap, WrapItem} from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../public/sab-milega-high-resolution-logo-black-transparent.png';
import { useRouter } from 'next/navigation'; // Correct import

const Header = () => {
    const router = useRouter();
    const [logoPic, setLogo] = useState('');

    useEffect(()=> {
        setItems();
    }, []);
    useEffect(()=> console.log("IMAGE", logoPic), [logoPic])

    const setItems = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("USER", user.companyLogo)
        setLogo(user.companyLogo);
    };

    return (
        <Flex
            bg="teal.500"
            p={4}
            color="white"
            justifyContent="space-between"
            alignItems="center"
            boxShadow="md"
            position="sticky"
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
            <Wrap>
                <WrapItem>
                    <Avatar name='Logo' src={`data:image/png;base64,${logoPic}`}/>
                </WrapItem>
            </Wrap>
        </Flex>
    );
};

export default Header;
