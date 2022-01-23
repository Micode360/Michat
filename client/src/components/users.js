import pImage from "../img/profile_image.png"





const Users = () => {


    return (
        <div className="users-container">
            
            <div className="search-case width-100">
                <div className="mi-search">
                    <input type="text" placeholder="Find Users" />
                    <button><i className="fas fa-search"></i></button>
                </div>
            </div>

            <div className="users_res_container">

                    <div className="user">
                        <div className="users_img_cont"><div className="user_img" style={{ backgroundImage: `url(${pImage})` }}></div></div>
 
                        <div className="users_description">
                            <h4>Aimie Sanders</h4>
                            <p>I am cool and Awesome</p>
                        </div>
                    </div>
                    
            </div>


        </div>
    );

}



export default Users;