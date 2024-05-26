import { Button, Link } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IoMdAdd } from "react-icons/io";

type OriginalButtonProps = {
  path: string;
  icon: ReactElement;
  text: string;
};

const OriginalButton = ({ path, icon, text }: OriginalButtonProps) => {
  return (
    <>
      <Button
        color="#123d19"
        backgroundColor="#ebebeb"
        _hover={{
          bg: "#a1a1a1",
          transition: "0.3s",
        }}
      >
        <Link
          href={path}
          display="flex"
          gap="10px"
          alignItems="center"
          _hover={{ textDecoration: "none" }}
        >
          {icon}
          {text}
        </Link>
      </Button>
    </>
  );
};

export default OriginalButton;
