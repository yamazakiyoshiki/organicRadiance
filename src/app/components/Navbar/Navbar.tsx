import { Button, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import NavList from "./NavList";
import { IoHomeSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { MdOutlineEmojiObjects } from "react-icons/md";
import ResponsiveNav from "./ResponsiveNav";

const links = [
  {
    path: "#",
    content: "TOP",
    icon: <IoHomeSharp />,
  },
  {
    path: "#",
    content: "CONCEPT",
    icon: <MdOutlineEmojiObjects />,
  },
  {
    path: "#",
    content: "PRODUCT",
    icon: <FaShoppingCart />,
  },
  {
    path: "#",
    content: "CONTACT",
    icon: <IoMdInformationCircle />,
  },
];

const Navbar = () => {
  return (
    <HStack>
      <NavList links={links} />
      <ResponsiveNav links={links} />
    </HStack>
  );
};

export default Navbar;
