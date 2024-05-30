import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { ProductCardItem } from "../types/CardType";
import ProductCard from "./ProductCard";
import CartProvider from "../context/ProductsCartContext";

const productItems: ProductCardItem[] = [
  {
    title: "Organic Toner",
    desc: "ハイドレイティングトナーは、お肌を優しく浄化し、次のスキンケアステップの準備を整えます。\n天然植物エキスを配合し、肌のpHバランスを整え、輝くような肌に必要な水分を提供します。",
    flexDirection: "row",
    img: "/product1.webp",
    backGroundColor: "#3c534444",
    buttonType: "cart",
    value: 4000,
  },
  {
    title: "Organic Serum",
    desc: "リバイタライジングセラムの力を体験してください。\nオーガニック成分のブレンドが肌を若返らせ、修復します。この軽量フォーミュラは深く浸透し、重要な栄養素と抗酸化物質を提供して、肌の自然な輝きを高めます。",
    flexDirection: "row-reverse",
    img: "/product2.webp",
    backGroundColor: "#4444",
    buttonType: "cart",
    value: 6000,
  },
  {
    title: "Organic Lotion",
    desc: "ナリッシングローションは、長時間の保湿と栄養を提供し、肌を柔らかくしなやかにします。オーガニックオイルとエキスが豊富に含まれており、べたつかずに素早く吸収され、毎日の使用に最適です。",
    flexDirection: "row",
    img: "/product3.webp",
    backGroundColor: "#533c3c44",
    buttonType: "cart",
    value: 5000,
  },
  {
    title: "Organic Cream",
    desc: "モイスチャーリッチクリームの贅沢な使用感をお楽しみください。このクリームは、深い保湿と肌の保護を提供します。オーガニック成分のブレンドが肌の自然なバリアを回復させ、滑らかで健康的な肌に必要な水分を閉じ込めます",
    flexDirection: "row-reverse",
    img: "/product4.webp",
    backGroundColor: "#3c4d5344",
    buttonType: "cart",
    value: 4500,
  },
];

const page = () => {
  return (
    <>
      <CartProvider>
        <Box mt="80px">
          <Image src="/main_product.webp" alt="" />
          <Box mt="100px">
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
            <ProductCard cardItems={productItems} />
          </Box>
        </Box>
      </CartProvider>
    </>
  );
};

export default page;
