import { useState, useEffect } from "react"
import { loadUser } from "../store/action/userState"
// import { Button,  Col,  Container } from "react-bootstrap"
import { useHistory } from "react-router-dom"




const Home = () => {
    let history = useHistory();
    const [user, setUser] = useState({});


    useEffect(() => {
        if (loadUser() === undefined) return;
        setUser({
            email: loadUser().email
        });
    }, [setUser])


    const logout = () => {
        localStorage.removeItem('payload');
        return history.push('/signIn');
    }


    return (
        <>
            {/*                 <Col className="contain-a">
                        <h4>MiLogo</h4>                
                        <Button  onClick={()=>logout()}>Log Out</Button>
                </Col>*/}
            <div className="chat-container">
                <div className="c-col-1">
                    1
                </div>


                <div className="c-col-2">
                    2
                </div>


                <div className="c-col-3">
                            3
                </div>

            </div>
        </>
    )
}

export default Home