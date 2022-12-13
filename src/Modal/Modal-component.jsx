import React, { useState, useRef } from "react";

const Modal = () => {
  // useState hook to manage the modal's open/closed state
  const [isOpen, setIsOpen] = useState(false);

  // useRef hook to access the trigger button's position and size
  const buttonRef = useRef();

  // click event handler for the modal's trigger button
  const handleOpen = () => {
    setIsOpen(true);
  };

  // click event handler for the modal's close button
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* trigger button for opening the modal */}
      <button
        ref={buttonRef}
        onClick={handleOpen}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>

      {/* modal window, positioned relative to the trigger button */}
      {isOpen && (
        <div
          className="absolute bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          style={{
            top: buttonRef.current.offsetTop + buttonRef.current.offsetHeight,
            left: buttonRef.current.offsetLeft,
          }}
        >
          <h1>Modal Title</h1>
          <p>Modal content goes here...</p>
          <button
            onClick={handleClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close Modal
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;

// In this updated version of the Modal component, the modal window that is not positioned relative to the trigger button's position has been removed. The Modal component now only includes the modal window that uses the offsetTop, offsetLeft, and offsetHeight properties to position the modal relative to the trigger button's position. This is an example of how to remove the modal window that is not rendered relative to the trigger button's position.
