"use client";

import { FormContext } from "@/context/FromContext";
import React, { useContext } from "react";

const Footer = () => {
  const { handleNext, activeTemplate , handleSubmit } = useContext(FormContext);
  return (
    <footer className="h-16 flex items-center px-8 justify-end fixed bottom-0 w-full bg-white shadow-top z-10">
      {activeTemplate === "Interview Availability" ? (
        <button
          type={"submit"}
          className="bg-[#1A8FE6] text-white px-8 py-2 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out"
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : (
        <button
          type={"button"}
          className="bg-[#1A8FE6] text-white px-8 py-2 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out"
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </footer>
  );
};

export default Footer;
