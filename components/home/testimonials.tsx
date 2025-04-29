import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  feedback: string;
  client: string;
  title: string;
  img: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ feedback, client, title, img }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img
      src={img}
      alt={client}
      width={50}
      height={50}
      className="rounded-full mx-auto mb-4"
    />
    <p className="text-lg text-gray-600 italic mb-4">"{feedback}"</p>
    <h4 className="text-xl font-semibold text-gray-800">{client}</h4>
    <p className="text-sm text-gray-500">{title}</p>
  </div>
);

const TESTIMONIALS = [
  {
    feedback:
      "Prism SFA completely transformed how we manage our sales pipeline. The automation features have saved us countless hours, and the real-time insights help us make faster decisions. Highly recommend it!",
    client: "Jessica Devis",
    title: "Sales Director @ Marketing Digital Ltd.",
    img: "../image/avatar1.jpg",
  },
  {
    feedback:
      "With Prism SFA, our team now has complete visibility over leads and follow-ups. The mobile app is a game-changer for on-the-go updates. Their support team is responsive and truly understands customer needs.",
    client: "Mary Joshiash",
    title: "Head of Sales Operations @ Apple Inc.",
    img: "../image/avatar2.jpg",
  },
  {
    feedback:
      "Implementing Prism SFA was one of the best decisions for our sales department. It's intuitive, powerful, and has helped us boost conversions significantly. A must-have tool for modern sales teams!",
    client: "Marcell Glock",
    title: "CFO @ Apple Inc.",
    img: "../image/avatar3.jpg",
  },
];


export const Testimonials: React.FC = () => {
  return (
    <section className="px-10 py-20">
      <div className="container mx-auto lg:max-w-7xl">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-blue-gray-800 mb-2">
            What Clients Say
          </h2>
          <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl">
            Discover what our valued clients have to say about their experiences
            with our Prism SFA. We take pride in delivering exceptional results
            and fostering lasting partnerships.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
