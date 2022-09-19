import "./css/user.darshboard.css"
import GeneralPosts from "./attatchments/generalPosts";
const UserDarshboard = ({ setModalStatus }) => {
  let tags = [
    'Sports',
    'Hero',
    'Wetin Dey',
    'Sports',
    'Hero',
    'Wetin Dey',
    'Sports',
    'Hero',
    'Wetin Dey',
    'Sports',
    'Hero',
    'Wetin Dey',
  ]
  return (
    <div className="users_container">
      <div className="users_nav mflex mjustify-between msticky">
        <h4>Posts</h4>

 
        <button className="user_post_button" onClick={()=>setModalStatus(true)}>
          What's trending?
        </button>
   
      </div>

      <div className="posts_tags mflex malign-center mb1 msticky">
        <div className="f1">Recent tags:</div>

        {
          tags.map((tag, index) => (
            <div className="Itag f1" key={index}>
              {tag}
            </div>
          ))
        }
      </div>

      <GeneralPosts />

      <GeneralPosts />

      <GeneralPosts />
    </div>
  );
};

export default UserDarshboard;
