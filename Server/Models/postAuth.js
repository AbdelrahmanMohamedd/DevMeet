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
    comments: {
      type: [ {
                              userId:{
                                        type:mongoose.Schema.ObjectId,
                                        required:true
                              },
                              firstname:{
                                        type:String,
                                        required:true
                              },
                              lastname:{
                                        type:String
                              },
                              desc:{
                                        type:String,
                                        required:true
                              }
                    }],
      default: [],
    },
},
{timestamps:true}
)

module.exports = mongoose.model("DevMeetPosts", postsSchema);