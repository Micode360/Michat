import { useState, useEffect } from "react"
import { loadUser } from "../store/action/userState"
import { Button,  Col,  Container } from "react-bootstrap"
import { useHistory } from "react-router-dom"




const Home = () => {
    let history = useHistory();
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            email: loadUser().email
        });
    },[setUser])


    const logout = () => {
         localStorage.removeItem('payload');
        return history.push('/signIn');
    }

  
    
    return (
            <>
                <Col className="contain-a">
                        <h4>MiLogo</h4>                

                        <Button  onClick={()=>logout()}>Log Out</Button>
                </Col>
                <Container className="p-5">
                        <h2>Hello { user.email }</h2>
                </Container>
            </>
    )
}

export default Home