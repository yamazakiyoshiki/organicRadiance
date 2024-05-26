"use client";

import { Button, Flex, IconButton, Link } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement, useState } from "react";
import { MdDensityMedium, MdOutlineClear } from "react-icons/md";

type ResponsiveNavProps = {
  links: {
    content: string;
    icon: ReactElement;
    path: string;
  }[];
};

const MotionFlex = motion(Flex);

const ResponsiveNav = ({ links }: ResponsiveNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton
        aria-label="Toggle navigation"
        icon={isOpen ? <MdOutlineClear /> : <MdDensityMedium />}
        onClick={() => setIsOpen((prev) => !prev)}
        display={{ base: "flex", md: "none" }}
        backgroundColor="#ebebeb"
        color="#123d19"
        sx={{
          position: "fixed",
          right: "20px",
          top: "20px",
          zIndex: "20",
        }}
      />
      <AnimatePresence>
        {isOpen && (
          <MotionFlex
            direction="column"
            gap="100px"
            alignItems="center"
            justifyContent="center"
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            zIndex="10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {links.map((link) => {
              return (
                <Button
                  key={link.content}
                  onClick={() => setIsOpen((prev) => !prev)}
                  color="#123d19"
                  backgroundColor="#ebebeb"
                  _hover={{ bg: "#c5c5c5" }}
                  _active={{ bg: "#a5a5a5" }}
                >
                  <Link
                    href={link.path}
                    display="flex"
                    gap="10px"
                    alignItems="center"
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    {link.icon}
                    {link.content}
                  </Link>
                </Button>
              );
            })}
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveNav;
