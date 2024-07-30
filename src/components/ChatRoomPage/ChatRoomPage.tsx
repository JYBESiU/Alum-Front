import { Box, Flex, Text } from "@chakra-ui/react";
import RecordingButton from "./RecordingButton";
import { useRouter } from "next/router";
import { useChatRoomMessage } from "@/hooks";
import ChatMessage from "./ChatMessage";
import { useEffect, useRef } from "react";
import { CloseIcon } from "@/svg";

export interface ChatRoomPageProps {}

function ChatRoomPage({}: ChatRoomPageProps) {
  const router = useRouter();
  const { query } = router;

  const playerRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {}, []);

  const chatroomId = Number(query.chatRoomId);

  const { chatRoom } = useChatRoomMessage(chatroomId);

  const handleVoicePlay = (url?: string) => {
    if (!playerRef.current) return;

    playerRef.current.pause();
    playerRef.current.src = url || "";
    playerRef.current.play();
  };

  const handleClose = () => {
    router.push("/talking");
  };

  return (
    <Flex
      h={"100%"}
      direction={"column"}
      overflow={"hidden"}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        top={"40px"}
        left={"30px"}
        onClick={handleClose}
      >
        <CloseIcon />
      </Box>
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
          <ChatMessage
            key={message.id}
            message={message}
            handleVoicePlay={handleVoicePlay}
          />
        ))}
      </Box>
      <RecordingButton />
      <audio id="voicePlayer" src="" ref={playerRef} />
    </Flex>
  );
}

export default ChatRoomPage;
