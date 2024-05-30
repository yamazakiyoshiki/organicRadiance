"use client";

import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useCartState, useCartDispatch } from "../context/ProductsCartContext";

const CartPage = () => {
  const { items, total, amount } = useCartState();
  const dispatch = useCartDispatch();

  const removeItem = (title: string) => {
    dispatch({ type: "REMOVE_ITEM", title, amount: 1 });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <Box mx="auto" maxWidth="800px" p="4">
      <Heading as="h1" mb="6" textAlign="center">
        Your Cart
      </Heading>
      {items.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <>
          {items.map((item, index) => (
            <Flex
              key={index}
              justify="space-between"
              mb="4"
              p="2"
              borderWidth="1px"
              borderRadius="lg"
            >
              <Text>{item.title}</Text>
              <Flex>
                <Text>{item.value}円</Text>
                <Button
                  ml="4"
                  colorScheme="red"
                  onClick={() => removeItem(item.title)}
                >
                  Remove
                </Button>
              </Flex>
            </Flex>
          ))}
          <Flex justify="space-between" mt="6">
            <Text fontSize="lg" fontWeight="bold">
              Total: {total}円
            </Text>
            <Button colorScheme="red" onClick={clearCart}>
              Clear Cart
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default CartPage;
