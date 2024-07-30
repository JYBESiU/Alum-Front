import { fontBlack, fontGray } from "@/utils/colors";
import { Box, Text } from "@chakra-ui/react";

export interface NewChatPageProps {}

function NewChatPage({}: NewChatPageProps) {
  return (
    <Box pt={"40px"} position={"relative"}>
      <Text
        w={"100%"}
        textAlign={"center"}
        fontSize={"18px"}
        fontWeight={600}
        color={fontBlack}
        mb={"24px"}
      >
        나만의 대화 설정
      </Text>
      <Text
        w={"100%"}
        textAlign={"center"}
        fontSize={"14px"}
        fontWeight={200}
        color={fontGray}
        mb={"58px"}
      >
        본인과 AI의 역할을 설정하고
        <br />
        어떤 주제로 대화할지 작성해주세요.
      </Text>
    </Box>
  );
}

export default NewChatPage;
