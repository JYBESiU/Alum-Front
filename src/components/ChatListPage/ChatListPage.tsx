import { Box, Flex, Text } from "@chakra-ui/react";
import BackButton from "../BackButton";
import {
  cardShadow,
  cardStroke,
  fontBlack,
  fontGray,
  primaryColor,
} from "@/utils/colors";
import { useChatList } from "@/hooks";
import ChatCard from "./ChatCard";
import Router from "next/router";

export interface ChatListPageProps {}

function ChatListPage({}: ChatListPageProps) {
  const { chatRooms } = useChatList();

  return (
    <Flex
      h={"100%"}
      pt={"40px"}
      direction={"column"}
      position={"relative"}
      overflow={"hidden"}
    >
      <BackButton />
      <Text
        w={"100%"}
        textAlign={"center"}
        fontSize={"18px"}
        fontWeight={600}
        color={fontBlack}
        mb={"24px"}
      >
        과거 대화 복습하기
      </Text>
      <Text
        w={"100%"}
        textAlign={"center"}
        fontSize={"14px"}
        fontWeight={400}
        color={fontGray}
        mb={"20px"}
      >
        과거 대화를 한 번 더 복습해요.
        <br />
        이젠 틀리지 않을 거죠?
      </Text>
      <Flex
        flex={1}
        direction={"column"}
        py={"12px"}
        px={"38px"}
        overflow={"scroll"}
        gap={"16px"}
      >
        {chatRooms?.map((chatroom) => (
          <ChatCard key={chatroom.id} chatroom={chatroom} />
        ))}
        <Box
          mt={"16px"}
          py={"32px"}
          border={"1px solid"}
          borderColor={cardStroke}
          boxShadow={cardShadow}
          borderRadius={"20px"}
          textAlign={"center"}
          bg={"white"}
          onClick={() => Router.push("/newChat")}
        >
          <Text
            fontSize={"18px"}
            lineHeight={"18px"}
            fontWeight={600}
            color={primaryColor}
            mb={"12px"}
          >
            다채로운 주제로 대화 시작하기
          </Text>
          <Text
            fontSize={"14px"}
            lineHeight={"20px"}
            fontWeight={400}
            color={fontGray}
          >
            나만의 대화 주제를 만들어 연습할 수 있어요.
            <br />
            나의 역할과 상황을 설정해 봐요.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ChatListPage;
