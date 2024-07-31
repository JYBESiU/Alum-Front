import {
  BotEditColorIcon,
  BotEditIcon,
  ChatColorIcon,
  ChatIcon,
  UserEditColorIcon,
  UserEditIcon,
} from "@/svg";
import {
  cardShadow,
  fontBlack,
  placeholderColor,
  primaryColor,
} from "@/utils/colors";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import Router from "next/router";

import { ChangeEvent, useState } from "react";

export interface NewChatFormProps {}

function NewChatForm({}: NewChatFormProps) {
  const [myRole, setMyRole] = useState<string>("");
  const [aiRole, setAiRole] = useState<string>("");
  const [chatSubject, setChatSubject] =
    useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  const isDisabled =
    myRole === "" || aiRole === "" || chatSubject === "";

  const handleMyRoleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setMyRole(e.target.value);
  };

  const handleAiRoleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setAiRole(e.target.value);
  };

  const handleChatSubjectChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setChatSubject(e.target.value);
  };

  const handleStartClick = async () => {
    if (isLoading || isDisabled) return;

    setIsLoading(true);

    const payload = {
      myrole: myRole,
      airole: aiRole,
      chatsubject: chatSubject,
    };
    // const { data } = await axios.post(
    //   "/chat/entry",
    //   payload
    // );
    // Router.push(`/chatRoom/${data.chatroomId}`);

    setTimeout(() => {
      Router.push(`/chatRoom/1`);
      setIsLoading(false);
    }, 1000);

    setIsLoading(false);
  };

  return (
    <Box px={"27px"}>
      <Box
        w={"100%"}
        h={"236px"}
        borderRadius={"16px"}
        boxShadow={cardShadow}
        mb={"16px"}
      >
        <Flex
          position={"relative"}
          direction={"row"}
          h={"56px"}
          align={"center"}
          borderBottom={"1px solid"}
          borderColor={"#e3e3e3"}
        >
          <Box position={"absolute"} left={"25px"}>
            {myRole !== "" ? (
              <UserEditColorIcon />
            ) : (
              <UserEditIcon />
            )}
          </Box>
          <Input
            w={"100%"}
            value={myRole}
            onChange={handleMyRoleChange}
            flex={1}
            color={fontBlack}
            placeholder="나의 역할"
            _placeholder={{
              fontWeight: 400,
              fontSize: "16px",
              color: placeholderColor,
            }}
            pl={"60px"}
            border={"none"}
            focusBorderColor="transparent"
          />
        </Flex>

        <Flex
          position={"relative"}
          direction={"row"}
          h={"56px"}
          align={"center"}
          borderBottom={"1px solid"}
          borderColor={"#e3e3e3"}
        >
          <Box position={"absolute"} left={"25px"}>
            {aiRole !== "" ? (
              <BotEditColorIcon />
            ) : (
              <BotEditIcon />
            )}
          </Box>
          <Input
            w={"100%"}
            value={aiRole}
            onChange={handleAiRoleChange}
            flex={1}
            color={fontBlack}
            placeholder="AI의 역할"
            _placeholder={{
              fontWeight: 400,
              fontSize: "16px",
              color: placeholderColor,
            }}
            pl={"60px"}
            border={"none"}
            focusBorderColor="transparent"
          />
        </Flex>

        <Flex
          position={"relative"}
          direction={"row"}
          h={"124px"}
          align={"top"}
        >
          <Box
            position={"absolute"}
            left={"25px"}
            top={"18px"}
          >
            {chatSubject !== "" ? (
              <ChatColorIcon />
            ) : (
              <ChatIcon />
            )}
          </Box>
          <Textarea
            w={"100%"}
            pt={"18px"}
            value={chatSubject}
            onChange={handleChatSubjectChange}
            flex={1}
            color={fontBlack}
            placeholder="대화 주제"
            _placeholder={{
              fontWeight: 400,
              fontSize: "16px",
              color: placeholderColor,
            }}
            pl={"60px"}
            border={"none"}
            focusBorderColor="transparent"
          />
        </Flex>
      </Box>

      <Center
        w={"100%"}
        h={"56px"}
        bg={isDisabled ? "#FF6B004D" : primaryColor}
        borderRadius={"16px"}
        color={"white"}
        onClick={handleStartClick}
      >
        {isLoading ? (
          <Spinner color="white" />
        ) : (
          "대화 시작"
        )}
      </Center>
    </Box>
  );
}

export default NewChatForm;
