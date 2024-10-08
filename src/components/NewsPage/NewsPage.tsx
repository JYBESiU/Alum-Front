import { CloseIcon } from "@/svg";
import {
  Box,
  Center,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import VoicePalyer from "./VoicePalyer";
import { useState } from "react";
import QuizButton from "./QuizButton";
import QuizModal from "./QuizModal";
import BackButton from "../BackButton";
import { useNews } from "@/hooks/useNews";

export interface NewsPageProps {}

function NewsPage({}: NewsPageProps) {
  const router = useRouter();
  const { query } = router;
  const newsId = Number(query.newsId);

  const { news: newslist } = useNews(newsId);
  const news = newslist?.[0];

  const [isQuizShow, setIsQuizShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    router.back();
  };

  const handleQuizModalOpen = () => {
    onOpen();
  };

  return (
    <Box
      h={"100%"}
      pt={"40px"}
      px={"30px"}
      position={"relative"}
    >
      <BackButton />
      <Center pb={"40px"} textAlign={"center"} mb={"30px"}>
        <Text
          fontSize={"18px"}
          lineHeight={"20px"}
          fontWeight={600}
          maxW={"75%"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
        >
          {news?.title}
        </Text>
      </Center>

      <Box px={"12px"} mb={"24px"}>
        <Box
          width={"100%"}
          height={"234px"}
          borderRadius={"15px 15px 0 0"}
          backgroundSize={"cover"}
          backgroundImage={news?.imageUrl}
        />
        <Box
          width={"100%"}
          py={"20px"}
          bg={"white"}
          px={"8px"}
          borderRadius={"0 0 15px 15px"}
        >
          <Text fontSize={"14px"} textAlign={"center"}>
            {news?.summary}
          </Text>
        </Box>
      </Box>

      <VoicePalyer
        voiceUrl={news?.voiceUrl || ""}
        setIsQuizShow={setIsQuizShow}
      />

      {isQuizShow && (
        <QuizButton onClick={handleQuizModalOpen} />
      )}

      {isOpen && (
        <QuizModal
          isOpen={isOpen}
          onClose={onClose}
          question={news?.question}
          choices={[
            news?.choice1,
            news?.choice2,
            news?.choice3,
            news?.choice4,
          ]}
          answer={news?.answer}
        />
      )}
    </Box>
  );
}

export default NewsPage;
