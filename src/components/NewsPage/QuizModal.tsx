import { HomeIcon } from "@/svg";
import {
  cardShadow,
  fontBlack,
  fontGray,
  primaryColor,
} from "@/utils/colors";
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
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Router from "next/router";
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
  const [status, setStatus] = useState<
    "choice" | "correct" | "wrong"
  >("choice");

  const handleOptionClick = (text: string) => () => {
    setSelected(text);
  };

  const handleAnswerSubmit = () => {
    if (selected === answer) {
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
  };

  const handleGoHome = () => {
    Router.push("/talking");
  };

  const handleOtherNews = () => {
    Router.push("/listening");
  };

  const handleRetry = () => {
    setSelected("");
    setStatus("choice");
  };

  const ChoiceComponent = (
    <>
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
    </>
  );
  const CorrectComponent = (
    <Center h={"100%"} flexDirection={"column"} gap={"0"}>
      <Image
        src={"/images/correct.png"}
        alt={"correct"}
        width={128}
        height={128}
      />
      <Text mt={"8px"} fontSize={"16px"} color={fontBlack}>
        정답입니다!
      </Text>
      <Text fontSize={"14px"} color={fontGray} mb={"40px"}>
        다른 뉴스의 퀴즈도 풀어보세요
      </Text>
      <Flex
        w={"100%"}
        justify={"space-between"}
        gap={"18px"}
      >
        <Center
          width={"100%"}
          h={"40px"}
          bg={"white"}
          borderRadius={"10px"}
          border={"2px solid #e6e6e6"}
          onClick={handleGoHome}
        >
          <HomeIcon />
        </Center>
        <Center
          width={"100%"}
          h={"40px"}
          bg={"#585858"}
          borderRadius={"10px"}
          onClick={handleOtherNews}
        >
          <Text
            fontSize={"14px"}
            fontWeight={600}
            color={"white"}
          >
            다른 뉴스 보기
          </Text>
        </Center>
      </Flex>
    </Center>
  );
  const WrongComponent = (
    <Center h={"100%"} flexDirection={"column"} gap={"0"}>
      <Image
        src={"/images/wrong.png"}
        alt={"wrong"}
        width={128}
        height={128}
      />
      <Text mt={"8px"} fontSize={"16px"} color={fontBlack}>
        오답입니다.
      </Text>
      <Text fontSize={"14px"} color={fontGray} mb={"40px"}>
        다시 도전해보세요.
      </Text>
      <Flex
        w={"100%"}
        justify={"space-between"}
        gap={"18px"}
      >
        <Center
          width={"100%"}
          h={"40px"}
          bg={"white"}
          borderRadius={"10px"}
          border={"2px solid #e6e6e6"}
          onClick={handleGoHome}
        >
          <HomeIcon />
        </Center>
        <Center
          width={"100%"}
          h={"40px"}
          bg={"#585858"}
          borderRadius={"10px"}
          onClick={handleRetry}
        >
          <Text
            fontSize={"14px"}
            fontWeight={600}
            color={"white"}
          >
            재도전하기
          </Text>
        </Center>
      </Flex>
    </Center>
  );

  const getBody = () => {
    switch (status) {
      case "choice":
        return ChoiceComponent;
      case "correct":
        return CorrectComponent;
      case "wrong":
        return WrongComponent;
    }
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
      <ModalContent
        h={"424px"}
        border={"1px solid rgba(255, 107, 0, 0.50)"}
        boxShadow={cardShadow}
        borderRadius={"10px"}
      >
        <ModalCloseButton />
        <ModalBody pt={"40px"}>{getBody()}</ModalBody>
        {status === "choice" && (
          <ModalFooter>
            <Center
              borderRadius={"10px"}
              w={"100%"}
              h={"40px"}
              bg={primaryColor}
              onClick={handleAnswerSubmit}
            >
              <Text color={"white"} fontSize={"14px"}>
                제출하기
              </Text>
            </Center>
          </ModalFooter>
        )}
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
