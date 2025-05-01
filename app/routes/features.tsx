import { Navbar } from "components/common";
import Banner from "components/common/banner";
import { Footer } from "components/common/footer";
import { Feature } from "components/home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Prism SFA Features - Field Force Management & Sales Automation Software",
    },
    {
      name: "description",
      content:
        "Explore the powerful features of Prism SFA including field service management, mobile CRM for field teams, route optimization, MR sales reporting, and real-time pharma sales tracking.",
    },
  ];
}

export default function Features() {
  return (
    <>
      <Navbar />
      <Banner
        title="Features"
        paragraph="Discover powerful features of Prism SFA like field force management software, field sales automation, route optimization, mobile CRM for field teams, and real-time sales reporting tools."
      />
      <Feature />
      <Footer />
    </>
  );
}
