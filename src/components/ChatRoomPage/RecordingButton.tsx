import { useRecorder } from "@/hooks";
import { MicBigColorIcon, MicBigIcon } from "@/svg";
import { Message } from "@/types/message";
import { recordingBG } from "@/utils/colors";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { KeyedMutator } from "swr";

export interface RecordingButtonProps {
  mutate: KeyedMutator<Message[]>;
  chatroomId: number;
}

function RecordingButton({
  mutate,
  chatroomId,
}: RecordingButtonProps) {
  const handleAfterUpload = async (payload: object) => {
    const { data } = await axios.post("/chat/stt", {
      chatroomId,
      ...payload,
    });
    mutate();

    const messageId = data.id;

    await axios.post("/chat/reply", {
      messageId,
    });
    mutate();
  };

  const { isRecording, startRecording, stopRecording } =
    useRecorder(handleAfterUpload);

  return (
    <Flex
      w={"100%"}
      h={"124px"}
      pt={"28px"}
      align={"start"}
      justify={"center"}
      direction={"row"}
      bg={recordingBG}
    >
      <Flex
        w={"56px"}
        h={"56px"}
        bg={"white"}
        borderRadius={"50%"}
        onClick={
          isRecording ? stopRecording : startRecording
        }
        align={"center"}
        {...(isRecording && {
          boxShadow: "0px 0px 15px 0px #FF6B00",
        })}
        justify={"center"}
      >
        {isRecording ? <MicBigColorIcon /> : <MicBigIcon />}
      </Flex>
    </Flex>
  );
}

export default RecordingButton;
