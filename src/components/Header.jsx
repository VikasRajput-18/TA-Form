import React from "react";
import { Check, X } from "lucide-react";
import { headerItems } from "@/constants/constants";

const Header = () => {
  return (
    <header className="h-[68px] fixed top-0 w-full shadow-md flex items-center  bg-white justify-center z-20">
      <X color="#343434E5" className="absolute right-8 cursor-pointer" />
      <div className="flex items-center gap-3">
        {headerItems.map((item) => {
          return (
            <div key={item.id} className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full ${
                  item.title === "Form Selection"
                    ? "bg-[#1A8FE6]"
                    : "border border-[#D8D8D8]"
                }`}
              >
                <Check color={item.title === "Form Selection" ? "white" : ""} />
              </div>
              <p>{item.title}</p>
              {item.title !== "Review" && (
                <div className="w-[130px] h-[2px] bg-[#C3C3C3]" />
              )}
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
