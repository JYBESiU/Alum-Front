import { useRecorder } from "@/hooks";

export interface ChatRoomProps {
  // chatRoomId?: string;
}

function ChatRoom({}: ChatRoomProps) {
  const { isRecording, startRecording, stopRecording } =
    useRecorder();

  return (
    <div>
      <button
        onClick={
          isRecording ? stopRecording : startRecording
        }
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
}

export default ChatRoom;
