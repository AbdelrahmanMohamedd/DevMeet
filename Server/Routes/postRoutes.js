var express = require("express")
var router = express.Router();
const Posts =require("../Controllers/postsController");

//GET
router.get("/posts", Posts.getFeedPosts);
router.get("/profile/posts/:userId", Posts.getUserPosts);
router.get("/posts/:id/", Posts.getFollowPosts);

//POST
router.post("/posts", Posts.createPost);

/* UPDATE */
router.patch("/like/:id", Posts.likePost);
router.patch("/post/comment", Posts.postComments)
router.put('/posts/:id', Posts.updatePost)

//Delete
router.delete("/posts/:id", Posts.deletePost)







module.exports=router;