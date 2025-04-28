import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

interface FAQ {
  title: string;
  desc: string;
}

const FAQS: FAQ[] = [
  {
    title: "How do I get started?",
    desc: "Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, we offer a 30 days free trial so you can experience our mobile application with no commitment.",
  },
  {
    title: "How can I upgrade my account?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    desc: "Absolutely, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing cycle.",
  },
  {
    title: "How can I upgrade my account to paid?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "What if I need help or have technical issues?",
    desc: "Our dedicated support team is here to assist you. Reach out via [mention preferred support channels, e.g., live chat, email, or phone], and we'll get back to you promptly.",
  },
];

export const Faqs: React.FC = () => {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4 text-gray-800">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-500 mx-auto mb-24 lg:w-3/5">
            A lot of people don&apos;t appreciate the moment until it&apos;s passed. I&apos;m not trying my hardest, and I&apos;m not trying to do.
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <div key={title} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-500 text-xl" />
                <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
              </div>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
