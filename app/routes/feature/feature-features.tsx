import { Footer, Navbar } from "components/common";
import Banner from "components/common/banner";
import { BasicFeatures } from "components/features/BasicFeature";
import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Interactive Features - Field Sales Automation & Mobile CRM Tools | Prism SFA",
    },
    {
      name: "description",
      content:
        "Boost mobile workforce productivity with interactive field sales automation features, real-time collaboration tools, and smart mobile CRM functionality for field teams.",
    },
  ];
}

export default function FeatureFeatures() {
  return (
    <>
      <Navbar />
      <Banner
        title="Interactive Features"
        paragraph="Boost mobile workforce engagement with real-time interactions, field sales automation triggers, and dynamic collaboration tools powered by our mobile CRM for field teams."
      />
      <BasicFeatures />
      <Footer />
    </>
  );
}
