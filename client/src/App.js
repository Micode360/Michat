//import { useEffect } from "react"
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/authentication/signin";
import SignUp from "./components/authentication/signup";
import ForgotPassword from "./components/authentication/forgotpassword";
import ResetPassword from "./components/authentication/resetpassword";
import ConfirmAccount from "./components/authentication/confirmaccount";
import Home from "./components/Home";



const App = () => {
  return (
    <Switch>
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path="/resetpassword/:params" component={ResetPassword} />
      <Route exact path="/confirmaccount/:params" component={ConfirmAccount} />
      <Route exact path="*" render={()=>(<h1 className="p04_error"> 404. Page Not Found</h1>)} />
    </Switch>
  );
};

export default App;
