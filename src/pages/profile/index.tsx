import ProfilePage from "@/components/ProfilePage";
import { Layout } from "@/components";
import { ReactNode } from "react";

function Profile() {
  return <ProfilePage />;
}

export default Profile;

Profile.getLayout = (page: ReactNode) => {
  return <Layout withBottomNav>{page}</Layout>;
};
