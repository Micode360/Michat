const Schema = mongoose.Schema;


const PostSchema = new Schema(
  {
    user: {
      type: Array,
      required: false,
    },
    text: {
        type: String,
        required: true,
      },
      image: [
        {
            type: String,
            required: false,
        }
      ],
      video: [
        {
            type: String,
            required: false,
        }
      ],
      likes: {
        type: Number,
        required: false,
      },
      love: {
        type: Number,
        required: false,
      },
      comments: [
          {
            user: {
                type: String,
                required: false,
              },
              text: {
                type: String,
                required: false,
              }, 
              image:{
                type: String,
                required: false,
              },
              likes: {
                type: Number,
                required: false,
              },
              love: {
                type: Number,
                required: false,
              },
              reply: [
                    {
                        user: {
                            type: String,
                            required: false,
                          },
                          text: {
                            type: String,
                            required: false,
                          }, 
                          image:{
                            type: String,
                            required: false,
                          },
                          likes: {
                            type: Number,
                            required: false,
                          },
                          love: {
                            type: Number,
                            required: false,
                          },            
                    }    
              ]
          }
      ],
  },
  {
    timestamps: true,
  }
);






const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
