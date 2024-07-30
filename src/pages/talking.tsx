import { Layout } from "@/components";
import TalkingPage from "@/components/TalkingPage";
import { ReactNode } from "react";

export default function Talking() {
  return <TalkingPage />;
}

Talking.getLayout = (page: ReactNode) => {
  return <Layout withBottomNav>{page}</Layout>;
};
