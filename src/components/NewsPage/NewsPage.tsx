import { useNews } from "@/hooks";
import { CloseIcon } from "@/svg";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export interface NewsPageProps {}

function NewsPage({}: NewsPageProps) {
  const router = useRouter();
  const { query } = router;
  const newsId = Number(query.newsId);

  const { news } = useNews(newsId);

  const handleClose = () => {
    router.push("/listening");
  };

  return (
    <Box h={"100%"} px={"30px"} position={"relative"}>
      <Box
        position={"absolute"}
        top={"40px"}
        left={"30px"}
        onClick={handleClose}
      >
        <CloseIcon />
      </Box>
      <Box py={"40px"} textAlign={"center"} mb={"70px"}>
        <Text
          fontSize={"18px"}
          lineHeight={"20px"}
          fontWeight={600}
        >
          {news.title}
        </Text>
      </Box>

      <Box px={"12px"}>
        <Box
          width={"100%"}
          height={"234px"}
          borderRadius={"15px 15px 0 0"}
          backgroundSize={"cover"}
          backgroundImage={news.imageUrl}
        />
        <Box
          width={"100%"}
          py={"20px"}
          bg={"white"}
          borderRadius={"0 0 15px 15px"}
        >
          <Text fontSize={"14px"} textAlign={"center"}>
            {news.summary}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default NewsPage;
