import { VoiceIcon } from "@/svg";
import { Message } from "@/types/message";
import { chatFontColor, fontBlack } from "@/utils/colors";
import { Box, Flex, Text } from "@chakra-ui/react";

export interface ChatMessageProps {
  message: Message;
  handleVoicePlay: (url?: string) => void;
}

function ChatMessage({
  message,
  handleVoicePlay,
}: ChatMessageProps) {
  const isUser = message.isUser;

  return (
    <Flex
      w={"100%"}
      justify={isUser ? "end" : "start"}
      mb={"16px"}
    >
      <Box
        minW={"140px"}
        maxW={"232px"}
        py={"8px"}
        px={"10px"}
        bg={isUser ? "white" : "#E4E7EB"}
        borderRadius={"14px"}
      >
        <Text color={isUser ? fontBlack : chatFontColor}>
          {message.content}
        </Text>
        {!isUser && (
          <Box
            mt={"8px"}
            onClick={() => handleVoicePlay(message.url)}
          >
            <VoiceIcon />
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default ChatMessage;
