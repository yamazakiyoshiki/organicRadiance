"use client";

import { Button, Link } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartDispatch } from "../context/ProductsCartContext";

type CartItem = {
  title: string;
  value: number;
};

type AddCartProps = {
  cartItem: CartItem;
};

const AddCartButton = ({ cartItem }: AddCartProps) => {
  const dispatch = useCartDispatch();

  const addCart = (item: CartItem) => {
    const randomId = Math.floor(Math.random() * 1000000);
    dispatch({
      type: "ADD_ITEM",
      item: {
        id: randomId,
        title: item.title,
        value: item.value,
      },
      amount: 1,
    });
  };

  return (
    <Link
      href="/product"
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
    >
      <Button
        color="#123d19"
        backgroundColor="#ebebeb"
        display="flex"
        gap="10px"
        mx="auto"
        alignItems="center"
        _hover={{
          bg: "#a1a1a1",
          transition: "0.3s",
        }}
        onClick={() => addCart(cartItem)}
      >
        <FaShoppingCart />
        Cart
      </Button>
    </Link>
  );
};

export default AddCartButton;
