import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ConceptCardItem } from "../types/CardType";
import OriginalButton from "../ui/OriginalButton";
import { IoMdAdd } from "react-icons/io";

type ConceptCardProps = {
  cardItems: ConceptCardItem[];
};

const ConceptCard = ({ cardItems }: ConceptCardProps) => {
  return (
    <>
      {cardItems.map((item) => (
        <Flex
          key={item.title}
          direction={{ base: "column-reverse", md: item.flexDirection }}
          justifyContent="center"
          px={{ base: "50px", md: "30px" }}
          py={{ base: "50px", md: "80px" }}
          mx={{ base: "20px", md: "30px" }}
          my="50px"
          gap="70px"
          backgroundColor={item.backGroundColor}
          borderRadius="15px"
        >
          <Image src={item.img} w="400px" h="400px" alt="" />
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
              size="xl"
              color="#545855"
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
            {item.isButton && (
              <Box>
                <OriginalButton
                  path="/concept"
                  icon={<IoMdAdd />}
                  text="More"
                />
              </Box>
            )}
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default ConceptCard;
