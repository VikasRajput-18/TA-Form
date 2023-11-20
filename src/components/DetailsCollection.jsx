import React, { useContext } from "react";
import FormWrapper from "./FormWrapper";
import { FormContext } from "@/context/FromContext";

const DetailsCollection = () => {
  const { name, email, date_of_birth, phone_number, handleChange } =
    useContext(FormContext);
  return (
    <FormWrapper
      title={"Details Collection"}
      description={
        "Collect information from Candidates on their education, work experience, contact no,etc"
      }
    >
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">
          1. Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter a name"
          className="border border-[#8A8A8A]/40 px-4 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md"
          required
          value={name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">
          2. Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          placeholder="Example - userid@gmail.com"
          className="border border-[#8A8A8A]/40 px-4 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md"
          required
          value={email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">3. Date of Birth</label>
        <input
          type="date"
          className="border border-[#8A8A8A]/40 px-4 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md"
          value={date_of_birth}
          onChange={handleChange}
          name="date_of_birth"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">4. Contact no</label>
        <input
          type="number"
          placeholder="Enter your 10 digit contact no"
          className="border border-[#8A8A8A]/40 px-4 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md"
          value={phone_number}
          onChange={handleChange}
          name="phone_number"
        />
      </div>
    </FormWrapper>
  );
};

export default DetailsCollection;
