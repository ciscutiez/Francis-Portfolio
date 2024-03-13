"use client";
import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { Form, Formik } from "formik";
import * as Yup from "yup";

type ContactValue = {
  fullname: string;
  email: string;
  message: string;
};

const initialValues: ContactValue = { fullname: "", email: "", message: "" };

const ContactForm = () => {
  const FormSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "Too short")
      .required("Your Full Name is Required"),
    email: Yup.string()
      .email("Invalid email format.")
      .max(30)
      .required("Your Email is required"),
    message: Yup.string()
      .min(10, "Your Message is to short")
      .max(80, "Your message is too long")
      .required("Your Message is required"),
  });
  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log(values);

    resetForm();
  };
  return (
    <Formik
      className=" flex flex-col items-center justify-center pt-[15px]"
      validationSchema={FormSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="flex items-center justify-center flex-col">
        <Input label="Full Name" placeholder="Full Name" name="fullname" />
        <Input
          label="Email"
          placeholder="francischarlesi.gonzales@gmail.com"
          name="email"
        />
        <Textarea name="message" label="Message" />
        <div className="flex items-center justify-center py-[15px]">
          <button
            type="submit"
            className="w-[200px] rounded-full bg-[#51514f] py-[10px] shadow-md"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
