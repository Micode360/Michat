import { useState, useEffect } from "react"
import { loadUser } from "../store/action/userState"
import { useHistory } from "react-router-dom"
import prof from "../img/miracle.png"
import Logo from "../img/logo.png"
import GuestProfile from "./guestProfile"
import RecentMessages from "./recentMessage"
// import Chat from "./chat"
import Post from "./post"
import Users from "./users"
import FriendsComp from "./friendsComp"
import Main_darshboard from "./mainDarshboard"
// import sunset from "../img/sunset.png"






const Home = () => {
    let history = useHistory();
    const [user, setUser] = useState({});
    const [thirdCol, setThirdCol] = useState(false);



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
                                    <i className="fas fa-user-friends"></i>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="c-col-nth-2">

                        <div className="search-case">
                            <div className="mi-search">
                                <input type="text" placeholder="Search" />
                                <button><i className="fas fa-search"></i></button>
                            </div>
                        </div>


                        <div className="chat-output">
                            {
                                false ?
                                    <RecentMessages />
                                    :
                                    <FriendsComp/>
                            }

                        </div>

                    </div>




                </div>


                <div className="c-col-2">
                    {
                        true ?
                            <Post />
                            :
                            <Main_darshboard/>
                    }

                </div>


                <div className="c-col-3">

                    {
                        thirdCol ?
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