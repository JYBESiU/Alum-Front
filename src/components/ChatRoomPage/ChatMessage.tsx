import { VoiceIcon } from "@/svg";
import { Message } from "@/types/message";
import { chatFontColor, fontBlack } from "@/utils/colors";
import { Box, Flex, Text } from "@chakra-ui/react";

export interface ChatMessageProps {
  message: Message;
  handleVoicePlay?: (url?: string) => void;
  isDummy?: boolean;
}

function ChatMessage({
  message,
  handleVoicePlay,
  isDummy = false,
}: ChatMessageProps) {
  const isUser = message.isUser;
  const isFeedback = message.isFeedback;

  return (
    <Flex
      w={"100%"}
      justify={
        isFeedback ? "center" : isUser ? "end" : "start"
      }
      mb={"16px"}
    >
      {message.isFeedback ? (
        <Text
          fontSize={"12px"}
          color={"rgba(17, 17, 17, 0.60)"}
        >
          {message.content}
        </Text>
      ) : (
        <Box
          minW={"140px"}
          maxW={"232px"}
          py={"8px"}
          px={"10px"}
          bg={isUser ? "white" : "#E4E7EB"}
          borderRadius={"14px"}
        >
          <Text
            color={
              isDummy
                ? "#b3b3b3"
                : isUser
                ? fontBlack
                : chatFontColor
            }
          >
            {message.content}
          </Text>
          {!isUser && (
            <Box
              mt={"8px"}
              onClick={() =>
                handleVoicePlay?.(message.voiceUrl)
              }
            >
              <VoiceIcon />
            </Box>
          )}
        </Box>
      )}
    </Flex>
  );
}

export default ChatMessage;
