import sunset from "../img/sunset.png"
import earth from "../img/19618.jpg"
import river from "../img/945955.jpg"



const RecentMessages = () => {

    return (
        <>
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
        </>
    );
}


export default RecentMessages;