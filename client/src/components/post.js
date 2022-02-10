import { useState } from "react";
import pImage from "../img/profile_image.png"
import moment from "moment"
import TextareaAutosize from 'react-textarea-autosize';



const Post = () => {
    const [ userChatMessage, setUserChatMessage ] = useState("");
    const [ userChatOutput, setUserChatOutput ] = useState([]);

    const messageOnChange = (e) => {
        setUserChatMessage(e.target.value, "value");
        console.log(userChatMessage, "user");
    }

    const onSubmit = () => {
        setUserChatOutput([...userChatOutput, { message:userChatMessage, time:moment().format('LT') }]);
        console.log(userChatOutput, "output");
    }


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

                {
                    userChatOutput.map((message, id)=>(
                    <div className="_mi_row">
                        <div className="_mi_cht" key={id}>
                             { message.message }
                            <span className="_mi_time">{ message.time }</span>
                        </div>
                    </div>
                    ))
                }

        

                {/*
                    <div className="_gue_row">
                    <div className="_gue_cht">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        <span className="_gue_time">12:43PM</span>
                    </div>
                </div>
                */}

            </div>

            <div className="col2-header messageContainer">
                <div className="mi-type">
                    <TextareaAutosize className="autoResize" onChange={messageOnChange} placeholder="Type a messsage" minRows={2} />
                    <button onClick={()=>onSubmit()}><i className="fas fa-caret-right"></i></button>
                </div>
            </div>
        </>
    )
}


export default Post