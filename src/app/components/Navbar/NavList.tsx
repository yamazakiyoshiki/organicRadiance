"use client";

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
            <Button
              key={link.content}
              color="#123d19"
              backgroundColor="#ebebeb"
            >
              <Link
                href={link.path}
                display="flex"
                gap="10px"
                alignItems="center"
              >
                {link.content}
                {link.icon}
              </Link>
            </Button>
          );
        })}
      </Flex>
    </>
  );
};

export default NavList;
