import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthRoute from "./components/Routes/AuthRoute";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const LandingPage = lazy(() => import("./pages/index"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SendEmail = lazy(() => import("./pages/SendEmail"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const NotFound = lazy(() => import("./pages/404"))

function App() {
  return (
    <>
      <Router>
        {/* <AccessibleNavigationAnnouncer /> */}
        <Switch>
          <Route path="/home" component={LandingPage} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/send-email" component={SendEmail} />
          <Route path="/reset-password/:email" component={ResetPassword} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <AuthRoute path="/app" component={Layout}></AuthRoute>
          {/* <Route path="/app" component={Layout} /> */}

          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/home" />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
