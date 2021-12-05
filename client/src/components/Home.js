import { useState, useEffect, useRef } from "react"
import { loadUser } from "../store/action/userState"
import { useHistory } from "react-router-dom"
import prof from "../img/miracle.png"
import Logo from "../img/logo.png"
import pImage from "../img/profile_image.png"
import sunset from "../img/sunset.png"
import TextareaAutosize from 'react-textarea-autosize';




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

                            <div className="chat-box">
                                <div className="chat-img"></div>
                                <div className="chat-description">
                                    <h4>Aime Sanders</h4>
                                    <p>How are you? What is up with you?</p>
                                    <span>12:43AM</span>
                                </div>
                                <div className="no-of-messages">5</div>
                            </div>

              


                        </div>

                    </div>
                </div>


                <div className="c-col-2">

                    <div className="col2-header col2-top-header">
                        <div className="guest-case">
                            <div className="guest-img" style={{ backgroundImage: `url(${pImage})` }}></div>
                            <div className="guest-description">
                                <h4>Aime Sanders</h4>
                                <p>She's Here</p>
                            </div>
                        </div>

                        <div>
                            <i className="fas fa-video"></i>
                        </div>
                    </div>

                    <div className="_cht_showroom">

                        <div className="_mi_row">
                            <div className="_mi_cht">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                <span className="_mi_time">12:43PM</span>
                            </div>
                        </div>

                        <div className="_gue_row">
                            <div className="_gue_cht">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                <span className="_gue_time">12:43PM</span>
                            </div>
                        </div>

                    </div>

                    <div className="col2-header messageContainer">
                        <div className="mi-type">
                            <TextareaAutosize className="autoResize" placeholder="Type a messsage" minRows={2} />
                            <button><i className="fas fa-caret-right"></i></button>
                        </div>
                    </div>
                </div>


                <div className="c-col-3">

                    <div className="c-col-3-nth-child">
                        <div className="_gue_prof_img" style={{ backgroundImage: `url(${pImage})` }}></div>
                        <h2>Aime Sanders</h2>
                        <p>She's Here</p>


                        <div className="_gue_description">
                            <h4>Username</h4>
                            <p>@Aimedars</p>

                            <h4>Location</h4>
                            <p>Manchester, England</p>

                            <h4>Media</h4>

                            <div className="_gue_media_frame">
                                <div className="_gue_media" style={{ backgroundImage: `url(${sunset})` }}></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Home