import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SignIn from "./signin" 

const App = () => {
  return (
      <Router>
            <Switch>
                  <Route exact path="/signIn" component={SignIn}/>
            </Switch>
      </Router>
  );
}

export default App;
