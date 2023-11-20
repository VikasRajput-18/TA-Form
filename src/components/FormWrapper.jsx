import React from "react";

const FormWrapper = ({ title, description, children }) => {
  return (
    <div className="h-full rounded-lg shadow-lg w-full mx-auto mt-5">
      <div className="p-9 bg-[#1A8FE626]">
        <h2 className="text-xl text-[#414141] font-semibold">{title}</h2>
        <p className="text-xs text-[#595959] mt-1">{description}</p>

        <p className="text-xs text-[#888888] mt-6">
          Provide the following information to process your application
        </p>
      </div>
      <div className="py-16  bg-white">
        <div className="max-w-3xl w-full mx-auto flex flex-col gap-8 px-8">{children}</div>
      </div>
    </div>
  );
};

export default FormWrapper;
