import { Box, Flex, Text, Link, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#ecebeb"
      color="#123d19"
      py={2}
      sx={{
        position: "fixed",
        bottom: "0",
        width: "100vw",
      }}
    >
      <Link href="/">
        <Image
          src="logo.png"
          alt=""
          sx={{
            width: "90px",
            display: "block",
            mx: "auto",
          }}
        />
      </Link>
      <Flex
        maxW="1200px"
        mx="auto"
        gap="20px"
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex alignItems="center">
          <Flex>
            <IconButton
              as="a"
              href="https://facebook.com"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="24px" />}
              variant="ghost"
              color="#123d19"
              mx={1}
              _hover={{
                bg: "#a1a1a1",
              }}
            />
            <IconButton
              as="a"
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="24px" />}
              variant="ghost"
              color="#123d19"
              mx={1}
              _hover={{
                bg: "#a1a1a1",
              }}
            />
            <IconButton
              as="a"
              href="https://instagram.com"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="24px" />}
              variant="ghost"
              color="#123d19"
              mx={1}
              _hover={{
                bg: "#a1a1a1",
              }}
            />
          </Flex>
        </Flex>
        <Text>
          &copy; {new Date().getFullYear()} OrganicRadiance. All rights
          reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
