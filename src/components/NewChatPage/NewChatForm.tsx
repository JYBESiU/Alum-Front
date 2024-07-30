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
  cardStroke,
  fontBlack,
  placeholderColor,
  primaryColor,
} from "@/utils/colors";
import {
  Box,
  Button,
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

export interface NewChatFormProps {}

function NewChatForm({}: NewChatFormProps) {
  const [myRole, setMyRole] = useState<string>("");
  const [aiRole, setAiRole] = useState<string>("");
  const [chatSubject, setChatSubject] =
    useState<string>("");

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

  const handleStartClick = () => {};

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
          borderBottom={"1px solid"}
          borderColor={"#e3e3e3"}
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

      <Button
        w={"100%"}
        h={"56px"}
        isDisabled={isDisabled}
        bg={primaryColor}
        borderRadius={"16px"}
        color={"white"}
      >
        대화 시작
      </Button>
    </Box>
  );
}

export default NewChatForm;
