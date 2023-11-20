"use client";
import { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

let templates = [
  "Details Collection",
  "Document Collection",
  "Statement of Purpose",
  "Interview Availability",
];

const defaultTimezone = "Search or Select a time zone from below ";

const FormContextProvider = ({ children }) => {
  const [activeTemplate, setActiveTemplate] = useState("Details Collection");
  const [selectedTimezone, setSelectedTimezone] = useState(defaultTimezone);

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    date_of_birth: "",
    phone_number: "",

    _10th_markesheet: null,
    _12th_markesheet: null,
    graduation_markesheet: null,
    post_graduation_markesheet: null,
    offer_letter: null,
    salary_slips: null,
    bank_statement: null,
    increment_letter: null,
    others: null,

    sop_1: "",
    sop_2: "",
    sop_3: "",

    int_email: "",
    interview_date: "",
    interview_time: "",
    interviewMedium: "",
  });

  const handleReset = () => {
    setFormDetails({
      name: "",
      email: "",
      date_of_birth: "",
      phone_number: "",

      _10th_markesheet: null,
      _12th_markesheet: null,
      graduation_markesheet: null,
      post_graduation_markesheet: null,
      offer_letter: null,
      salary_slips: null,
      bank_statement: null,
      increment_letter: null,
      others: null,

      sop_1: "",
      sop_2: "",
      sop_3: "",

      int_email: "",
      interview_date: "",
      interview_time: "",
      interviewMedium: "",
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    const currentIndex = templates.indexOf(activeTemplate);
    const nextIndex = (currentIndex + 1) % templates.length;
    setActiveTemplate(templates[nextIndex]);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormDetails((prev) => {
      const newState = { ...prev };
      if (files) {
        newState[name] = files[0] || null;
      } else {
        newState[name] = value;
      }

      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formDetailsWithTimeZone = { ...formDetails, selectedTimezone };

    if (
      formDetailsWithTimeZone.name !== "" &&
      formDetailsWithTimeZone.email !== "" &&
      formDetailsWithTimeZone._10th_markesheet !== null &&
      formDetailsWithTimeZone._12th_markesheet !== null &&
      formDetailsWithTimeZone.graduation_markesheet !== null &&
      formDetailsWithTimeZone.offer_letter !== null &&
      formDetailsWithTimeZone.salary_slips !== null &&
      formDetailsWithTimeZone.bank_statement !== null &&
      formDetailsWithTimeZone.int_email !== ""
    ) {
      alert(
        `Form Submitted Successfully || Details: ${JSON.stringify(
          formDetailsWithTimeZone
        )}`
      );
      console.log(formDetailsWithTimeZone);
      handleReset();
    } else {
      return alert("Please fill in all the required fields (*)");
    }
  };

  return (
    <FormContext.Provider
      value={{
        activeTemplate,
        setActiveTemplate,
        handleNext,
        ...formDetails,
        handleChange,
        handleSubmit,
        selectedTimezone,
        setSelectedTimezone,
        handleReset,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
