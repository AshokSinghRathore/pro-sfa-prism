import { Footer, Navbar } from "components/common";
import Banner from "components/common/banner";
import MasterControlsFeatures from "components/features/Masters";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Master Controls - Field Staff Management & Territory Setup | Prism SFA",
    },
    {
      name: "description",
      content:
        "Easily manage field staff, define territories, configure sales routes, and control operations using centralized field force management tools and mobile CRM settings.",
    },
  ];
}


export default function FeatureMaster() {
  return (
    <>
      <Navbar />
      <Banner
  title="Master Controls"
  paragraph="Gain centralized control over field staff management, route optimization, and territory setup with BizzField SFA’s field operations software and mobile workforce tools."
/>
      <MasterControlsFeatures />
      <Footer />
    </>
  );
}
