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
      } items-start sm:items-center justify-center bg-black/40 p-2 sm:p-4 overflow-y-auto`}
    >
      <div className="absolute inset-0" onClick={handleIsOpen}></div>

      <div className="relative z-10 w-full max-w-2xl my-4 sm:my-8 rounded-lg shadow-lg bg-white max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-3 sm:px-4 py-3 sm:py-4 text-center z-10">
          <h3 className="text-sm sm:text-lg font-bold text-blue-600 uppercase mb-1 sm:mb-2">
            Demo Request Form
          </h3>
          <p className="text-xs sm:text-md text-gray-500 mx-auto w-full px-2 sm:px-4">
            Kindly fill all the required fields and we will contact you soon.
          </p>
        </div>
        <div className="px-2 sm:px-4 pb-4">
          <Form handleIsOpen={handleIsOpen} />
        </div>
      </div>
    </div>
  );
}

export default Modal;