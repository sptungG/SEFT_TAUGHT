import React, { useState } from "react";
import { auth } from "../../firebase";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(`Email is send to ${email}. Click the link to complete your registration.`);
    // Save email to local storage
    window.localStorage.setItem("EmailForRegistration", email);
    // clear State
    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control mt-5" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
      <button type="submit" className="btn btn-raised mt-4">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>Register</h3>
          <ToastContainer />
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
