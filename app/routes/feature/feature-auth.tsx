import { Footer, Navbar } from "components/common";
import Banner from "components/common/banner";
import AuthenticationFeature from "components/features/Authentication";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Secure Authentication - Mobile CRM & Field Force Access Control | Prism SFA",
    },
    {
      name: "description",
      content:
        "Ensure secure access to your field force management software with multi-factor authentication, encrypted login, and secure mobile CRM access for field teams.",
    },
  ];
}


export default function FeatureAuth() {
  return (
    <>
      <Navbar />
      <Banner
  title="Secure Authentication System"
  paragraph="Enable secure access to field staff management tools and mobile CRM with advanced authentication, multi-factor verification, and encrypted protection for your field force data."
/>

      <AuthenticationFeature />
      <Footer />
    </>
  );
}
