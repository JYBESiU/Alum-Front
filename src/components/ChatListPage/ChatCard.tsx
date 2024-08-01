import { ChatRoom } from "@/types/message";
import {
  cardShadow,
  cardStroke,
  fontBlack,
  fontGray,
} from "@/utils/colors";
import { Flex, Text } from "@chakra-ui/react";
import moment from "moment";
import Image from "next/image";
import Router from "next/router";

export interface ChatCardProps {
  chatroom: ChatRoom;
}

function ChatCard({ chatroom }: ChatCardProps) {
  return (
    <Flex
      border={"1px solid"}
      borderColor={cardStroke}
      boxShadow={cardShadow}
      borderRadius={"20px"}
      direction={"row"}
      py={"16px"}
      px={"20px"}
      gap={"18px"}
      bg={"white"}
      onClick={() =>
        Router.push(`/chatRoom/${chatroom.id}`)
      }
    >
      <Image
        src={imageList[chatroom.id % 3]}
        alt={"bread"}
        width={60}
        height={60}
      />
      <Flex direction={"column"} overflow={"hidden"}>
        <Text
          fontSize={"18px"}
          lineHeight={"18px"}
          fontWeight={600}
          color={fontBlack}
          mb={"4px"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
        >
          {chatroom.title}
        </Text>
        <Text
          fontSize={"12px"}
          lineHeight={"16px"}
          fontWeight={400}
          color={fontGray}
          mb={"8px"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
        >
          {chatroom.description}
        </Text>
        <Text
          fontSize={"12px"}
          lineHeight={"14px"}
          fontWeight={400}
          color={fontGray}
        >
          {moment(chatroom.createdAt).format("YYYY-MM-DD")}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ChatCard;

const imageList = [
  "/images/bread.png",
  "/images/heart.png",
  "/images/present.png",
];
