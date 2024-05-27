import { Box, Heading } from "@chakra-ui/react";
import MainVisual from "./components/MainVisual/MainVisual";
import ConceptCard from "./concept/ConceptCard";
import { ConceptCardItem, ProductCardItem } from "./types/CardType";
import ProductCard from "./product/ProductCard";

const conceptCardItems: ConceptCardItem[] = [
  {
    title: "Radiance of Nature",
    desc: "OrganicRadianceは、自然の純粋なエッセンスを活かしたオーガニックビューティ製品を提供します。\n私たちの製品は、厳選された天然成分を使用し、環境に配慮した持続可能な方法で作られています。\n自然の恵みを最大限に活かし、美しさと健康を内側から引き出すことを目指します。",
    img: "/concept3.webp",
    flexDirection: "row",
    backGroundColor: "#3c534444",
    isButton: true,
  },
];

const productCardItems: ProductCardItem[] = [
  {
    title: "Organic Products",
    desc: "私たちのOrganic Radiance製品ラインは、自然の恵みを最大限に活かしたオーガニックビューティケアを提供します。厳選された天然成分を使用をしたさまざまな商品をどうぞお楽しみください。",
    flexDirection: "row-reverse",
    img: "/product5.webp",
    backGroundColor: "#533c3c44",
    buttonType: "more",
  },
];

export default function Home() {
  return (
    <>
      <MainVisual />
      <Box as="section" mt="100px">
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
        <ConceptCard cardItems={conceptCardItems} />
      </Box>
      <Box as="section" mt="100px">
        <Heading
          as="h1"
          textAlign="center"
          color="#123d19"
          fontWeight="medium"
          fontFamily="'Times New Roman', serif"
          size="2xl"
        >
          PRODUCT
        </Heading>
        <ProductCard cardItems={productCardItems} />
      </Box>
    </>
  );
}
