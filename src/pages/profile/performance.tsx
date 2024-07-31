import { Layout } from "@/components";
import { ReactNode } from "react";
import PerformancePage from "@/components/PerformancePage";

function Performance() {
  return <PerformancePage />;
}

export default Performance;

Performance.getLayout = (page: ReactNode) => {
  return <Layout withBottomNav>{page}</Layout>;
};
