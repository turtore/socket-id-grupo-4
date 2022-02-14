const Post = require('../models/postsModel');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('inserPost', async ({ id, username, message }) => {
    console.log(`Cliente votou na linguagem de id ${id}`);
    await Post.insertPost(id, username, message);
    const post = await Post.getById(id);
    
    io.emit('refreshMessage', post);
  })
}); 