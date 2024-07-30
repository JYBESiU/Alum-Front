import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  bottomNavBG,
  bottomNavColor,
  cardStroke,
  primaryColor,
} from "@/utils/colors";
import {
  HeadPhoneColorIcon,
  HeadPhoneIcon,
  MicColorIcon,
  MicIcon,
  UserColorIcon,
  UserIcon,
} from "@/svg";

export interface BottomNavigationProps {}

function BottomNavigation({}: BottomNavigationProps) {
  const router = useRouter();
  const { pathname, query } = router;

  const isTalkingPage = pathname.includes("/talking");
  const isListeningPage = pathname.includes("/listening");
  const isProfilePage = pathname.includes("/profile");

  const navigateTo = (path: string) => () => {
    router.push({ pathname: path, query });
  };

  return (
    <Box
      px={"55px"}
      bg={bottomNavBG}
      pt={"8px"}
      height="96px"
      borderTop={"1px solid"}
      borderColor={cardStroke}
    >
      <Flex
        h={"100%"}
        align="center"
        justify="space-between"
        position={"relative"}
      >
        <Flex
          h={"100%"}
          w={"40x"}
          flexDirection={"column"}
          align={"center"}
          gap={"6px"}
          onClick={navigateTo("/talking")}
        >
          {isTalkingPage ? <MicColorIcon /> : <MicIcon />}
          <Text
            fontWeight={500}
            fontSize={"12px"}
            color={
              isTalkingPage ? primaryColor : bottomNavColor
            }
          >
            말하기
          </Text>
        </Flex>

        <Flex
          h={"100%"}
          w={"40x"}
          flexDirection={"column"}
          align={"center"}
          gap={"6px"}
          onClick={navigateTo("/listening")}
        >
          {isListeningPage ? (
            <HeadPhoneColorIcon />
          ) : (
            <HeadPhoneIcon />
          )}
          <Text
            fontWeight={500}
            fontSize={"12px"}
            color={
              isListeningPage
                ? primaryColor
                : bottomNavColor
            }
          >
            듣기
          </Text>
        </Flex>

        <Flex
          h={"100%"}
          w={"40x"}
          flexDirection={"column"}
          align={"center"}
          gap={"6px"}
          onClick={navigateTo("/profile")}
        >
          {isProfilePage ? <UserColorIcon /> : <UserIcon />}
          <Text
            fontWeight={500}
            fontSize={"12px"}
            color={
              isProfilePage ? primaryColor : bottomNavColor
            }
          >
            내정보
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BottomNavigation;
