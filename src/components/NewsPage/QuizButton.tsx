import { cardShadow, primaryColor } from "@/utils/colors";
import { Center, Text } from "@chakra-ui/react";

export interface QuizButtonProps {
  onClick: VoidFunction;
}

function QuizButton({ onClick }: QuizButtonProps) {
  return (
    <Center
      w={"100%"}
      h={"46px"}
      border={"1px solid"}
      borderColor={primaryColor}
      boxShadow={cardShadow}
      borderRadius={"20px"}
      onClick={onClick}
      bg={"white"}
    >
      <Text
        fontSize={"22px"}
        fontWeight={700}
        color={primaryColor}
      >
        퀴즈 풀기
      </Text>
    </Center>
  );
}

export default QuizButton;
