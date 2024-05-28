import { HStack } from "@chakra-ui/react";
import React from "react";
import NavList from "./NavList";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { MdOutlineBatteryFull, MdOutlineEmojiObjects } from "react-icons/md";
import ResponsiveNav from "./ResponsiveNav";

const links = [
  {
    path: "/",
    content: "TOP",
    icon: <IoHomeSharp />,
  },
  {
    path: "/concept",
    content: "CONCEPT",
    icon: <MdOutlineEmojiObjects />,
  },
  {
    path: "/product",
    content: "PRODUCT",
    icon: <MdOutlineBatteryFull />,
  },
  {
    path: "/contact",
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
