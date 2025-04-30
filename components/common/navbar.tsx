import React from "react";
import { useNavigate } from "react-router";
import Modal from "./modal";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const navigate = useNavigate();
  return (
    <li>
      <button
        onClick={() => navigate(href || "#")}
        className="font-medium text-sm"
      >
        {children}
      </button>
    </li>
  );
}

export function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  function handleIsOpen() {
    setIsOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-0 transition-colors duration-300 lg:px-20 ${
        isScrolling ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <button
          onClick={() => navigate("/")}
          className={`text-lg flex gap-2 items-center font-bold ${
            isScrolling ? "text-gray-800" : "text-white"
          }`}
        >
          <img
            alt="logo"
            src={
              isScrolling
                ? "../image/prism-logo-light.png"
                : "../image/prism-logo-dark.png"
            }
            className="h-6 w-6"
          />
          Prism SFA
        </button>

        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/features">Features</NavItem>
          <NavItem href="/demo">Demo</NavItem>
          <NavItem href="/contact">Contact Us</NavItem>
        </ul>

        <div className="hidden gap-2 lg:flex lg:items-center">
          <a
            href="https://x.com/Code_Aspire"
            className={`text-sm ${
              isScrolling ? "text-gray-600" : "text-white"
            }`}
          >
            <i className="fab fa-twitter text-base" />
          </a>
          <a
            href="https://www.linkedin.com/company/codeaspire-consultancy-services/"
            className={`text-sm ${
              isScrolling ? "text-gray-600" : "text-white"
            }`}
          >
            <i className="fab fa-linkedin text-base" />
          </a>
          <a
            href="https://www.facebook.com/people/CodeAspire-Consultancy-Services/100070215794236/?mibextid=LQQJ4d"
            className={`text-sm ${
              isScrolling ? "text-gray-600" : "text-white"
            }`}
          >
            <i className="fab fa-facebook text-base" />
          </a>
          <button
            onClick={handleIsOpen}
            className={`ml-2 rounded-md px-4 py-2 text-sm font-medium ${
              isScrolling ? "bg-gradient text-white" : "bg-white text-gray-800"
            }`}
          >
            Request Demo
          </button>
        </div>

        <button
          type="button"
          onClick={handleOpen}
          className={`ml-auto inline-block p-2 rounded lg:hidden ${
            isScrolling ? "text-gray-800" : "text-white"
          }`}
        >
          {open ? (
            <i className="fas fa-times h-6 w-6" />
          ) : (
            <i className="fas fa-bars h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="container mx-auto mt-4 rounded-lg border-t border-gray-200 bg-white px-6 py-5 lg:hidden transition-all duration-1000 ease-in">
          <ul className="flex flex-col gap-4 text-gray-800">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/features">Features</NavItem>
            <NavItem href="/demo">Demo</NavItem>
            <NavItem href="/contact">Contact Us</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <button type="button" className="text-gray-600">
              <i className="fab fa-twitter text-base" />
            </button>
            <button type="button" className="text-gray-600">
              <i className="fab fa-facebook text-base" />
            </button>
            <button type="button" className="text-gray-600">
              <i className="fab fa-instagram text-base" />
            </button>
            <button
              onClick={handleIsOpen}
              className="ml-auto rounded-md bg-gradient px-4 py-2 text-sm font-medium text-white"
            >
              Request Demo
            </button>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      <Modal handleIsOpen={handleIsOpen} isOpen={isOpen} />
    </nav>
  );
}
