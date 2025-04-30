import { useEffect } from "react";
import { Form } from "components/demo/demoForm";

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
      <div className="absolute inset-0" onClick={handleIsOpen}></div>

      <div className="relative z-10 w-full max-w-xl rounded-lg shadow-lg overflow-hidden">
        <Form handleIsOpen={handleIsOpen} />
      </div>
    </div>
  );
}

export default Modal;
