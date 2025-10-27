import { useNavigate } from "react-router";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Demo", href: "/demo" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/prism-sfa-policy/" },
  { lebel: "Pricing", href: "/pricing" },
];
const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="mt-10 bg-gradient px-8 pt-12 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <button
              onClick={() => navigate("/")}
              className="mb-4 flex items-center gap-2 text-2xl font-semibold text-white"
            >
              <img
                alt="logo"
                src={"../image/BizzFieldLogoDark2.png"}
                className="h-10 w-20 pl-2 transform scale-450 object-contain transition-transform duration-300"
              />
              {/* BizzField SFA */}
            </button>
            <p className="mb-12 font-normal text-white sm:max-w-4xl">
              BizzField SFA enhances every stage of the sales process, making it
              easier to manage the daily tasks of sales and field teams,
              automate follow-ups, track performance, and make data-driven
              decisions.
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate(link.href)}
                    className={`py-1 font-medium text-white transition-colors hover:text-gray-300 ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <h6 className="mb-3 text-lg font-semibold text-white">
              Get the app
            </h6>
            <div className="flex flex-col gap-2">
              <a
                href={"https://apps.apple.com/in/app/prism-sfa/id6621264017"}
                className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-md transition hover:shadow-lg"
              >
                <img
                  src="../logos/logo-apple.png"
                  alt="ios"
                  className="-mt-0.5 mr-2 h-6 w-6"
                />
                App Store
              </a>
              <a
                href={
                  "https://play.google.com/store/apps/details?id=com.prismsfa.codeaspire"
                }
                className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-md transition hover:shadow-lg"
              >
                <img
                  src="../logos/logo-google.png"
                  alt="android"
                  className="-mt-0.5 mr-2 h-6 w-6"
                />
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <p className="text-center text-sm font-normal text-white opacity-75">
            &copy; {CURRENT_YEAR} Made by{" "}
            <a
              href="https://www.code-aspire.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              <span className="text-blue-400">Code</span>
              <span className="text-orange-400">Aspire</span>
            </a>
            .
          </p>

          <div className="flex gap-2">
            {/* Social Icons */}
            {[
              { icon: "fa-twitter", link: "https://x.com/Code_Aspire" },
              {
                icon: "fa-linkedin",
                link: "https://www.linkedin.com/company/codeaspire-consultancy-services/",
              },
              {
                icon: "fa-facebook",
                link: "https://www.facebook.com/people/CodeAspire-Consultancy-Services/100070215794236/?mibextid=LQQJ4d",
              },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-white hover:bg-white hover:text-gray-900 transition"
              >
                <i
                  className={`fa-brands ${social.icon} text-2xl opacity-75`}
                ></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
