import { Box, Flex, Text } from "@chakra-ui/react";
import RecordingButton from "./RecordingButton";
import { useRouter } from "next/router";
import { useChatRoomMessage } from "@/hooks";
import ChatMessage from "./ChatMessage";
import { useRef } from "react";
import BackButton from "../BackButton";

export interface ChatRoomPageProps {}

function ChatRoomPage({}: ChatRoomPageProps) {
  const router = useRouter();
  const { query } = router;

  const playerRef = useRef<HTMLAudioElement>(null);

  const chatroomId = Number(query.chatRoomId);

  const { messages, mutate, isLoading } =
    useChatRoomMessage(chatroomId);
  const chatroom = messages?.[0].chatroom;

  const handleVoicePlay = (url?: string) => {
    if (!playerRef.current) return;

    playerRef.current.pause();
    playerRef.current.src = url || "";
    playerRef.current.play();
  };

  return (
    <Flex
      h={"100%"}
      direction={"column"}
      overflow={"hidden"}
      position={"relative"}
      pt={"40px"}
    >
      <BackButton />
      <Box pb={"40px"} textAlign={"center"}>
        <Text
          fontSize={"18px"}
          lineHeight={"20px"}
          fontWeight={600}
        >
          {chatroom?.title}
        </Text>
      </Box>
      <Box
        flex={1}
        px={"42px"}
        py={"34px"}
        overflow={"scroll"}
      >
        {messages?.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            handleVoicePlay={handleVoicePlay}
          />
        ))}
        {!messages?.at(-1)?.isUser && (
          <ChatMessage
            isDummy
            message={{
              id: 0,
              isUser: true,
              content: "말하기 버튼을 눌러주세요",
            }}
          />
        )}
      </Box>
      <RecordingButton
        mutate={mutate}
        chatroomId={chatroomId}
      />
      <audio id="voicePlayer" src="" ref={playerRef} />
    </Flex>
  );
}

export default ChatRoomPage;
