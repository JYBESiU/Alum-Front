import { Layout } from "@/components";
import { ReactNode } from "react";
import TestsPage from "@/components/TestsPage";

function Tests() {
  return <TestsPage />;
}

export default Tests;

Tests.getLayout = (page: ReactNode) => {
  return <Layout withBottomNav>{page}</Layout>;
};
