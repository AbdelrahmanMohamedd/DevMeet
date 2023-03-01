const mongoose = require("mongoose");

var postsSchema = mongoose.Schema({
 userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    description: {
     type:String,
     default:"",
    },
     picturePath: {
     type:String,
     default:"",
    },
     userPicturePath: {
     type:String,
     default:"",
    },
   likes: {
      type: Map,
      of: Boolean,
    },
    helpful: {
      type: Map,
      of: Boolean,
    },
    wow: {
      type: Map,
      of: Boolean,
    },
    tags: {
      type: String,
      Enum: ['Javascript', 'Python', 'Java', 'C++', 'C#', 'C', 'Flutter', 'HTML', 'CSS']
    },
    comments: {
      type: [mongoose.Schema.Types.ObjectId]
    },
},
{timestamps:true}
)

module.exports = mongoose.model("DevMeetPosts", postsSchema);