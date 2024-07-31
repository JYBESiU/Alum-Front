import { Box, Center, Flex, Text } from "@chakra-ui/react";
import BackButton from "./BackButton";
import {
  fontBlack,
  fontGray,
  primaryColor,
} from "@/utils/colors";

export interface GoalsPageProps {}

function GoalsPage({}: GoalsPageProps) {
  return (
    <Box
      gap={0}
      pt={"40px"}
      position={"relative"}
      px={"32px"}
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
        이번 주 임무
      </Text>

      <Card
        image={"microphone"}
        subText="말하기 기능 사용하면"
        text={"100음"}
        chipText={"말하러 가기"}
      />
      <Card
        image={"headphone"}
        subText="듣기 기능 사용하면"
        text={"200음"}
        chipText={"들으러 가기"}
      />
      <Card
        image={"microphone"}
        subText="오답 정리 사용하기"
        text={"50음"}
        chipText={"사용하기"}
      />
    </Box>
  );
}

export default GoalsPage;

const Card = ({
  image,
  subText,
  text,
  chipText,
}: {
  image: string;
  subText: string;
  text: string;
  chipText: string;
}) => {
  return (
    <Flex
      w={"100%"}
      h={"88px"}
      bg={"white"}
      borderRadius={"16px"}
      position={"relative"}
      align={"center"}
      px="24px"
      gap={"40px"}
      mb={"16px"}
    >
      <Box
        w={"40px"}
        h={"40px"}
        background={`url(/images/${image}.png) 50% / cover no-repeat`}
      />
      <Box>
        <Text
          fontSize={"12px"}
          color={fontGray}
          fontWeight={400}
        >
          {subText}
        </Text>
        <Text
          fontSize={"18px"}
          color={fontBlack}
          fontWeight={600}
        >
          {text}
        </Text>
      </Box>
      <Center
        position={"absolute"}
        right={"14px"}
        bottom={"16px"}
        background={"#FF6B004D"}
        borderRadius={"24px"}
        px={"8px"}
        h={"24px"}
      >
        <Text
          fontSize={"12px"}
          fontWeight={600}
          color={primaryColor}
        >
          {chipText}
        </Text>
      </Center>
    </Flex>
  );
};
