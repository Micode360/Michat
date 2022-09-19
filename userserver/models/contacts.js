const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ContactSchema = new Schema(
    {
        conversations_id: {
            type: mongoose.Types.ObjectId
        },
        status: {
            type: String,
            required: false,
        },
        members: [
            {
                id: {
                    type: mongoose.Types.ObjectId,
                    ref: "user"
                },
                request: {
                    type: String,
                    required: false,
                }
            }
        ],
     },
    {
        timestamps: true,
    }
);



const MessagesSchema = new Schema(
    {
        conversations_id: {
            type: mongoose.Types.ObjectId,
            ref: "contact"
        },
        messages: [
            {
                sender: {
                    type: mongoose.Types.ObjectId,
                    ref: "user"
                },
                text: {
                    type: String,
                    required: true,
                },
                image: {
                    type: String,
                    required: false,
                },
                date: {
                    type: Date,
                    default: Date.now,
                }
            }
        ]
    },
    {
        timestamps: true,
    }
);


const Contact = mongoose.model("Contact", ContactSchema);
const Messages = mongoose.model("Messages", MessagesSchema);


module.exports = {
    Contact,
    Messages
};
