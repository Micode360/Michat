//import { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import PrivateRoute from "./components/privateRoute"
import SignIn from "./signin" 
import SignUp from "./signup" 
import Home from "./components/Home"

     
const App = () => {

  
  return (
            <Switch>
                  <Route exact path="/signIn" component={SignIn}/>
                  <Route path="/signUp" component={SignUp}/>
                  <PrivateRoute path={'/'} component={Home}/>
            </Switch>
  );
}

export default App;
