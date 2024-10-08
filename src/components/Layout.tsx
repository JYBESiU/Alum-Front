import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

import BottomNav from "./BottomNav";

export interface LayoutProps {
  children: ReactNode;
  withBottomNav?: boolean;
}

function Layout({
  children,
  withBottomNav = false,
}: LayoutProps) {
  return (
    <Flex
      h={"100vh"}
      direction={"column"}
      position={"relative"}
    >
      <Box flex={1} overflow={"hidden"}>
        {children}
      </Box>
      {withBottomNav && <BottomNav />}
    </Flex>
  );
}

export default Layout;
