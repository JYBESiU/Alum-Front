import { primaryColor } from "@/utils/colors";
import {
  Box,
  Center,
  Flex,
  FlexProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  choices: string[];
  answer: string;
}

function QuizModal({
  isOpen,
  onClose,
  question,
  choices,
  answer,
}: QuizModalProps) {
  const [selected, setSelected] = useState("");

  const handleOptionClick = (text: string) => () => {
    setSelected(text);
  };

  return (
    <Modal
      size={"xs"}
      isCentered
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pt={"40px"}>
          <Text fontSize={"16px"} mb={"16px"}>
            <span style={{ color: primaryColor }}>Q. </span>
            {question}
          </Text>

          {choices.map((choice) => (
            <Option
              key={choice}
              text={choice}
              isSelected={choice === selected}
              onClick={handleOptionClick(choice)}
            />
          ))}
        </ModalBody>

        <ModalFooter>
          <Center
            borderRadius={"10px"}
            w={"100%"}
            h={"40px"}
            bg={primaryColor}
          >
            <Text color={"white"} fontSize={"14px"}>
              제출하기
            </Text>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default QuizModal;

const Option = ({
  text,
  isSelected,
  ...rest
}: { text: string; isSelected: boolean } & FlexProps) => {
  return (
    <Flex
      pl="16px"
      pr="12px"
      justify={"space-between"}
      align={"center"}
      h={"40px"}
      border={"1px solid"}
      borderColor={isSelected ? primaryColor : "#e3e3e3"}
      borderRadius={"8px"}
      mb={"8px"}
      {...rest}
    >
      <Text fontSize={"12px"}>{text}</Text>
      <Center
        w={"16px"}
        h={"16px"}
        borderRadius={"50%"}
        border={"1px solid"}
        borderColor={isSelected ? primaryColor : "#e3e3e3"}
      >
        {isSelected && (
          <Box
            w={"10px"}
            h={"10px"}
            borderRadius={"50%"}
            bg={primaryColor}
          />
        )}
      </Center>
    </Flex>
  );
};
