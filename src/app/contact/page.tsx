import ContactForm from "./ContactForm";
import { Box, Heading } from "@chakra-ui/react";
import FAQ from "./Faq";

const page = () => {
  return (
    <Box mb="50px">
      <Heading
        as="h1"
        textAlign="center"
        color="#123d19"
        fontWeight="medium"
        fontFamily="'Times New Roman', serif"
        size="2xl"
        mt="100px"
      >
        CONTACT
      </Heading>
      <ContactForm />
      <FAQ />
    </Box>
  );
};

export default page;
