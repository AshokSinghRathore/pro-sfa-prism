import { Navbar } from "components/common";
import { Footer } from "components/common/footer";
import Banner from "components/common/banner";
import ContactForm from "components/contact/contactForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Banner
        title="Contact Us"
        paragraph="Contact us for any related queries, we will be happy to assist you"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
