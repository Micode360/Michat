import pImage from "../img/profile_image.png"





const FriendsComp = () => {

    return (
        <div className="users_res_container frnds-container">
            
            <h4 className="title">Friends</h4>

            <div className="user frnds">
                <div className="users_img_cont"><div className="user_img" style={{ backgroundImage: `url(${pImage})` }}></div></div>

                <div className="users_description">
                    <h4>Aimie Sanders</h4>
                    <p>I am cool and Awesome</p>
                </div>
            </div>

        </div>

    );
}


export default FriendsComp;