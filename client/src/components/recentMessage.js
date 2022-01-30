import sunset from "../img/sunset.png"
import earth from "../img/19618.jpg"
import river from "../img/945955.jpg"



const RecentMessages = ({ setSecondCol }) => {

    return (
        <div className="users_res_container user-nth-container">

            <h4 className="title">Messages</h4>

            <div className="chat-box" onClick={()=>setSecondCol(true)}>
                <div className="chat-img"></div>
                <div className="chat-description">
                    <h4>Paul Banters</h4>
                    <p>How are you? What is up with you?</p>
                    <span>12:43AM</span>
                </div>
                <div className="no-of-messages">5</div>
            </div>
        </div>
    );
}


export default RecentMessages;