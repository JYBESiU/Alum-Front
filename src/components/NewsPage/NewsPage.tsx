import { useNews } from "@/hooks";
import { CloseIcon } from "@/svg";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import VoicePalyer from "./VoicePalyer";
import { useState } from "react";
import QuizButton from "./QuizButton";
import QuizModal from "./QuizModal";

export interface NewsPageProps {}

function NewsPage({}: NewsPageProps) {
  const router = useRouter();
  const { query } = router;
  const newsId = Number(query.newsId);

  const { news } = useNews(newsId);

  const [isQuizShow, setIsQuizShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    router.push("/listening");
  };

  const handleQuizModalOpen = () => {
    onOpen();
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
      <Box py={"40px"} textAlign={"center"} mb={"30px"}>
        <Text
          fontSize={"18px"}
          lineHeight={"20px"}
          fontWeight={600}
        >
          {news.title}
        </Text>
      </Box>

      <Box px={"12px"} mb={"24px"}>
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
          px={"8px"}
          borderRadius={"0 0 15px 15px"}
        >
          <Text fontSize={"14px"} textAlign={"center"}>
            {news.summary}
          </Text>
        </Box>
      </Box>

      <VoicePalyer
        voiceUrl={news.voiceUrl}
        setIsQuizShow={setIsQuizShow}
      />

      {isQuizShow && (
        <QuizButton onClick={handleQuizModalOpen} />
      )}

      <QuizModal
        isOpen={isOpen}
        onClose={onClose}
        question={news.question}
        choices={news.choices}
        answer={news.answer}
      />
    </Box>
  );
}

export default NewsPage;
