import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";

import { toast } from "react-toastify";
import { UserAddOutlined } from "@ant-design/icons";

const RegisterComplete = ({ history }) => {
  //destructive history.props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    // console.log(window.location.href);
    // console.log(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and Password are required");
      return;
    } else if (password.length < 6) {
      toast.error("Password must have at least 6 characters long");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(email, window.location.href);
      if (result.user.emailVerified) {
        // remove user email from localStorage
        window.localStorage.removeItem("emailForRegistration");
        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store /later

        // redirect
        // console.log("user", user, "idTokenResult", idTokenResult);
        history.push("/");
        // console.log("Result", result);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control mt-5 pl-2" value={email} disabled />
      <input type="password" className="form-control mt-5 pl-2" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus />
      <button type="submit" className="btn btn-raised mt-5">
        Complete Registration
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>Register Complete</h3>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
