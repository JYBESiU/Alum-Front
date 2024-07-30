import { Box } from "@chakra-ui/react";
import RecordingButton from "./RecordingButton";
import { useRouter } from "next/router";

export interface ChatRoomPageProps {}

function ChatRoomPage({}: ChatRoomPageProps) {
  const router = useRouter();
  const { query } = router;

  const chatroomId = Number(query.chatRoomId);

  return (
    <Box
      h={"100%"}
      overflow={"hidden"}
      position={"relative"}
    >
      <RecordingButton />
    </Box>
  );
}

export default ChatRoomPage;
