"use client";
import React, { useContext, useState } from "react";
import FormWrapper from "./FormWrapper";
import { FormContext } from "@/context/FromContext";
import DetailsCollection from "./DetailsCollection";
import DocumentCollection from "./DocumentCollection";
import StatementOfPurpose from "./StatementOfPurpose";
import InterviewAvailability from "./InterviewAvailability";

const Form = () => {
  const { activeTemplate } = useContext(FormContext);

  return (
    <section className="pl-[450px] py-12 my-16 overflow-auto h-full flex items-center justify-center flex-col gap-2 mx-auto w-full ">
      <div className="w-[85%] ">
        <h2 className="text-[#414141] text-xl">Preview</h2>
        <p className="text-base text-[#414141]">
          You will be able to customize the fields in the later stage
        </p>
        {/* details collection  */}
        {activeTemplate === "Details Collection" && <DetailsCollection />}
        {activeTemplate === "Document Collection" && <DocumentCollection />}
        {activeTemplate === "Statement of Purpose" && <StatementOfPurpose />}
        {activeTemplate === "Interview Availability" && (
          <InterviewAvailability />
        )}
      </div>
    </section>
  );
};

export default Form;
