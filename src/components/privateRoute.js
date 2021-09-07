
import { Route, useHistory, Redirect} from "react-router-dom"



const PrivateRoute = ({Component: component, path, ...rest }) => {

  

    let history = useHistory();
      
          let userStr = localStorage.getItem('payload');
          let userObj = JSON.parse(userStr);
          if(!userObj) {
                // history.push('/signIn')

                return (
                    <Route
                            render={()=>{
                                    return (
                                        <Redirect to="/signIn"/>
                                    )
                            }}
                    />
                  )
                
          }else {
            return (
                <Route
                render={()=>{
                        return (
                            <Redirect to="/"/>
                        )
                }}
        />
              )
          }
  }


  /*
  history.push('/',{
                email: userObj.email
          })
  */


export default PrivateRoute; 