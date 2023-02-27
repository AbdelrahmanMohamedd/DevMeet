var express = require("express")
var router = express.Router();
const Posts =require("../Controllers/postsController");

router.post("/post", Posts.createPost);
router.get("/posts", Posts.getFeedPosts);
router.get("/profile/posts/:userId", Posts.getUserPosts);
router.get("/posts/:id/", Posts.getFollowPosts);
/* UPDATE */
router.patch("/like/:id", Posts.likePost);

router.patch("/post/comment", Posts.postComments)









module.exports=router;