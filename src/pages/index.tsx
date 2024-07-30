import { Layout } from "@/components";
import TalkingPage from "@/components/TalkingPage";
import { ReactNode } from "react";

export default function Home() {
  return <TalkingPage />;
}

Home.getLayout = (page: ReactNode) => {
  return <Layout withBottomNav>{page}</Layout>;
};
