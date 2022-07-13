import "../css/user.darshboard.css"
import testimonial from "../../img/testimonial.jpg"
import eng from "../../img/engwm42343565786_e456765432.jpg"

const GeneralPosts = () => {

    return (
        <div className="users_posts mflex mjustify-center">

        <div className="posts_frame">
          <div className="px1 mflex mjustify-between">
                <div className="mflex pb1">
                    <div className="profile_img" style={{background:`url(${testimonial})`}}></div>
                    <h5>Jesicca Reed</h5>
                </div>

                <div className="mflex">
                  2:42pm
                  <div className="three-dots"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                </div>

          </div>
          <div className="f1 px1 pb1">
              Nigeria Limited is an indigenous firm established and incorporated on the 26th of June, 1980, under the companies and allied matters decree of Nigeria, 1968. Primarily set up, as a consulting Civil Engineering firm.
          </div>
           <img src={eng} alt="michat post" />
          <div className="btop mflex mjustify-between px1 pt1">
                <div className="mflex">
                    <div className="mr1 cursor f1"> 
                       <i className="fas fa-search mr0 f1"></i> 
                       Comment
                      </div>

                    <div className="mr1 cursor f1">
                      <i className="fas fa-search mr0 f1"></i> 
                      Share
                    </div>
                </div>

                <div className="mflex f1">
                    <div className="mr0">
                         <i class="fas fa-user-friends mr0 f1"></i>
                         4,965
                    </div>

                    <div className="mr0 f1">
                         <i class="fas fa-user-friends mr0 f1"></i>
                         296
                    </div>

                    <div className="mr0 f1">
                         <i class="fas fa-user-friends mr0 f1"></i>
                         12
                    </div>
                </div>
                
          </div>
        </div>

  </div>

    )
}



export default GeneralPosts;