import TalkingPage from "@/components/TalkingPage";
import { Layout } from "@/components";
import { ReactNode } from "react";

export default function Home() {
  return <TalkingPage />;
}

Home.getLayout = (page: ReactNode) => {
  return (
    <Layout withBottomNav headerMode={"home"}>
      {page}
    </Layout>
  );
};
