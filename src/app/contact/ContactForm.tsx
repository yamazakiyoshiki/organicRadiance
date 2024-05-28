import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import OriginalButton from "../ui/OriginalButton";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
  return (
    <Box p={8} maxWidth="800px" mx="auto" mt="50px">
      <Heading
        as="h1"
        mb={8}
        textAlign="center"
        color="#123d19"
        fontWeight="medium"
        fontFamily="'Times New Roman', serif"
        size="xl"
      >
        Form
      </Heading>
      <VStack spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel
            fontWeight="semibold"
            fontFamily="'Times New Roman', serif"
            color="#545855"
          >
            Name
          </FormLabel>
          <Input
            placeholder="お名前を入力してください"
            bg="#99a5ce4e"
            _focus={{ bg: "#99a5ceb7" }}
            border="none"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel
            fontWeight="semibold"
            fontFamily="'Times New Roman', serif"
            color="#545855"
          >
            Email
          </FormLabel>
          <Input
            type="email"
            placeholder="メールアドレスを入力してください"
            bg="#99a5ce4e"
            _focus={{ bg: "#99a5ceb7" }}
            border="none"
          />
        </FormControl>
        <FormControl id="subject" isRequired>
          <FormLabel
            fontWeight="semibold"
            fontFamily="'Times New Roman', serif"
            color="#545855"
          >
            Title
          </FormLabel>
          <Input
            placeholder="件名を入力してください"
            bg="#99a5ce4e"
            _focus={{ bg: "#99a5ceb7" }}
            border="none"
          />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel
            fontWeight="semibold"
            fontFamily="'Times New Roman', serif"
            color="#545855"
          >
            Message
          </FormLabel>
          <Textarea
            placeholder="メッセージを入力してください"
            rows={6}
            border="none"
            bg="#99a5ce4e"
            _focus={{ bg: "#99a5ceb7" }}
          />
        </FormControl>
        <Box mt="30px">
          <OriginalButton path="/" text="この内容で送信" icon={<IoSend />} />
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactForm;
