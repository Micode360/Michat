//import { useEffect } from "react"
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from "./components/privateRoute"
import SignIn from "./components/authentication/signin";
import SignUp from "./components/authentication/signup";
import ForgotPassword from "./components/authentication/forgotpassword";
import NewPassword from "./components/authentication/newpassword";
import Home from "./components/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/newpassword" component={NewPassword} />
      <Route path="/" component={Home} />
      {/*<PrivateRoute path={'/'} component={}/>*/}
    </Switch>
  );
};

export default App;
