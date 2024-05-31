"use client";

import OriginalButton from "@/app/ui/OriginalButton";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { ReactElement } from "react";
import Cart from "../Cart/Cart";

type NavListProps = {
  links: {
    path: string;
    icon: ReactElement;
    content: string;
  }[];
};

const NavList = ({ links }: NavListProps) => {
  const display = useBreakpointValue({ base: "none", md: "flex" });
  return (
    <>
      <Flex
        as="nav"
        gap="20px"
        sx={{
          zIndex: "10",
          position: "fixed",
          right: "20px",
          top: "20px",
        }}
        display={display}
      >
        {links?.map((link) => {
          return (
            <OriginalButton
              key={link.content}
              path={link.path}
              text={link.content}
              icon={link.icon}
            />
          );
        })}
        <Cart />
      </Flex>
    </>
  );
};

export default NavList;
