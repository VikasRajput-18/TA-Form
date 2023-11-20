import { FormContext } from "@/context/FromContext";
import React, { useContext } from "react";

const TemplateCard = ({ title, description }) => {
  const { activeTemplate, handleReset, setActiveTemplate } =
    useContext(FormContext);

  return (
    <div
      onClick={() => {
        if (title === "New Form") {
          let confirm = window.confirm(
            "Are you sure you want to reset this form? Any unsaved changes will be lost."
          );
          if (confirm) {
            handleReset();
          }
          setActiveTemplate("Details Collection");
        } else {
          setActiveTemplate(
            title === "New Form" ? "Details Collection" : title
          );
        }
      }}
      className={`border rounded-md p-6 flex items-center justify-center gap-4 cursor-pointer shadow-md ${
        activeTemplate === title ? "border-[#1A8FE6]" : "border-[#888]"
      }`}
    >
      <div
        className={`w-[70px] h-[70px] rounded-sm ${
          activeTemplate === title ? "bg-[#1A8FE64D]" : "bg-[#D8D8D8]"
        } `}
      />
      <div className="flex-1">
        <h3 className="text-base text-black">{title}</h3>
        <p className="text-xs text-[#343434E5] mt-1">{description}</p>
      </div>
    </div>
  );
};

export default TemplateCard;
