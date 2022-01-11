import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

//routes
import DashboardLayout from "./components/DashboardLayout.js";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Loader } from "./components/loader";

const SigninForm = React.lazy(() =>
  import("./components/Authentication/SigninForm")
);
const SignUpForm = React.lazy(() =>
  import("./components/Authentication/SignUpForm")
);
const ForgetPassword = React.lazy(() =>
  import("./components/Authentication/forgetpassword")
);
const Activate = React.lazy(() =>
  import("./components/Authentication/accountActivation")
);
const PasswordVerify = React.lazy(() =>
  import("./components/Authentication/resetPassword")
);
const PasswordChangedMsg = React.lazy(() =>
  import("./components/Authentication/passSuccessChanged")
);

export function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
      />
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact
              path="/signin"
              name="signin Page"
              component={SigninForm}
            />
            <Route
              exact
              path="/signup"
              name="signup Page"
              component={SignUpForm}
            />
            <Route
              exact
              path="/forget-password"
              name="forgetpassword Page"
              component={ForgetPassword}
            />
            <Route
              exact
              path="/account-verification/:token"
              name="account activate page"
              component={Activate}
            />
            <Route
              exact
              path="/forgot-password/verify/:token"
              name="password changing Page"
              component={PasswordVerify}
            />
            <Route
              exact
              path="/password-changed-successfully"
              name="success msg Page"
              component={PasswordChangedMsg}
            />
            <Route
              path="/"
              name="dashboard"
              component={(props) => <DashboardLayout {...props} />}
            />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}
