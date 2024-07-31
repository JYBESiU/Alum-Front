import { cardShadow, primaryColor } from "@/utils/colors";
import { Center, Text } from "@chakra-ui/react";

export interface QuizButtonProps {
  onClick: VoidFunction;
}

function QuizButton({ onClick }: QuizButtonProps) {
  return (
    <Center
      w={"100%"}
      h={"56px"}
      border={"1px solid"}
      borderColor={primaryColor}
      boxShadow={cardShadow}
      borderRadius={"20px"}
      onClick={onClick}
      bg={"white"}
    >
      <Text
        fontSize={"16px"}
        fontWeight={600}
        color={primaryColor}
      >
        문제 풀기
      </Text>
    </Center>
  );
}

export default QuizButton;
