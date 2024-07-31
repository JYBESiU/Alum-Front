import { Box, Flex, Text } from "@chakra-ui/react";
import BackButton from "./BackButton";
import { fontBlack } from "@/utils/colors";
import NewsCard from "./ListeningPage/NewsCard";
import { news1, news2, news3 } from "@/utils/dummy";

export interface NotesPageProps {}

function NotesPage({}: NotesPageProps) {
  return (
    <Flex
      direction={"column"}
      gap={0}
      pt={"40px"}
      position={"relative"}
      px={"38px"}
      overflow={"hidden"}
      h={"100%"}
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
        오답 정리
      </Text>

      <Box overflow={"scroll"} flex={1}>
        <NewsCard news={news1} />
        <NewsCard news={news2} />
        <NewsCard news={news3} />
        <NewsCard news={news3} />
      </Box>
    </Flex>
  );
}

export default NotesPage;
