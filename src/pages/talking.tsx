import TalkingPage from "@/components/TalkingPage";
import { Layout } from "@/components";
import { ReactNode } from "react";

export default function Talking() {
  return <TalkingPage />;
}

Talking.getLayout = (page: ReactNode) => {
  return (
    <Layout withBottomNav headerMode={"home"}>
      {page}
    </Layout>
  );
};
