import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "../css/user.darshboard.css"
import testimonial from "../../img/testimonial.jpg"


const PostInput = ({ setModalStatus }) => {
    const [userChatMessage, setUserChatMessage] = useState("");

    const messageOnChange = (e) => {
        // if(e.target.value.includes('#')) {
        //     /*Start searching for related tag*/
        // }

        setUserChatMessage(e.target.value, "value");
        console.log(userChatMessage, "user");
    };

    const closeFunc = (e) => {

        if(
            e.target.className.includes('modal_container')
            || e.target.className.includes('mclose')
            || e.target.className.includes('close')
            ) {
             
                setModalStatus(false);
        }else return;
    }

    return (
        <div className="modal_container mflex mjustify-center malign-center" onClick={(e)=>closeFunc(e)}>
            <div className="m_modal pt1 pb1">

                <div className="mflex mjustify-between px1">
                    <div className="mflex pb1">
                        <div className="profile_img" style={{ background: `url(${testimonial})` }}></div>
                        <h5>Jesicca Reed</h5>
                    </div>


                    <div className="close">
                        <i className="fa fa-times mclose" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="m_textarea">
                    <TextareaAutosize
                        className="autoResize"
                        onChange={messageOnChange}
                        placeholder="Type a messsage"
                        minRows={2}
                    />
                </div>
                <div className="mflex mjustify-between px1">
                    <div className="mflex malign-center">

                        <div className="icn_opt p1 mr1">
                            <i className="fa fa-picture-o" aria-hidden="true"></i>
                        </div>

                        <div className="icn_opt p1 mr1">
                            <i className="fa fa-video-camera" aria-hidden="true"></i>
                        </div>

                        <div className="icn_opt p1 mr1">
                            <i className="fa fa-smile-o" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div>
                        <button>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostInput;