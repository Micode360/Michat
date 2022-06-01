import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { loadUser } from "../store/action/userState";
import { Redirect } from "react-router-dom";
import prof from "../img/miracle.png";
import Logo from "../img/logo.png";
import GuestProfile from "./guestProfile";
import RecentMessages from "./recentMessage";
import Post from "./post";
import Users from "./users";
import FriendsComp from "./friendsComp";
import MainDarshboard from "./mainDarshboard";
import { logOut } from "../store/reducers/authReducer";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [firstCol, setFirstCol] = useState(false);
  const [secondCol, setSecondCol] = useState(false);
  const [thirdCol, setThirdCol] = useState(false);

  useEffect(() => {
    
  }, []);



  if(!isLoggedIn) return <Redirect to="/signin"/>;

  return (
    <>
      <div className="chat-container">
        <div className="c-col-1">
          <div className="c-col-nth-1">
            <div className="col-nth-option">
              <div className="logo-img" onClick={() => setSecondCol(false)}>
                <img src={Logo} alt="logo" />
              </div>

              <div className="chat-prof-img" onClick={() => setThirdCol(true)}>
                <img src={prof} alt="profile" />
              </div>

              <div className="chat-nav">
                <div
                  className="chat-nav-opt"
                  onClick={() => setFirstCol(false)}
                >
                  <i className="fas fa-user-friends"></i>
                  <p>Friends</p>
                </div>
              </div>

              <div className="chat-nav">
                <div className="chat-nav-opt" onClick={() => setFirstCol(true)}>
                  <i className="fas fa-envelope"></i>
                  <p>Messages</p>
                </div>
              </div>
            </div>

            <div className="chat-nav power_off">
              <div className="chat-nav-opt" onClick={() =>{
                dispatch(logOut())
                window.location.reload();
              }}>
                <i className="fas fa-power-off"></i>
                <p>Log Out</p>
              </div>
            </div>
          </div>

          <div className="c-col-nth-2">
            <div className="search-case">
              <div className="mi-search">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            <div className="chat-output">
              {firstCol === true ? (
                <RecentMessages setSecondCol={setSecondCol} />
              ) : (
                <FriendsComp setThirdCol={setThirdCol} />
              )}
            </div>
          </div>
        </div>

        <div className="c-col-2">{false ? <Post /> : <MainDarshboard />}</div>

        <div className="c-col-3">
          {thirdCol === true ? (
            <GuestProfile setThirdCol={setThirdCol} />
          ) : (
            <Users setThirdCol={setThirdCol} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
