import {
  fontBlack,
  placeholderColor,
  primaryColor,
} from "@/utils/colors";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import Router from "next/router";
import { ChangeEvent, useState } from "react";

export interface HomePageProps {}

function HomePage({}: HomePageProps) {
  const [number, setNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isDisabled = number === "" || password === "";

  const handleNumberChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNumber(e.target.value);
  };
  const handlePasswordChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    Router.push("/talking");
  };

  return (
    <Box pt={"62px"} px={"44px"}>
      <Text
        fontSize={"20px"}
        lineHeight={"24px"}
        fontWeight={600}
        mb={"80px"}
      >
        휴대폰 번호로 로그인
      </Text>

      <Input
        w={"100%"}
        value={number}
        onChange={handleNumberChange}
        color={fontBlack}
        placeholder="휴대폰 번호"
        _placeholder={{
          fontWeight: 400,
          fontSize: "16px",
          color: placeholderColor,
        }}
        h={"50px"}
        p={"16px"}
        border={"1px solid #e8e8e8"}
        focusBorderColor="#e8e8e8"
        mb={"16px"}
      />

      <Input
        w={"100%"}
        value={password}
        onChange={handlePasswordChange}
        color={fontBlack}
        placeholder="비밀번호"
        _placeholder={{
          fontWeight: 400,
          fontSize: "16px",
          color: placeholderColor,
        }}
        h={"50px"}
        p={"16px"}
        border={"1px solid #e8e8e8"}
        focusBorderColor="#e8e8e8"
        mb={"80px"}
      />

      <Button
        borderRadius={"100px"}
        w={"100%"}
        h={"50px"}
        bg={primaryColor}
        isDisabled={isDisabled}
        color={"white"}
        onClick={handleLoginClick}
      >
        로그인
      </Button>
    </Box>
  );
}

export default HomePage;
