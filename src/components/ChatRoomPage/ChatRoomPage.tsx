import { Box, Flex, Text } from "@chakra-ui/react";
import RecordingButton from "./RecordingButton";
import { useRouter } from "next/router";
import { useChatRoomMessage } from "@/hooks";
import ChatMessage from "./ChatMessage";

export interface ChatRoomPageProps {}

function ChatRoomPage({}: ChatRoomPageProps) {
  const router = useRouter();
  const { query } = router;

  const chatroomId = Number(query.chatRoomId);

  const { chatRoom } = useChatRoomMessage(chatroomId);

  return (
    <Flex
      h={"100%"}
      direction={"column"}
      overflow={"hidden"}
      position={"relative"}
    >
      <Box py={"40px"} textAlign={"center"}>
        <Text
          fontSize={"18px"}
          lineHeight={"20px"}
          fontWeight={600}
        >
          {chatRoom.title}
        </Text>
      </Box>
      <Box
        flex={1}
        px={"42px"}
        py={"34px"}
        overflow={"scroll"}
      >
        {chatRoom.messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </Box>
      <RecordingButton />
    </Flex>
  );
}

export default ChatRoomPage;
