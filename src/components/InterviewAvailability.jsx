import React, { useContext, useState } from "react";
import FormWrapper from "./FormWrapper";
import { Search } from "lucide-react";
import Select from "react-select";
import moment from "moment-timezone";
import { FormContext } from "@/context/FromContext";

const InterviewAvailability = () => {
  const {
    int_email,
    interview_date,
    interview_time,
    interviewMedium,
    selectedTimezone,
    setSelectedTimezone,
    handleChange,
  } = useContext(FormContext);

  const timeZones = moment.tz.names().map((tz) => {
    const offset = moment.tz(tz).format("Z");
    const label = `(GMT${offset}) ${tz}`;
    return { value: tz, label };
  });

  const handleTimezoneChange = (selectedOption) => {
    setSelectedTimezone(selectedOption.value);
  };

  function filterTimeZones(option, inputValue) {
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  }


  return (
    <FormWrapper
      title={"Interview Availability "}
      description={
        "Start creating a new form with the wide options of fields available"
      }
    >
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">
          1. Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          placeholder="Example - userid@gmail.com"
          className="border border-[#8A8A8A]/40 px-4 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md"
          required
          onChange={handleChange}
          name="int_email"
          value={int_email}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">2. Location</label>
        <div className="border border-[#8A8A8A]/40 px-4 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center gap-1">
          <Search color="#C5C5C5" />
          <input
            type="text"
            placeholder="Search or enter your location"
            className=" placeholder:text-[#C3C3C3] text-base text-[#595959] h-full outline-none rounded-md"
            onChange={handleChange}
            name="location"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">3. Interview Date</label>
        <input
          type="date"
          className="border border-[#8A8A8A]/40 px-4 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md"
          name="interview_date"
          value={interview_date}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">4. Interview Time</label>
        <input
          type="time"
          className="border border-[#8A8A8A]/40 px-4 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md"
          name="interview_time"
          value={interview_time}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[#595959] text-base">5. Time Zone</label>
        <Select
          value={selectedTimezone}
          name="selectedTimezone"
          onChange={handleTimezoneChange}
          options={timeZones}
          filterOption={filterTimeZones}
          placeholder={selectedTimezone}
          defaultValue={selectedTimezone}
          isSearchable
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="interview_medium" className="text-[#595959] text-base">
          6. Interview Medium
        </label>
        <select
          id="interviewMedium"
          name="interviewMedium"
          className="border border-[#8A8A8A]/40 px-4 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md"
          value={interviewMedium}
          onChange={handleChange}
        >
          <option value="In-person">In-person</option>
          <option value="Video call">Video call</option>
          <option value="Phone call">Phone call</option>
        </select>
      </div>
    </FormWrapper>
  );
};

export default InterviewAvailability;
