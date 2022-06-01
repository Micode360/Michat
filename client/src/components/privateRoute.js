import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";

const PrivateRoute = ({ Component: component, path, ...rest }) => {
  let userStr = localStorage.getItem("usertkn");
  let userObj = JSON.parse(userStr);
  if (!userObj) {
    return (
      <Route
        render={() => {
          return <Redirect to="/signIn" />;
        }}
      />
    );
  } else {
    return (
      <Route
        render={() => {
          return (
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          );
        }}
      />
    );
  }
};

export default PrivateRoute;
