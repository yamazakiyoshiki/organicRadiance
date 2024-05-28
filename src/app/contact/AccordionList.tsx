import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

type AccordionListProps = {
  q: string;
  a: string;
};

const AccordionList = ({ q, a }: AccordionListProps) => {
  return (
    <>
      <AccordionItem py="20px">
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {q}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{a}</AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default AccordionList;
