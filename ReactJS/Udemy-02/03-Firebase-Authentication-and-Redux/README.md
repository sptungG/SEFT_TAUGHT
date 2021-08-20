# 13. Firebase Setup

Setup:
**[firebase.google.com/setup](https://firebase.google.com/docs/web/setup)**

Auth:
**[firebase.google.com/auth](https://firebase.google.com/docs/auth/web/email-link-auth)**

Notification:
**[npmjs.com/package/react-toastify](https://www.npmjs.com/package/react-toastify)**

```js
// firebase.js
// import * as firebase from "firebase/app"; // old way, wont work anymore

import firebase from "firebase/app";
import "firebase/auth";

// firebase config
const config = {
  apiKey: "AIzaSyCIOMjE6W2NqzqynRHUV64Vgx87lvlAwgY",
  authDomain: "ecommerce-01-c4336.firebaseapp.com",
  projectId: "ecommerce-01-c4336",
  storageBucket: "ecommerce-01-c4336.appspot.com",
  messagingSenderId: "755436155092",
  appId: "1:755436155092:web:c182bae47fc755a3070b41",
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/*
UPDATE on Firebase Import
A new version of firebase (version 8) has bee released and with the newer version,
there is a slight difference on how to import firebase and use in your react app.

In the next lesson, if you come across any firebase import error, use the code below. 
This is the standard way to import firebase with newer version
*/
```

# 14. Register Form

```js
// Register.js
import React, { useState } from "react";
import { auth } from "../../firebase";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    //
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
```

# 15. Email Link to Signin

```js
import React, { useState } from "react";
import { auth } from "../../firebase";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  // ***
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
```

# 16. ENV and Toast Notifications

```env
<!-- .env -->
REACT_APP_REGISTER_REDIRECT_URL='http://localhost:3000/register/complete'
```

```js
//Register.js
import React, { useState } from "react";
import { auth } from "../../firebase";

import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ENV --> ", process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
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
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
```

```js
// App.js
import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
```

# 17. Complete Registration Page

```js
// RegisterComplete.js
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
```

# 18. Complete Registration

```js
// RegisterComplete.js
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
```

# 19. Setup Redux

`npm i redux react-redux redux-devtools-extension`

# 20. User in Redux State

# 21. User Logout

# 22. Login Page

# 23. Signin with Email and Password

# 24. Login with Google

# 25. Conditional Rendering

# 26. Forgot Password

# 27. Redirect logged in user
