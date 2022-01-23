import { useState, useEffect, useRef } from "react"
import { loadUser } from "../store/action/userState"
import { useHistory } from "react-router-dom"
import prof from "../img/miracle.png"
import Logo from "../img/logo.png"
import GuestProfile from "./guestProfile"
import RecentMessages from "./recentMessage"
// import Chat from "./chat"
import Post from "./post"
import Users from "./users"
// import sunset from "../img/sunset.png"






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
                    <div className="c-col-nth-1">

                        <div className="col-nth-option">
                            <div className="logo-img">
                                <img src={Logo} alt="logo" />
                            </div>

                            <div className="chat-prof-img">
                                <img src={prof} alt="prof image" />
                            </div>

                            <div className="chat-nav">
                                <div className="chat-nav-opt">
                                    <i class="fas fa-user-friends"></i>
                                </div>
                            </div>

                        </div>

                    </div>

                    {
                        true ?
                            <RecentMessages />
                            :
                            ''
                    }


                </div>


                <div className="c-col-2">
                    {
                        true ?
                            <Post />
                            :
                            ''
                    }

                </div>


                <div className="c-col-3">

                    {
                        false ?
                            <GuestProfile />
                            :
                            <Users />
                    }

                </div>

            </div>
        </>
    )
}

export default Home