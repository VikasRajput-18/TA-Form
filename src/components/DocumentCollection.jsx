import React, { useContext } from "react";
import FormWrapper from "./FormWrapper";
import { Paperclip } from "lucide-react";
import { FormContext } from "@/context/FromContext";

const DocumentCollection = () => {
  const {
    _10th_markesheet,
    _12th_markesheet,
    graduation_markesheet,
    post_graduation_markesheet,
    offer_letter,
    salary_slips,
    bank_statement,
    increment_letter,
    others,
    handleChange,
  } = useContext(FormContext);
  return (
    <FormWrapper
      title={"Document Collection"}
      description={
        "Save time and efforts: Explore this template to find a set of questions required for document collection"
      }
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="_10th_markesheet" className="text-[#595959] text-base">
          1. 10th Marksheet <span className="text-red-600">*</span>
          <div className="border w-[200px] mt-1 border-[#8A8A8A]/40 px-3 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center justify-center gap-2">
            <Paperclip color="#C5C5C5" />
            <p className="text-sm text-[#C5C5C5] truncate">
              {_10th_markesheet?.name
                ? _10th_markesheet?.name
                : "Attach file upto 5kb"}
            </p>
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          required
          id="_10th_markesheet"
          name="_10th_markesheet"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="_12th_markesheet" className="text-[#595959] text-base">
          2. 12th Marksheet <span className="text-red-600">*</span>
          <div className="border w-[200px] mt-1 border-[#8A8A8A]/40 px-3 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center justify-center gap-2">
            <Paperclip color="#C5C5C5" />
            <p className="text-sm text-[#C5C5C5] truncate">
              {_12th_markesheet?.name
                ? _12th_markesheet?.name
                : "Attach file upto 5kb"}
            </p>
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          required
          id="_12th_markesheet"
          name="_12th_markesheet"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="graduation_markesheet"
          className="text-[#595959] text-base"
        >
          3. Graduation Marksheet <span className="text-red-600">*</span>
          <div className="border w-[200px] mt-1 border-[#8A8A8A]/40 px-3 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center justify-center gap-2">
            <Paperclip color="#C5C5C5" />
            <p className="text-sm text-[#C5C5C5] truncate">
              {graduation_markesheet?.name
                ? graduation_markesheet?.name
                : "Attach file upto 5kb"}
            </p>
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          required
          id="graduation_markesheet"
          name="graduation_markesheet"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="post_graduation_markesheet"
          className="text-[#595959] text-base"
        >
          4. Post Graduation Marksheet
          <div className="border w-[200px] mt-1 border-[#8A8A8A]/40 px-3 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center justify-center gap-2">
            <Paperclip color="#C5C5C5" />
            <p className="text-sm text-[#C5C5C5] truncate">
              {post_graduation_markesheet?.name
                ? post_graduation_markesheet?.name
                : "Attach file upto 5kb"}
            </p>
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          id="post_graduation_markesheet"
          name="post_graduation_markesheet"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="offer_letter" className="text-[#595959] text-base">
          5. Offer letter <span className="text-red-600">*</span>
          <div className="border w-[200px] mt-1 border-[#8A8A8A]/40 px-3 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center justify-center gap-2">
            <Paperclip color="#C5C5C5" />
            <p className="text-sm text-[#C5C5C5] truncate">
              {offer_letter?.name ? offer_letter?.name : "Attach file upto 5kb"}
            </p>
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          id="offer_letter"
          required
          name="offer_letter"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="salary_slips" className="text-[#595959] text-base">
          6. Salary Slips <span className="text-red-600">*</span>
          <div className="border w-[200px] mt-1 border-[#8A8A8A]/40 px-3 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center justify-center gap-2">
            <Paperclip color="#C5C5C5" />
            <p className="text-sm text-[#C5C5C5] truncate">
              {salary_slips?.name ? salary_slips?.name : "Attach file upto 5kb"}
            </p>
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          id="salary_slips"
          required
          name="salary_slips"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="bank_statement" className="text-[#595959] text-base">
          7. Bank Statement <span className="text-red-600">*</span>
          <div className="border w-[200px] mt-1 border-[#8A8A8A]/40 px-3 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center justify-center gap-2">
            <Paperclip color="#C5C5C5" />
            <p className="text-sm text-[#C5C5C5] truncate">
              {bank_statement?.name
                ? bank_statement?.name
                : "Attach file upto 5kb"}
            </p>
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          id="bank_statement"
          required
          name="bank_statement"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="increment_letter" className="text-[#595959] text-base">
          8. Increment Letter (if any)
          <div className="border w-[200px] mt-1 border-[#8A8A8A]/40 px-3 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center justify-center gap-2">
            <Paperclip color="#C5C5C5" />
            <p className="text-sm text-[#C5C5C5] truncate">
              {increment_letter?.name
                ? increment_letter?.name
                : "Attach file upto 5kb"}
            </p>
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          id="increment_letter"
          name="increment_letter"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="others" className="text-[#595959] text-base">
          9. Others (if any)
          <div className="border w-[200px] mt-1 border-[#8A8A8A]/40 px-3 placeholder:text-[#C3C3C3] text-base text-[#595959] h-10 outline-none rounded-md flex items-center justify-center gap-2">
            <Paperclip color="#C5C5C5" />
            <p className="text-sm text-[#C5C5C5] truncate">
              {others?.name ? others?.name : "Attach file upto 5kb"}
            </p>
          </div>
        </label>
        <input
          type="file"
          className="hidden"
          id="others"
          name="others"
          onChange={handleChange}
        />
      </div>
    </FormWrapper>
  );
};

export default DocumentCollection;
