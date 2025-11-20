import React, { Children } from "react";

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800/75 backdrop flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button
          onClick={() => setIsModelOpen(false)}
          className="absolute top-4 right-4 text-gray-300 text-4xl hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
