"use client";
import React from "react";
import config from "@config/config.json";
import signIn from "../firebase/auth/signin";
import { useRouter } from "next/navigation";

const SignIn = ({ data }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await signIn(email, password);
    if (error) {
      return console.log(error);
    }
    // else successful
    console.log(result);
    return router.push("/subscription");
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <form
              onSubmit={handleForm}
              action={config.params.contact_form_action}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6 text-light">Sign In To Your Account</h2>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="E-mail Address"
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="form-input w-full"
                  name="password"
                  placeholder="Password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-primary block w-full ">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
