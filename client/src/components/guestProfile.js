import pImage from "../img/profile_image.png"
import sunset from "../img/sunset.png"





const GuestProfile = ({ setThirdCol }) => {

    return (
        <div className="c-col-3-nth-child">
            <span className="user_close" onClick={()=> setThirdCol(false)}>x</span>
            <div className="_gue_prof_img" style={{ backgroundImage: `url(${pImage})` }}></div>
            <h2>Aime Sanders</h2>
            <p>She's Here</p>

            <button className="user_btn">Send a friend request</button>

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
    )
}



export default GuestProfile;