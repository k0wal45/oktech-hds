import React from "react";
import Form from "./Form";
import Description from "./Description";

const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-20">
      <Description />
      <Form />
    </section>
  );
};

export default Contact;
