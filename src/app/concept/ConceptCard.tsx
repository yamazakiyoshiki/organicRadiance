import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { ConceptCardItem } from "../types/CardType";
import OriginalButton from "../ui/OriginalButton";
import { IoMdAdd } from "react-icons/io";
import AnimatedImage from "../ui/AnimatedImage";

type ConceptCardProps = {
  cardItems: ConceptCardItem[];
};

const ConceptCard = ({ cardItems }: ConceptCardProps) => {
  return (
    <Box mx="auto" maxWidth="1200px">
      {cardItems.map((item) => (
        <Flex
          key={item.title}
          direction={{ base: "column", md: item.flexDirection }}
          justifyContent="center"
          alignItems="center"
          px={{ base: "50px", md: "100px" }}
          py={{ base: "50px", md: "80px" }}
          mx={{ base: "30px", md: "80px" }}
          my="50px"
          gap="70px"
          backgroundColor={item.backGroundColor}
          borderRadius="15px"
        >
          {/* <Image
            src={item.img}
            mx="auto"
            w={{ base: "250px", md: "300px" }}
            h={{ base: "250px", md: "300px" }}
            alt=""
          /> */}
          <AnimatedImage key={item.title} itemImg={item.img} />
          <Flex
            direction={"column"}
            textAlign="center"
            maxWidth={{ base: "100%", md: "40%" }}
          >
            <Heading
              as="h2"
              whiteSpace="normal"
              fontWeight="medium"
              fontFamily="'Times New Roman', serif"
              color="#545855"
              size="xl"
            >
              {item.title}
            </Heading>
            <Text
              mt="50px"
              whiteSpace="pre-line"
              textAlign="left"
              letterSpacing="0.1em"
              lineHeight="1.8"
            >
              {item.desc}
            </Text>
            <Box mt="50px">
              {item.isButton && (
                <OriginalButton
                  path="/concept"
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

export default ConceptCard;
