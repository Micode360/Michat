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
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path="/newpassword" component={NewPassword} />
      <Route exact path="*" render={()=>"<h1> 404. Page Not Found</h1>"} />
    </Switch>
  );
};

export default App;
