import "../css/user.darshboard.css";
import testimonial from "../../img/testimonial.jpg";
import eng from "../../img/engwm42343565786_e456765432.jpg";
import { ThumbUpIcon, ChatAltIcon, ShareIcon, HeartIcon, PhotographIcon, EmojiHappyIcon, UsersIcon } from '@heroicons/react/solid';


const GeneralPosts = () => {

  return (
    <div className="users_posts mflex mjustify-center">

      <div className="posts_frame">
        <div className="px1 mflex mjustify-between">
          <div className="mflex pb1">
            <div className="profile_img" style={{ background: `url(${testimonial})` }}></div>
            <h5>Jesicca Reed</h5>
          </div>

          <div className="mflex">
            2:42pm
            <div className="three-dots"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></div>
          </div>

        </div>
        <div className="f1 px1 pb1">
          Nigeria Limited is an indigenous firm established and incorporated on the 26th of June, 1980, under the companies and allied matters decree of Nigeria, 1968. Primarily set up, as a consulting Civil Engineering firm.
        </div>
        <img src={eng} alt="michat post" />
        <div className="btop mflex mjustify-between px1 pt1 pb1 post-opt">
          <div className="mflex">
            <div className="mr1 cursor f1">
              <ChatAltIcon className="chatAltIcon"/>
              Comment
            </div>


            <div className="mr1 cursor f1">
              <ThumbUpIcon className="thumbUpIcon"/>
              Like
            </div>

            <div className="mr1 cursor f1">
              <ShareIcon className="shareIcon" />
              Share
            </div>
          </div>

          <div className="mflex f1">
            <div className="mflex malign-center mr0">
              <div className="mflex malign-center">

                <div className="m_icon mflex mjustify-center malign-center" style={{ background: 'blue', marginLeft: '-1rem' }}>
                  <ThumbUpIcon style={{ width: '100%' }} />
                </div>
                <div className="m_icon mflex mjustify-center malign-center" style={{ background: 'red', marginLeft: '-0.6rem' }}>
                  <HeartIcon style={{ width: '100%' }} />
                </div>


              </div>
              46,965
            </div>

            <div className="mr0 f1">
              <UsersIcon className="userIcon"/>
              296
            </div>

          </div>


        </div>


        <div className="comments p1">
          <div className="mflex mjustify-between p1 btop bbottom pt1 pb1">
            <div className="comment_prof" style={{ background: `url(${testimonial})` }}></div>

            <div className="mi-put mflex mjustify-between malign-center">
              <input type="text" placeholder="What do you think?" />
              <div className="mr cursor f1">
                <EmojiHappyIcon style={{ width: '1.2rem', color: '#ffffff'}}/>
              </div>
              <div className="mr1 cursor f1">
                <PhotographIcon style={{ width: '1.2rem', color: '#ffffff'}}/>
              </div>
            </div>
          </div>

          <div className="pt1 pb1">


            <div className="mflex p1 mb2">
              <div className="comment_prof" style={{ background: `url(${testimonial})` }}></div>

              <div className="gen_posts_comment">
                <div className="_gue_row">
                  <div className="_gue_cht mw80 min-w100">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    <span className="_gue_time">12:43PM</span>

                    <div className="mflex malign-center _gue_icn">
                      <div className="mr2">like</div>

                      <div className="mr2">Reply</div>

                      <div className="mflex malign-center">
                        <div className="mflex malign-center">

                          <div className="m_icon mflex mjustify-center malign-center" style={{ background: 'blue', color: '#ffffff', marginLeft: '-1rem' }}>
                            <ThumbUpIcon style={{ width: '100%' }} />
                          </div>
                          <div className="m_icon mflex mjustify-center malign-center" style={{ background: '#f04c4d', color: '#ffffff', marginLeft: '-0.6rem' }}>
                            <HeartIcon style={{ width: '100%' }} />
                          </div>
                        </div>

                        4,567
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>





            <div className="mflex mjustify-center p1 mb2">
              <div className="comment_prof" style={{ background: `url(${testimonial})` }}></div>

              <div className="gen_posts_comment">
                <div className="_gue_row">
                  <div className="_gue_cht mw50 min-w80">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    <span className="_gue_time">12:43PM</span>

                    <div className="mflex malign-center _gue_icn">
                      <div className="mr1">like</div>
                      <div className="mflex malign-center">

                        <div className="mflex malign-center">

                          <div className="m_icon mflex mjustify-center malign-center" style={{ background: 'blue', color: '#ffffff', marginLeft: '-1rem' }}>
                            <ThumbUpIcon style={{ width: '100%' }} />
                          </div>
                          <div className="m_icon mflex mjustify-center malign-center" style={{ background: '#f04c4d', color: '#ffffff', marginLeft: '-0.6rem' }}>
                            <HeartIcon style={{ width: '100%' }} />
                          </div>


                        </div>

                        4,567
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>



            <div className="mflex p1">
              <div className="comment_prof" style={{ background: `url(${testimonial})` }}></div>

              <div className="gen_posts_comment">
                <div className="_gue_row">
                  <div className="_mi_cht mw80 min-w100">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    <span className="_gue_time">12:43PM</span>

                    <div className="mflex malign-center _gue_icn">
                      <div className="mr2">like</div>

                      <div className="mr2">Reply</div>

                      <div className="mflex malign-center">
                        <div className="mflex malign-center">

                          <div className="m_icon mflex mjustify-center malign-center" style={{ background: 'blue', color: '#ffffff', marginLeft: '-1rem' }}>
                            <ThumbUpIcon style={{ width: '100%' }} />
                          </div>
                          <div className="m_icon mflex mjustify-center malign-center" style={{ background: '#f04c4d', color: '#ffffff', marginLeft: '-0.6rem' }}>
                            <HeartIcon style={{ width: '100%' }} />
                          </div>
                        </div>

                        4,567
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>


          </div>


        </div>
      </div>

    </div>

  )
}



export default GeneralPosts;