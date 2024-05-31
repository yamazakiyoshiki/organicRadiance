"use client";

import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import {
  useCartDispatch,
  useCartState,
} from "@/app/context/ProductsCartContext";

const Page = () => {
  const { items, total, amount } = useCartState();
  const dispatch = useCartDispatch();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", id, amount: 1 });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  if (!isClient) {
    return null;
  }

  return (
    <Box my="80px" mx="auto" maxWidth="800px" p="4">
      <Heading
        as="h1"
        textAlign="center"
        color="#123d19"
        fontWeight="medium"
        fontFamily="'Times New Roman', serif"
        size="2xl"
      >
        Your Cart
      </Heading>
      {items.length === 0 ? (
        <Text fontSize="xl" align="center" my="100px" color="red">
          カートの中身は空です。
        </Text>
      ) : (
        <>
          {items.map((item) => (
            <Flex
              key={item.id}
              justify="space-between"
              mb="4px"
              mt="20px"
              p="2"
              borderWidth="1px"
              borderRadius="lg"
              alignItems="center" // ここを追加
              borderColor="#18151533"
            >
              <Text>{item.title}</Text>
              <Flex alignItems="center">
                <Text>{item.value}円</Text>
                <Button
                  ml="4"
                  colorScheme="red"
                  onClick={() => removeItem(item.id)}
                >
                  削除
                </Button>
              </Flex>
            </Flex>
          ))}
          <Flex justify="center" mt="20px" gap="50px">
            <Text fontSize="lg" fontWeight="bold" textAlign="center">
              合計点数: {amount}点
            </Text>
            <Text fontSize="lg" fontWeight="bold" textAlign="center">
              合計金額: {total}円
            </Text>
          </Flex>
          <Flex justifyContent="center" mt="30px">
            <Button colorScheme="red" onClick={clearCart}>
              カートを空にする
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default Page;
