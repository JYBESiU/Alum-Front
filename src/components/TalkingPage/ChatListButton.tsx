import { DialogIcon } from "@/svg";
import {
  cardShadow,
  cardStroke,
  fontGray,
} from "@/utils/colors";
import { Flex, Text } from "@chakra-ui/react";
import Router from "next/router";

export interface ChatListButtonProps {}

function ChatListButton({}: ChatListButtonProps) {
  const handleClick = () => {
    Router.push("/chatList");
  };

  return (
    <Flex
      direction={"row"}
      position={"absolute"}
      bottom={"32px"}
      w={"calc(100% - 70px)"}
      h={"44px"}
      bg={"white"}
      border={"1px solid"}
      borderColor={cardStroke}
      boxShadow={cardShadow}
      borderRadius={"15px"}
      gap={"8px"}
      align={"center"}
      justify={"center"}
      onClick={handleClick}
    >
      <DialogIcon />
      <Text
        fontWeight={600}
        fontSize={"18px"}
        color={fontGray}
      >
        과거 대화 복습하기
      </Text>
    </Flex>
  );
}

export default ChatListButton;
