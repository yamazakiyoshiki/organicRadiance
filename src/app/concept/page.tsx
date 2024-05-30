import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ConceptCard from "./ConceptCard";
import { ConceptCardItem } from "../types/CardType";

const cardItems: ConceptCardItem[] = [
  {
    title: "Radiance of Nature",
    desc: "OrganicRadianceは、自然の純粋なエッセンスを活かしたオーガニックビューティ製品を提供します。\n私たちの製品は、厳選された天然成分を使用し、環境に配慮した持続可能な方法で作られています。\n自然の恵みを最大限に活かし、美しさと健康を内側から引き出すことを目指します。",
    img: "/concept3.webp",
    flexDirection: "row",
    backGroundColor: "#3c534444",
  },
  {
    title: "Harmony of Science and Nature",
    desc: "OrganicRadianceは、最新の科学技術と自然の恵みを融合させた革新的なオーガニックビューティ製品を提供します。\n私たちの製品は、効果と安全性を追求し、自然由来の成分と先進的なフォーミュレーション技術を組み合わせています。これにより、最高の美しさと健康を引き出します。",
    img: "/concept4.webp",
    flexDirection: "row-reverse",
    backGroundColor: "#4444",
    isButton: false,
  },
];

const page = () => {
  return (
    <>
      <Box mt="80px">
        <Image
          src="/concept3.jpg"
          alt=""
          width="100%"
          height="650px"
          mx="auto"
          objectFit="cover"
        />
        <Box mt="100px">
          <Heading
            as="h1"
            textAlign="center"
            color="#123d19"
            fontWeight="medium"
            fontFamily="'Times New Roman', serif"
            size="2xl"
          >
            CONCEPT
          </Heading>
          <ConceptCard cardItems={cardItems} />
        </Box>
      </Box>
    </>
  );
};

export default page;
