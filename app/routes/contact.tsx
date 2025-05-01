import { Navbar } from "components/common";
import { Footer } from "components/common/footer";
import Banner from "components/common/banner";
import ContactForm from "components/contact/contactForm";
import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Contact Us - Prism SFA | Field Force Management & Mobile CRM Support",
    },
    {
      name: "description",
      content:
        "Reach out to Prism SFA for support and inquiries about our field force management software, field sales automation, mobile CRM for field teams, and pharma sales order solutions.",
    },
  ];
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <Banner
        title="Contact Us"
        paragraph="Have questions about our field force management software or mobile CRM? Contact us for assistance with field sales automation, MR reporting, and pharma order management solutions."
      />
      <ContactForm />
      <Footer />
    </>
  );
}
