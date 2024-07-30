import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { BackArrowIcon } from "@/svg";

export interface BackButtonProps {}

function BackButton({}: BackButtonProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Flex
      position={"absolute"}
      w={"24px"}
      h={"24px"}
      align={"center"}
      justify={"center"}
      left={"10px"}
      onClick={handleBackClick}
    >
      <BackArrowIcon />
    </Flex>
  );
}

export default BackButton;
