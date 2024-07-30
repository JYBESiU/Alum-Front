import { useRecorder } from "@/hooks";
import { MicBigColorIcon, MicBigIcon } from "@/svg";
import { recordingBG } from "@/utils/colors";
import { Flex } from "@chakra-ui/react";

export interface RecordingButtonProps {}

function RecordingButton({}: RecordingButtonProps) {
  const { isRecording, startRecording, stopRecording } =
    useRecorder();

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
        justify={"center"}
      >
        {isRecording ? <MicBigColorIcon /> : <MicBigIcon />}
      </Flex>

      {/* {isRecording && (
        <Text
          position={"absolute"}
          fontSize={"15px"}
          color={chatFontColor}
          bottom={"104px"}
          left={"50%"}
          transform={"translateX(-50%)"}
        >
          대답 듣는 중...
        </Text>
      )} */}
    </Flex>
  );
}

export default RecordingButton;
