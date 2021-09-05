import { useEffect } from "react"
import { Switch, Route, useHistory} from "react-router-dom"
import SignIn from "./signin" 
import SignUp from "./signup" 
import Home from "./components/Home"


const App = () => {
      let history = useHistory();
      
      useEffect(() =>{
            let userStr = localStorage.getItem('payload');
            let userObj = JSON.parse(userStr);
            if(!userObj) {
                  history.push('/signIn')
            }else history.push('/',{
                  email: userObj.email
            })
      })
  
  return (
            <Switch>
                  <Route exact path="/signIn" component={SignIn}/>
                  <Route path="/signUp" component={SignUp}/>
                  <Route path="/" component={Home}/>
            </Switch>
  );
}

export default App;
