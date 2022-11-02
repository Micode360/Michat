import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import prof from "../img/miracle.png";
import Logo from "../img/logo.png";
import GuestProfile from "./guestProfile";
import RecentMessages from "./attatchments/recentMessage";
import Post from "./post";
import Users from "./users";
import FriendsComp from "./friendsComp";
import MainDarshboard from "./mainDarshboard";
import UserDarshboard from "./user_darshboard";
import { logOut } from "../store/reducers/authReducer";
import PostInput from "./attatchments/postInput";
import { io } from "socket.io-client"

const Home = () => {
  const socket = useRef();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [firstCol, setFirstCol] = useState(false);
  const [secondCol, setSecondCol] = useState('posts');
  const [thirdCol, setThirdCol] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
        socket.current = io("http://localhost:8000");

        socket.current.on("connection", ()=>{
          console.log("connected to server");
        })
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search,"search")
    socket.current.emit("message", search)
  }


  if(!isLoggedIn) return <Redirect to="/signin"/>;

  return (
    <>
      <div className="chat-container">
        <div className="c-col-1">
          <div className="c-col-nth-1">
            <div className="col-nth-option">
              <div className="logo-img" onClick={() => setSecondCol('posts')}>
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

              <div className="chat-nav">
                <div className="chat-nav-opt" onClick={() => setFirstCol(true)}>
                  <i className="fas fa-envelope"></i>
                  <p>Notifications</p>
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
              <form className="mi-search" onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder="Search" />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </form>
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

        <div className="c-col-2">{secondCol === 'posts' ? <UserDarshboard setModalStatus={setModalStatus}/> :secondCol === 'greetings'? <MainDarshboard />:secondCol === 'messages'?<Post />:<MainDarshboard />}</div>

        <div className="c-col-3">
          {thirdCol === true ? (
            <GuestProfile setThirdCol={setThirdCol} />
          ) : (
            <Users setThirdCol={setThirdCol} />
          )}
        </div>
      </div>
      {modalStatus?<PostInput setModalStatus={setModalStatus}/>:''}
    </>
  );
};

export default Home;
