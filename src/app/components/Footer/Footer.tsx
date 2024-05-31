import { Box, Flex, Text, Link, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#ecebeb"
      color="#123d19"
      py={2}
      sx={{
        width: "100vw",
      }}
    >
      <Flex
        maxW="1200px"
        h={{ base: "200px", md: "60px" }}
        mx="auto"
        gap="20px"
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt=""
            sx={{
              width: "90px",
              display: "block",
              mx: "auto",
            }}
          />
        </Link>
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
