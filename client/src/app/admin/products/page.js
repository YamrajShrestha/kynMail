"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import "../../css/form.css";
import Link from "next/link";
import { message } from "antd";

const SignupSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  brand: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
});

const ValidationSchemaExample = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleProduct = async (values) => {
    const res = await fetch("http://localhost:4000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    messageApi.open({
      type: res.status == 200 ? "success" : "error",
      content: data.msg,
    });
    console.log(res);
  };

  return (
    <div className="con">
      <Image
        src="/logo.png"
        width={200}
        height={100}
        alt="Picture of the author"
        className="img"
      />
      <h2>Create New Products Here...</h2>
      <Formik
        initialValues={{
          productName: "",
          brand: "",
          category: "",
          price: "",
          description: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          handleProduct(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {contextHolder}
            <Field
              className="input"
              name="productName"
              placeholder="Product name"
            />
            {errors.productName && touched.productName ? (
              <div>{errors.productName}</div>
            ) : null}
            <Field className="input" name="brand" placeholder="Brand name" />
            {errors.brand && touched.brand ? <div>{errors.brand}</div> : null}
            <Field
              className="input"
              name="category"
              placeholder="Product category"
            />
            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}
            <Field className="input" name="price" placeholder="Net price" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <Field
              className="input"
              name="description"
              placeholder="Description"
            />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            Go to <Link href="/">HOME</Link>
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ValidationSchemaExample;
