import { Navbar } from "components/common";
import Banner from "components/common/banner";
import { Footer } from "components/common/footer";
import DemoForm from "components/demo/demoForm";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Prism SFA - Sales Force Automation Software" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Demo() {
  return (
    <>
      <Navbar />
      <Banner title="Demo Request" paragraph="Kindly Raise a request for demo and we will be happy to assist you" />
      <DemoForm />
      <Footer />
    </>
  );
}
