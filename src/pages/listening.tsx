import ListeningPage from "@/components/ListeningPage";
import { Layout } from "@/components";
import { ReactNode } from "react";

function Listening() {
  return <ListeningPage />;
}

export default Listening;

Listening.getLayout = (page: ReactNode) => {
  return <Layout withBottomNav>{page}</Layout>;
};
