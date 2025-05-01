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
      <div className="container mx-auto py-2 bg-white text-center">
        <h3 className="text-lg font-bold text-blue-600 uppercase mb-2">
          Demo Request Form
        </h3>
        <p className="text-md text-gray-500 mx-auto w-full px-4 lg:w-11/12 lg:px-8">
          Kindly fill all the required fields and we will contact you soon.
        </p>
      </div>
        <Form handleIsOpen={handleIsOpen} />
      </div>
    </div>
  );
}

export default Modal;
