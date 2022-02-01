import Logo from "../img/logo.png"



const Main_darshboard = () => {

    return (
        <div className="darshboard_container">
            <div className="d_frame">
                <img src={Logo} alt="logo" />

                <div className="d_com">
                    <h2>Hi Miracle, Welcome Back</h2>
                    <p>Wanna make new friends? You've come to the right place.</p>
                </div>
            </div>
        </div>
    );
}


export default Main_darshboard;