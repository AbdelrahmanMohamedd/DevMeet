const io = require("socket.io")(`${process.env.SOCKET_API_LINK}`, {
  cors: {
    origin: `${process.env.REACT_LINK}`
  }

});

let users = []

const addUser = (userId, socketId) => {
  !users.find((user) => user.userId === userId) && users.push({ userId, socketId })
}

const removeUser = (socketId) => {
  users = users.filter(user => user.socketId !== socketId)
}

const getUser = (userId) => {
  return users.find(user => user.userId === userId)
}

io.on("connection", (socket) => {
  console.log(`user ${socket.id} connected FROM PORT >> Render`)
  //after every connection take user and socket id
  io.emit("welcome", "hello this is socket server")
  socket.on("addUser", userId => {
    addUser(userId, socket.id)
    console.log("******")
    io.emit("getUsers", users)
  });
  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId)

    if (user) {
      io.to(user.socketId).emit("getMessage", {
        senderId, text,
      })
    }
    else {
      console.log(`User ${receiverId} not found`)
    }

  })

  //disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!")
    removeUser(socket.id)
    io.emit("getUsers", users)
  })
})