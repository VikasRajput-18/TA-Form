import React, { useContext } from "react";
import FormWrapper from "./FormWrapper";
import { FormContext } from "@/context/FromContext";

const StatementOfPurpose = () => {
  const { sop_1, sop_2, sop_3, handleChange } = useContext(FormContext);

  return (
    <FormWrapper
      title={"Statement of Purpose"}
      description={
        "Start creating a new form with the wide options of fields available"
      }
    >
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">
          1. Tell me about a time you were asked to do something you had never
          done before. How did you react? What did you learn?
        </label>
        <textarea
          placeholder="Enter a description for the long answer"
          className="border border-[#8A8A8A]/40 px-4 py-1 placeholder:text-[#C3C3C3] text-base text-[#595959] h-[68px] outline-none rounded-md"
          onChange={handleChange}
          maxLength={300}
          name="sop_1"
          value={sop_1}
        />
        <p className="text-[10px] text-[#8A8A8A] text-end">300 word limit</p>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">
          2. Tell me about a time you were asked to do something you had never
          done before. How did you react? What did you learn?
        </label>
        <textarea
          placeholder="Enter a description for the long answer"
          className="border border-[#8A8A8A]/40 px-4 py-1 placeholder:text-[#C3C3C3] text-base text-[#595959] h-[68px] outline-none rounded-md"
          onChange={handleChange}
          name="sop_2"
          maxLength={300}
          value={sop_2}
        />
        <p className="text-[10px] text-[#8A8A8A] text-end">300 word limit</p>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">
          3. What are the three things that are most important to you in a job?
        </label>
        <textarea
          placeholder="Enter a description for the long answer"
          className="border border-[#8A8A8A]/40 px-4 py-1 placeholder:text-[#C3C3C3] text-base text-[#595959] h-[68px] outline-none rounded-md"
          onChange={handleChange}
          name="sop_3"
          maxLength={300}
          value={sop_3}
        />
        <p className="text-[10px] text-[#8A8A8A] text-end">300 word limit</p>
      </div>
    </FormWrapper>
  );
};

export default StatementOfPurpose;
