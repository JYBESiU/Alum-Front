import {
  Box,
  Button,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { bottomNavBG, primaryColor } from "@/utils/colors";

export interface BottomNavigationProps {}

function BottomNavigation({}: BottomNavigationProps) {
  const router = useRouter();
  const { pathname, query } = router;

  const isTalkingPage = pathname.includes("/");
  const isListeningPage = pathname.includes("/listening");

  const navigateTo = (path: string) => () => {
    router.push({ pathname: path, query });
  };

  return (
    <Box
      px={"55px"}
      bg={bottomNavBG}
      pt={"8px"}
      height="96px"
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
          onClick={navigateTo("/")}
        >
          <Text fontSize={"12px"} color={primaryColor}>
            말하기
          </Text>
        </Flex>

        <Flex
          h={"100%"}
          w={"40x"}
          flexDirection={"column"}
          align={"center"}
          onClick={navigateTo("/listening")}
        >
          <Text fontSize={"12px"} color={primaryColor}>
            듣기
          </Text>
        </Flex>

        <Flex
          h={"100%"}
          w={"40x"}
          flexDirection={"column"}
          align={"center"}
          onClick={navigateTo("/profile")}
        >
          <Text fontSize={"12px"} color={primaryColor}>
            내정보
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BottomNavigation;
