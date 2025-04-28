import React from "react";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        className="font-medium text-sm"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
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
        <a
          href="https://www.material-tailwind.com"
          target="_blank"
          className={`text-lg font-bold ${
            isScrolling ? "text-gray-800" : "text-white"
          }`}
        >
          Prism SFA
        </a>

        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>Features</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem>
            Demo
          </NavItem>
        </ul>

        <div className="hidden gap-2 lg:flex lg:items-center">
          <button
            type="button"
            className={`text-sm ${isScrolling ? "text-gray-600" : "text-white"}`}
          >
            <i className="fab fa-twitter text-base" />
          </button>
          <button
            type="button"
            className={`text-sm ${isScrolling ? "text-gray-600" : "text-white"}`}
          >
            <i className="fab fa-facebook text-base" />
          </button>
          <button
            type="button"
            className={`text-sm ${isScrolling ? "text-gray-600" : "text-white"}`}
          >
            <i className="fab fa-instagram text-base" />
          </button>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <button
              className={`ml-2 rounded-md px-4 py-2 text-sm font-medium ${
                isScrolling
                  ? "bg-gradient text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Request Demo
            </button>
          </a>
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
            <NavItem>Home</NavItem>
            <NavItem>Features</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Demo
            </NavItem>
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
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <button className="ml-auto rounded-md bg-gradient px-4 py-2 text-sm font-medium text-white">
                Request Demo
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
