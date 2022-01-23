import pImage from "../img/profile_image.png"
import sunset from "../img/sunset.png"





const GuestProfile = () => {

    return (
        <div className="c-col-3-nth-child">
            <div className="_gue_prof_img" style={{ backgroundImage: `url(${pImage})` }}></div>
            <h2>Aime Sanders</h2>
            <p>She's Here</p>

            <button className="user_btn">User</button>

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