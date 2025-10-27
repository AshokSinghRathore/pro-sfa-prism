import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

interface FAQ {
  title: string;
  desc: string;
}
const FAQS: FAQ[] = [
  {
    title: "How do I get started with BizzField SFA?",
    desc: "Getting started is simple! Just sign up on our website, set up your sales workflows, and invite your team. You'll be up and running in minutes.",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, we offer a 30-day free trial so you can explore all the features of BizzField SFA without any commitment.",
  },
  {
    title: "How can I upgrade to a paid plan?",
    desc: "To upgrade, log into your dashboard and go to the 'Billing & Plans' section. Choose the plan that fits your needs and follow the payment instructions.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    desc: "Absolutely. You can cancel your subscription anytime from the billing section. Your access will remain active until the current billing cycle ends.",
  },
  {
    title: "Does BizzField SFA work on both web and mobile?",
    desc: "Yes! BizzField SFA is available as both a web platform and a mobile app so your sales team can stay productive anywhere, anytime.",
  },
  {
    title: "What if I need help or run into issues?",
    desc: "Our support team is here for you 24/7 via live chat and email. You can also explore our Help Center for detailed guides and tutorials.",
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
            Find answers to common questions about BizzField SFA, including features, setup, security, and support. Need more help? Contact our support team anytime
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
