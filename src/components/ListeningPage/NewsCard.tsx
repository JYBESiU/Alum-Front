import { News } from "@/types/news";
import { fontBlack } from "@/utils/colors";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export interface NewsCardProps {
  news: News;
}

function NewsCard({ news }: NewsCardProps) {
  return (
    <Box
      w={"100%"}
      overflow={"hidden"}
      borderRadius={"10px"}
      mb={"24px"}
    >
      <Box
        width={"100%"}
        height={"160px"}
        backgroundSize={"cover"}
        backgroundImage={news.imageUrl}
      />
      <Flex
        h={"40px"}
        px={"8px"}
        pb={"2px"}
        overflow={"hidden"}
        bg={"white"}
        align={"center"}
      >
        <Text
          fontSize={"14px"}
          fontWeight={400}
          color={fontBlack}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
        >
          {news.title}
        </Text>
      </Flex>
    </Box>
  );
}

export default NewsCard;
