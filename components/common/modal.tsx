import { useEffect } from "react";
import ContactForm from "components/contact/contactForm";

export function Modal({
  isOpen,
  handleIsOpen,
}: {
  isOpen: boolean;
  handleIsOpen: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center bg-black/40`}
    >
      {/* Modal backdrop click closes modal */}
      <div className="absolute inset-0" onClick={handleIsOpen}></div>

      <div className="relative z-10 w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
        <ContactForm />
      </div>
    </div>
  );
}

export default Modal;
