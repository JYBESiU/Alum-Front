import { useRecorder } from "@/hooks";
import { MicBigColorIcon, MicBigIcon } from "@/svg";
import { chatFontColor } from "@/utils/colors";
import { Box, Flex, Text } from "@chakra-ui/react";

export interface RecordingButtonProps {}

function RecordingButton({}: RecordingButtonProps) {
  const { isRecording, startRecording, stopRecording } =
    useRecorder();

  return (
    <>
      <Box
        position={"absolute"}
        bottom={"40px"}
        left={"50%"}
        transform={"translateX(-50%)"}
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
          {isRecording ? (
            <MicBigColorIcon />
          ) : (
            <MicBigIcon />
          )}
        </Flex>
      </Box>
      {isRecording && (
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
      )}
    </>
  );
}

export default RecordingButton;
