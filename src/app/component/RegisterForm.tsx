"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string().min(2, "Too Short!").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white font-mono">
        <h1 className="text-3xl mb-6 text-center">Sign Up</h1>

        <Formik
          initialValues={{
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form Values:", values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label>Email</label>
                <Field type="email" name="email" className="w-full p-2 mt-1 bg-gray-700 rounded" />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
              </div>

              <div>
                <label>Name</label>
                <Field type="text" name="name" className="w-full p-2 mt-1 bg-gray-700 rounded" />
                <ErrorMessage name="name" component="div" className="text-red-400 text-sm" />
              </div>

              <div>
                <label>Password</label>
                <Field type="password" name="password" className="w-full p-2 mt-1 bg-gray-700 rounded" />
                <ErrorMessage name="password" component="div" className="text-red-400 text-sm" />
              </div>

              <div>
                <label>Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full p-2 mt-1 bg-gray-700 rounded"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-400 text-sm" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>

              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-400 hover:underline">
                  Login
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
