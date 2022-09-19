import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {  ThunkConfirmAccount } from "../../store/reducers/authReducer";

const ConfirmAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { message } = useSelector((state) => state.messageResponse);

  useEffect(()=> {
    const url = window.location.pathname;
    const params = url.split('/')[2];
    
    if(params.split("-").length === 5) {
        dispatch(ThunkConfirmAccount(params))
    }
  }, [dispatch])


  if(message.success === true) {
        setTimeout(() => {
            history.push('/')
            window.location.reload();
        }, 3000);
  }


  return (
    <>
      <div className="sign-mn-cont">
        <div className="sign-child-cont sn-2 p-2 message_cont">
            {
                !message.confirmed?
                (
                    <div className="message_frame">
                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                        <h1>One more thing</h1>
                        <p>Check your email to confirm your account</p>
                    </div>
                  
                ):
                (
                <div className="message_frame">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <h1>{!message.confirmed?'':message.confirmed}</h1>
                </div>
                )
            }
        </div>
      </div>
    </>
  );
};

export default ConfirmAccount;
