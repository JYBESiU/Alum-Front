import { NextArrowIcon } from "@/svg";
import {
  cardShadow,
  cardStroke,
  fontGray,
  primaryColor,
} from "@/utils/colors";
import { Box, Flex, Text } from "@chakra-ui/react";

export interface NewChatButtonProps {}

function NewChatButton({}: NewChatButtonProps) {
  return (
    <Box
      w={"100%"}
      h={"120px"}
      px={"28px"}
      py={"24px"}
      bg={"white"}
      mb={"24px"}
      border={"1px solid"}
      borderColor={cardStroke}
      boxShadow={cardShadow}
      borderRadius={"20px"}
    >
      <Flex align={"center"} gap={"8px"} mb={"8px"}>
        <Text
          fontWeight={600}
          fontSize={"18px"}
          lineHeight={"18px"}
          color={primaryColor}
        >
          나만의 대화 시작하기
        </Text>
        <NextArrowIcon />
      </Flex>
      <Text
        fontWeight={500}
        fontSize={"14px"}
        lineHeight={"20px"}
        mb={"28px"}
        color={fontGray}
      >
        나만의 대화 주제를 만들어 연습할 수 있어요.
        <br />
        나의 역할과 상황을 설정해 봐요.
      </Text>
    </Box>
  );
}

export default NewChatButton;
