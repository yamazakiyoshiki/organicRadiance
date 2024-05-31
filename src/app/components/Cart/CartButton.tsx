"use client";

import { useCartState } from "@/app/context/ProductsCartContext";
import { Button, Box, Link } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";

const CartButton = () => {
  const state = useCartState();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link href="/cart">
      <Button
        color="#123d19"
        backgroundColor="#ebebeb"
        display="flex"
        gap="10px"
        alignItems="center"
        position="relative"
        _hover={{
          bg: "#a1a1a1",
          transition: "0.3s",
        }}
      >
        <FaShoppingCart />
        {isClient && state.amount > 0 && (
          <Box
            position="absolute"
            top="0"
            right="0"
            transform="translate(50%, -50%)"
            backgroundColor="red"
            borderRadius="full"
            width="20px"
            height="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize="12px"
          >
            {state.amount}
          </Box>
        )}
      </Button>
    </Link>
  );
};

export default CartButton;
