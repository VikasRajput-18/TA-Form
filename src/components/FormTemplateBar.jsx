"use client";

import React, { useState } from "react";
import TemplateCard from "./TemplateCard";
import { templateCardsDetails } from "@/constants/constants";

const FormTemplateBar = () => {

  return (
    <div className="w-[450px] top-16 bottom-16 h-full bg-white z-10 fixed left-0 shadow-md overflow-auto p-12 custom-scrollbar">
      <TemplateCard
        title={"New Form"}
        description={
          "Start creating a new form with the wide options of fields available"
        }
      />
      <div className="mt-9">
        <p className="text-sm text-[#595959] mb-5">
          Explore the following Templates:
        </p>
        <div className="flex flex-col gap-6">
          {templateCardsDetails?.map((template) => {
            return (
              <TemplateCard
                key={template.id}
                title={template.title}
                description={template.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FormTemplateBar;
