import {
  Box,
  Center,
  Text,
  VStack,
} from "@chakra-ui/react";
import BackButton from "./BackButton";
import {
  cardShadow,
  cardStroke,
  fontBlack,
  fontGray,
  primaryColor,
} from "@/utils/colors";

export interface TestsPageProps {}

function TestsPage({}: TestsPageProps) {
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
        알등급 상승 시험
      </Text>
      <Text
        w={"100%"}
        textAlign={"center"}
        fontSize={"14px"}
        fontWeight={400}
        color={fontGray}
        mb={"60px"}
      >
        말하기와 듣기 능력에 기반한
        <br />
        사용자 맞춤형 시험이에요.
      </Text>

      <Box
        w={"80px"}
        h={"100px"}
        mb={"24px"}
        background={
          "url(/images/egg.png) -27.769px -12.727px / 169.421% 124.242% no-repeat"
        }
      />

      <Text
        fontSize={"16px"}
        fontWeight={500}
        lineHeight={"22px"}
        textAlign={"center"}
        mb={"48px"}
      >
        아름님을 위한
        <br />
        맞춤 시험이 준비되었어요
      </Text>

      <Card
        title={"알고 있는 단어 수"}
        content={"약 4,521개"}
      />
      <Card
        title={"시험 출제 키워드"}
        content={"듣기중심, 사회, IT"}
      />

      <Center
        mt={"8px"}
        h={"56px"}
        w={"100%"}
        bg={primaryColor}
        borderRadius={"10px"}
      >
        <Text
          color={"white"}
          fontSize={"16px"}
          fontWeight={500}
        >
          시험 시작
        </Text>
      </Center>
    </VStack>
  );
}

export default TestsPage;

const Card = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <Box
      w={"100%"}
      border={"1px solid"}
      borderColor={cardStroke}
      boxShadow={cardShadow}
      borderRadius={"16px"}
      py={"14px"}
      px={"16px"}
      bg={"white"}
      mb={"16px"}
    >
      <Text
        fontSize={"12px"}
        lineHeight={"22px"}
        fontWeight={600}
        color={primaryColor}
        mb={"6px"}
      >
        {title}
      </Text>
      <Text
        fontSize={"16px"}
        lineHeight={"22px"}
        fontWeight={600}
        color={fontBlack}
      >
        {content}
      </Text>
    </Box>
  );
};
