import { useRecentNews } from "@/hooks/useRecentNews";
import {
  fontBlack,
  fontGray,
  primaryColor,
} from "@/utils/colors";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NewsCard from "./NewsCard";

export interface ListeningPageProps {}

function ListeningPage({}: ListeningPageProps) {
  const { news } = useRecentNews();

  return (
    <Box
      h={"100%"}
      pt={"48px"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        px={"35px"}
        w={"100%"}
        h={"100%"}
        overflow={"scroll"}
      >
        <Text
          fontWeight={600}
          fontSize={"36px"}
          lineHeight={"34px"}
          mb={"12px"}
          color={fontBlack}
        >
          듣기
        </Text>
        <Text
          fontWeight={500}
          fontSize={"14px"}
          lineHeight={"20px"}
          mb={"28px"}
          color={fontGray}
        >
          뉴스 기사를 듣고 기사 내용에 관한 문제를 풀어봐요.
        </Text>

        <Box
          h={"120px"}
          p={"26px"}
          borderRadius={"20px"}
          bg={"rgba(255, 107, 0, 0.80)"}
          boxShadow={
            "0px 0px 4px 0px rgba(99, 99, 99, 0.50)"
          }
          mb={"24px"}
        >
          <Text
            fontSize={"18px"}
            lineHeight={"18px"}
            fontWeight={600}
            color={"white"}
            mb={"8px"}
          >
            카테고리를 골라보세요!
          </Text>
          <Text
            fontSize={"14px"}
            lineHeight={"20px"}
            fontWeight={500}
            color={"white"}
          >
            카테고리에 해당하는 랜덤 기사를 듣고 기사 내용에
            관한 문제를 풀어봐요.
          </Text>
        </Box>

        <Flex
          justify={"space-between"}
          gap={"14px"}
          mb={"14px"}
        >
          <Chip>정치</Chip>
          <Chip>경제</Chip>
          <Chip>사회</Chip>
          <Chip>문화</Chip>
        </Flex>
        <Flex
          justify={"space-between"}
          gap={"14px"}
          mb={"36px"}
        >
          <Chip>IT</Chip>
          <Chip>과학</Chip>
          <Chip>생활</Chip>
          <Chip>세계</Chip>
        </Flex>

        <Text
          fontSize={"18px"}
          lineHeight={"18px"}
          fontWeight={600}
          color={fontBlack}
          mb={"8px"}
        >
          오늘의 추천뉴스
        </Text>

        {news.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </Box>
    </Box>
  );
}

export default ListeningPage;

const Chip = styled(Center)`
  border-radius: 18px;
  border: 1px solid ${primaryColor};
  background: white;
  height: 44px;
  /* padding: 0 16px; */
  color: ${primaryColor};
  flex-grow: 1;
  width: 100%;
`;
