import { Layout } from "@/components";
import { ReactNode } from "react";
import NotesPage from "@/components/NotesPage";

function Notes() {
  return <NotesPage />;
}

export default Notes;

Notes.getLayout = (page: ReactNode) => {
  return <Layout withBottomNav>{page}</Layout>;
};
