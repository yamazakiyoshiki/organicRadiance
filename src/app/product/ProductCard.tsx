import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ProductCardItem } from "../types/CardType";
import OriginalButton from "../ui/OriginalButton";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

type ProductCardProps = {
  cardItems: ProductCardItem[];
};

const ProductCard = ({ cardItems }: ProductCardProps) => {
  return (
    <>
      {cardItems.map((item) => (
        <Flex
          key={item.title}
          direction={{ base: "column", md: item.flexDirection }}
          justifyContent="center"
          px={{ base: "50px", md: "30px" }}
          py={{ base: "50px", md: "80px" }}
          mx={{ base: "20px", md: "30px" }}
          mb="50px"
          mt="100px"
          gap="70px"
          backgroundColor={item.backGroundColor}
          borderRadius="15px"
        >
          <Image src={item.img} w="400px" h="400px" alt="" />
          <Flex
            direction={"column"}
            textAlign="center"
            maxWidth={{ base: "100%", md: "40%" }}
            gap="40px"
          >
            <Heading
              as="h2"
              whiteSpace="normal"
              fontWeight="medium"
              fontFamily="'Times New Roman', serif"
              size="xl"
              color="#545855"
            >
              {item.title}
            </Heading>
            <Text
              mt="30px"
              whiteSpace="pre-line"
              textAlign="left"
              letterSpacing="0.1em"
              lineHeight="1.8"
            >
              {item.desc}
            </Text>
            <Box>
              {item.buttonType === "cart" ? (
                <OriginalButton
                  path="/"
                  icon={<FaShoppingCart />}
                  text="Cart"
                />
              ) : (
                <OriginalButton path="/" icon={<IoMdAdd />} text="More" />
              )}
            </Box>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default ProductCard;
