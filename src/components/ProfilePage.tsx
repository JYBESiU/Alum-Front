import {
  cardShadow,
  cardStroke,
  fontBlack,
  fontGray,
  primaryColor,
} from "@/utils/colors";
import {
  Box,
  Center,
  CenterProps,
  Flex,
  Text,
} from "@chakra-ui/react";
import Router from "next/router";

export interface ProfilePageProps {}

function ProfilePage({}: ProfilePageProps) {
  const handlePageMove = (path: string) => () => {
    Router.push(`/profile/${path}`);
  };

  return (
    <Box
      h={"100%"}
      px={"35px"}
      pt={"48px"}
      position={"relative"}
    >
      <Text
        fontWeight={600}
        fontSize={"36px"}
        lineHeight={"34px"}
        mb={"12px"}
        color={fontBlack}
      >
        내 정보
      </Text>
      <Text
        fontWeight={500}
        fontSize={"14px"}
        lineHeight={"20px"}
        mb={"28px"}
        color={fontGray}
      >
        한국어 실력 맞춤 분석
      </Text>

      <Card h={"308px"} mb={"14px"}>
        <Text fontSize={"16px"} mb={"12px"}>
          아름님은{" "}
          <span
            style={{ color: primaryColor, fontWeight: 600 }}
          >
            병아리 단계
          </span>
          입니다.
        </Text>
        <Box
          w={"120px"}
          h={"164px"}
          background={
            "url(/images/egg.png)  -42px -21px / 169.421% 124.242% no-repeat"
          }
        />
        <Text
          textAlign={"center"}
          fontSize={"16px"}
          mt={"12px"}
        >
          한국어 듣기 능력이 훌륭해요!
          <br />
          말하기를 더 연습해 알을 키워보세요.
        </Text>
      </Card>

      <Flex gap={"14px"} mb={"14px"}>
        <Menu
          text={"오답 정리"}
          url={"/images/note.png"}
          onClick={handlePageMove("notes")}
        />
        <Menu
          text={"임무"}
          url={"/images/target.png"}
          onClick={handlePageMove("goals")}
        />
      </Flex>
      <Flex gap={"14px"}>
        <Menu
          text={"실력 분석"}
          url={"/images/performance.png"}
          onClick={handlePageMove("performance")}
        />
        <Menu
          text={"시험"}
          url={"/images/books.png"}
          onClick={handlePageMove("tests")}
        />
      </Flex>
    </Box>
  );
}

export default ProfilePage;

const Card = ({ children, ...props }: CenterProps) => {
  return (
    <Center
      flexDirection={"column"}
      w={"100%"}
      bg={"white"}
      border={"1px solid"}
      borderColor={cardStroke}
      boxShadow={cardShadow}
      borderRadius={"20px"}
      {...props}
    >
      {children}
    </Center>
  );
};

const Menu = ({
  text,
  url,
  ...rest
}: { text: string; url: string } & CenterProps) => {
  return (
    <Card h={"100px"} {...rest}>
      <Box
        w={"64px"}
        h={"64px"}
        background={`url(${url}) 50% / cover no-repeat`}
      />
      <Text
        textAlign={"center"}
        fontSize={"12px"}
        lineHeight={"20px"}
        fontWeight={600}
      >
        {text}
      </Text>
    </Card>
  );
};
