import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import BackButton from "./BackButton";
import {
  blueColor,
  cyanColor,
  fontBlack,
  fontGray,
  pinkColor,
} from "@/utils/colors";
import {
  BlueBarIcon,
  CyanBarIcon,
  HeadPhoneBlueIcon,
  MicPinkIcon,
  PinkBarIcon,
  TrophyIcon,
} from "@/svg";

export interface PerformancePageProps {}

function PerformancePage({}: PerformancePageProps) {
  return (
    <VStack
      gap={0}
      pt={"40px"}
      position={"relative"}
      px={"44px"}
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
        아름님의 한국어 실력 분석
      </Text>
      <Text
        w={"100%"}
        textAlign={"center"}
        fontSize={"14px"}
        fontWeight={400}
        color={fontGray}
        mb={"42px"}
      >
        아름님의 한국어 말하기 능력과
        <br />
        듣기 능력을 분석했어요.
      </Text>

      <Flex gap={"12px"} align={"center"} mb={"16px"}>
        <VStack gap={"6px"}>
          <MicPinkIcon />
          <Text
            color={pinkColor}
            fontSize={"16px"}
            fontWeight={500}
          >
            말하기
          </Text>
        </VStack>
        <PinkBarIcon />
      </Flex>

      <Flex gap={"12px"} align={"center"} mb={"16px"}>
        <VStack gap={"6px"}>
          <HeadPhoneBlueIcon />
          <Text
            color={blueColor}
            fontSize={"16px"}
            fontWeight={500}
          >
            듣기
          </Text>
        </VStack>
        <BlueBarIcon />
      </Flex>

      <Flex gap={"12px"} align={"center"} mb={"56px"}>
        <VStack gap={"6px"}>
          <TrophyIcon />
          <Text
            color={cyanColor}
            fontSize={"16px"}
            fontWeight={500}
          >
            정답률
          </Text>
        </VStack>
        <CyanBarIcon />
      </Flex>

      <Text
        fontSize={"14px"}
        lineHeight={"24px"}
        color={fontBlack}
      >
        한국어 듣기 실력이 아주 훌륭해요! 말하기 능력은
        알음과 함께 더 키워보세요.{" "}
        <span style={{ fontWeight: 600 }}>
          천천히 말하면
        </span>{" "}
        발음과 억양을 더욱 정확하게 파악할 수 있어요.{" "}
        <span style={{ fontWeight: 600 }}>
          한국어의 문장 구조
        </span>
        를 이해하지 못해 말하기에 어려움을 겪을 수 있어요.
        주어와 동사, 목적어 등의 역할을 공부해보세요.
      </Text>
    </VStack>
  );
}

export default PerformancePage;
