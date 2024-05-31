import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ProductCardItem } from "../types/CardType";
import OriginalButton from "../ui/OriginalButton";
import { IoMdAdd } from "react-icons/io";
import AnimatedImage from "../ui/AnimatedImage";
import AddCartButton from "../ui/AddCartButton";

type ProductCardProps = {
  cardItems: ProductCardItem[];
};

const ProductCard = ({ cardItems }: ProductCardProps) => {
  return (
    <Box mx="auto" maxWidth="1200px">
      {cardItems.map((item) => (
        <Flex
          key={item.title}
          direction={{ base: "column", md: item.flexDirection }}
          justifyContent="center"
          px={{ base: "50px", md: "100px" }}
          py={{ base: "50px", md: "80px" }}
          mx={{ base: "30px", md: "80px" }}
          mb="50px"
          mt="100px"
          gap="70px"
          backgroundColor={item.backGroundColor}
          borderRadius="15px"
        >
          <AnimatedImage key={item.title} itemImg={item.img} />
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
                <AddCartButton
                  cartItem={{ title: item.title, value: item.value }}
                />
              ) : (
                <OriginalButton
                  path="/product"
                  icon={<IoMdAdd />}
                  text="More"
                />
              )}
            </Box>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default ProductCard;
