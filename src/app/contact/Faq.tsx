import { Box, Heading, Accordion } from "@chakra-ui/react";
import AccordionList from "./AccordionList";

const FAQ = () => {
  return (
    <Box p={8} maxWidth="800px" mx="auto" mt="40px">
      <Heading
        as="h1"
        mb={8}
        textAlign="center"
        color="#123d19"
        fontWeight="medium"
        fontFamily="'Times New Roman', serif"
        size="xl"
      >
        FAQ
      </Heading>
      <Accordion allowMultiple borderColor="#a1a0a0">
        <AccordionList
          q="お支払い方法について"
          a="当社ではクレジットカード払いのみご利用いただくことができます。"
        />
        <AccordionList
          q="送料について"
          a="国内限定一律750円で承っております。"
        />
        <AccordionList
          q="配送日・発送日の変更"
          a="配送日の変更につきましては配送業者様と直接やりとりをしてください。発送日は購入日から3日以内であればご連絡ください。"
        />
        <AccordionList
          q="返品・交換について"
          a="未使用商品のみ商品到着後から2週間以内であれば承りますのでご連絡してください。"
        />
      </Accordion>
    </Box>
  );
};

export default FAQ;
