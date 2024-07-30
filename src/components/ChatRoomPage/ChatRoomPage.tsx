import { useRecorder } from "@/hooks";
import { Box } from "@chakra-ui/react";

export interface ChatRoomPageProps {
  // chatRoomId?: string;
}

function ChatRoomPage({}: ChatRoomPageProps) {
  const { isRecording, startRecording, stopRecording } =
    useRecorder();

  return (
    <Box>
      <button
        onClick={
          isRecording ? stopRecording : startRecording
        }
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </Box>
  );
}

export default ChatRoomPage;
