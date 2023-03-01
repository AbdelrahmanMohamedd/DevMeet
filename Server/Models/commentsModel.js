
const mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
  userId:{
        type:mongoose.Schema.ObjectId,
        required:true},
postId:{
 type:mongoose.Schema.Types.ObjectId,
 required:true
},
firstname:{
type:String
},
lastname:{
type:String
},
picturePath:{
 type:String,
},

userPicturePath:{
 type:String,
},

 desc:{
     type:String,
     required:true
                              },

},
{timestamps:true}
)


module.exports=mongoose.model("DevMeetComments", commentSchema);