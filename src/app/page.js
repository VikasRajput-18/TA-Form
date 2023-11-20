"use client";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import FormTemplateBar from "@/components/FormTemplateBar";
import Header from "@/components/Header";
import { FormContext } from "@/context/FromContext";
import { useContext } from "react";

export default function Home() {
  const { handleNext } = useContext(FormContext);

  return (
    <form
      onSubmit={handleNext}
      className="bg-[#F5F5F5] h-full  min-h-screen w-full"
    >
      {/* header  */}
      <Header />
      {/* leftbar */}
      <FormTemplateBar />
      {/* main  */}
      <Form />
      {/* footer  */}
      <Footer />
    </form>
  );
}
