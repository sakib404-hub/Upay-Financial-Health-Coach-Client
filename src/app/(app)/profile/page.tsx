import { Metadata } from "next";
import { ProfileWorkspace } from "./_components/profile-workspace";

export const metadata: Metadata = {
  title: "Profile & Privacy | Upay Financial Coach",
  description: "Manage your personal identity, connected MFS accounts, and cryptographic security settings.",
};

export default function ProfilePage() {
  return <ProfileWorkspace />;
}
