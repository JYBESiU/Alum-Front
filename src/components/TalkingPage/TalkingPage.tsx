import {
  cardShadow,
  cardStroke,
  fontBlack,
  fontGray,
} from "@/utils/colors";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import ChatListButton from "./ChatListButton";
import NewChatButton from "./NewChatButton";

export interface TalkingPageProps {}

function TalkingPage({}: TalkingPageProps) {
  return (
    <Box
      h={"100%"}
      px={"35px"}
      pt={"48px"}
      position={"relative"}
    >
      <Text
        fontWeight={600}
        fontSize={"36px"}
        lineHeight={"34px"}
        mb={"12px"}
        color={fontBlack}
      >
        말하기
      </Text>
      <Text
        fontWeight={500}
        fontSize={"14px"}
        lineHeight={"20px"}
        mb={"28px"}
        color={fontGray}
      >
        주제별 말하기로 일상 속 한국어를 연습해요.
      </Text>

      <NewChatButton />

      <Flex
        w={"100%"}
        justify={"space-between"}
        mb={"24px"}
      >
        <Card text={"친구와 대화"} pt={"10px"}>
          <Image
            alt={"friend"}
            src={`/images/friend.png`}
            width={90}
            height={90}
          />
        </Card>
        <Card text={"약속에 늦었다"}>
          <Image
            alt={"appointment"}
            src={`/images/appointment.png`}
            width={130}
            height={100}
          />
        </Card>
      </Flex>
      <Flex w={"100%"} justify={"space-between"}>
        <Card text={"영화관에서"} pt={"10px"}>
          <Image
            alt={"popcorn"}
            src={`/images/popcorn.png`}
            width={133}
            height={90}
          />
        </Card>
        <Card text={"졸업식 날"} pt={"10px"}>
          <Image
            alt={"graduate"}
            src={`/images/graduate.png`}
            width={90}
            height={90}
          />
        </Card>
      </Flex>

      <ChatListButton />
    </Box>
  );
}

export default TalkingPage;

const Card = ({
  text,
  children,
  pt,
}: {
  text: string;
  pt?: string;
  children: ReactNode;
}) => {
  return (
    <Flex
      position={"relative"}
      bg={"white"}
      w={"144px"}
      h={"144px"}
      direction={"column"}
      align={"center"}
      justify={"top"}
      pt={pt}
      border={"1px solid"}
      borderColor={cardStroke}
      boxShadow={cardShadow}
      borderRadius={"30px"}
    >
      {children}
      <Text
        position={"absolute"}
        bottom={"20px"}
        fontWeight={600}
        fontSize={"16px"}
        color={fontBlack}
      >
        {text}
      </Text>
    </Flex>
  );
};
