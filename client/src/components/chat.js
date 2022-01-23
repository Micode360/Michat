import pImage from "../img/profile_image.png"
import TextareaAutosize from 'react-textarea-autosize';





const Chat = () => {

    return (
        <>
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
        </>
    )
}


export default Chat