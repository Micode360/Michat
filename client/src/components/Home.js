import { useState, useEffect } from "react"
import { loadUser } from "../store/action/userState"
import { useHistory } from "react-router-dom"
import prof from "../img/miracle.png"
import Logo from "../img/logo.png"
import GuestProfile from "./guestProfile"
import RecentMessages from "./recentMessage"
import Post from "./post"
import Users from "./users"
import FriendsComp from "./friendsComp"
import Main_darshboard from "./mainDarshboard"






const Home = () => {
    let history = useHistory();
    const [user, setUser] = useState({});
    const [firstCol, setFirstCol] = useState(false);
    const [secondCol, setSecondCol] = useState(false);
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
            {/* <Col className="contain-a">
                        <h4>MiLogo</h4>                
                        <Button  onClick={()=>logout()}>Log Out</Button>
                </Col>
            */}
            
            <div className="chat-container">
                <div className="c-col-1">
                    <div className="c-col-nth-1">

                        <div className="col-nth-option">
                            <div className="logo-img" onClick={()=>setSecondCol(false)}>
                                <img src={Logo} alt="logo" />
                            </div>

                            <div className="chat-prof-img" onClick={()=> setThirdCol(true)}>
                                <img src={prof} alt="prof image" />
                            </div>
                            
                            <div className="chat-nav">
                                <div className="chat-nav-opt" onClick={()=>setFirstCol(false)}>
                                    <i className="fas fa-user-friends"></i>
                                    <p>Friends</p>
                                </div>
                            </div>

                            
                            <div className="chat-nav">
                                <div className="chat-nav-opt" onClick={()=>setFirstCol(true)}>
                                    <i className="fas fa-envelope"></i>
                                    <p>Messages</p>
                                </div>
                            </div>


                        </div>


                        <div className="chat-nav power_off" onClick={()=>''}>
                                <div className="chat-nav-opt" onClick={()=>setFirstCol(true)}>
                                <i className="fas fa-power-off"></i>
                                    <p>Log Out</p>
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
                                firstCol === true ?
                                    <RecentMessages setSecondCol={setSecondCol}/>
                                    :
                                    <FriendsComp setThirdCol={setThirdCol}/>
                            }

                        </div>

                    </div>




                </div>


                <div className="c-col-2">
                    {
                        secondCol === true ?
                            <Post />
                            :
                            <Main_darshboard/>
                    }
                </div>


                <div className="c-col-3">

                    {
                        thirdCol === true?
                            <GuestProfile setThirdCol={setThirdCol}/>
                            :
                            <Users setThirdCol={setThirdCol}/>
                    }

                </div>

            </div>
        </>
    )
}

export default Home