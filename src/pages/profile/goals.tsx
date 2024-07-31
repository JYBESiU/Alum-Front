import { Layout } from "@/components";
import { ReactNode } from "react";
import GoalsPage from "@/components/GoalsPage";

function Goals() {
  return <GoalsPage />;
}

export default Goals;

Goals.getLayout = (page: ReactNode) => {
  return <Layout withBottomNav>{page}</Layout>;
};
