"use client";

import OriginalButton from "@/app/ui/OriginalButton";
import { Button, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { ReactElement } from "react";

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
            // <Button
            //   key={link.content}
            //   color="#123d19"
            //   backgroundColor="#ebebeb"
            //   _hover={{ bg: "#a1a1a1", transition: "0.3s" }}
            // >
            //   <Link
            //     href={link.path}
            //     display="flex"
            //     gap="10px"
            //     alignItems="center"
            //     _hover={{ textDecoration: "none" }}
            //   >
            //     {link.icon}
            //     {link.content}
            //   </Link>
            // </Button>
          );
        })}
      </Flex>
    </>
  );
};

export default NavList;
