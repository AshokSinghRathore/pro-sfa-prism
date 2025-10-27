import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  feedback: string;
  client: string;
  title: string;
  img: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  feedback,
  client,
  title,
  img,
}) => (
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
      "BizzField SFA has completely revolutionized the way we manage our sales process. The automation tools have saved us a lot of time, and the real-time analytics help us act quickly. It's a brilliant platform!",
    client: "Riya Sharma",
    title: "Sales Head",
    img: "https://img.freepik.com/free-photo/medium-shot-woman-working-as-lawyer_23-2151053997.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_items_boosted&w=740",
  },
  {
    feedback:
      "Thanks to BizzField SFA, our sales team now has full clarity on leads and follow-ups. The mobile app is incredibly convenient for field updates. Their support team is prompt and understands Indian business needs.",
    client: "Amit Rajan",
    title: "Regional Sales Manager",
    img: "https://img.freepik.com/free-photo/business-man-mobile-phone_23-2148018677.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_items_boosted&w=740",
  },
  {
    feedback:
      "Adopting BizzField SFA has been a game-changer for us. It's user-friendly, efficient, and has noticeably improved our conversion rates. Perfect fit for the Indian sales ecosystem!",
    client: "Priya Menon",
    title: "VP Sales",
    img: "https://img.freepik.com/free-photo/successful-businesswoman_23-2147704446.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_items_boosted&w=740",
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
            with our BizzField SFA. We take pride in delivering exceptional results
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
