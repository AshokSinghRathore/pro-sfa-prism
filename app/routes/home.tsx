import { Navbar } from "components/common/navbar";
import type { Route } from "./+types/home";
import Hero from "components/home/hero";
import VideoIntro from "components/home/video-intro";
import MobileConvenience from "components/home/mobile-convenience";
import Testimonials from "components/home/testimonials";
import { Faqs, Features } from "components/home";
import { Footer } from "components/common/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Prism SFA - Sales Force Automation Software" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Features />
      <MobileConvenience />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
