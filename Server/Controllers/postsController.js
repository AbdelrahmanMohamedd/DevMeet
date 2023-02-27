const Post= require('../Models/postAuth')
const User= require("../Models/userAuthModel");
//CREATE POST
const createPost = async (req, res) => {
try{
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    
 PostObj={
    userId,
    firstname: user.firstname,
    lastname: user.lastname,
    description,
    picturePath,
    userPicturePath: user.profilePicture,
    likes: {},
  }
    const newPost = new Post(PostObj);
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
}
catch(err){
    res.status(409).json({ message: err.message });
}
};
const updatePost = async (req, res) => {
  const {id} = req.params
  const { userId, desc} = req.body;
  console.log(desc)
  try {
    const post = await Post.findById(id);
    console.log(post)
    if (post.userId == userId) {
      console.log("true")
      post.description=desc
      await post.save();
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//DELETE POST
 const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);
    console.log(post)
    if (post.userId == userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

/* READ */
const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
//READ
const getFollowPosts = async (req, res)=>{
 const {userId}=req.params
  try {
    const currentUserPosts = await Post.find({ userId: userId });
    const followingPosts = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res
      .status(200)
      .json(currentUserPosts.concat(...followingPosts[0].followingPosts) //combine owner posts with following posts
      .sort((a,b)=>{
          return b.createdAt - a.createdAt; //sort by date in descending
      })
      );
  } catch (error) {
    res.status(500).json(error);
  }
};
//POST
const postComments = async (req,res)=>{
 const {userId} = req.params
  const {desc , postid } = req.body;
  const foundUser= User.findById(userId)
            const comments={
                  userId,
                  firstname:foundUser.firstName,
                  lastname:foundUser.lastName,
                  desc,
            }
            const post = await Post.findById(postid);
            post.comments.push(comments);
            await post.save();
            res.status(200).json(post);
}











module.exports= {createPost, getFeedPosts, getUserPosts, likePost, getFollowPosts, postComments, deletePost, updatePost};