const connection = require('./connection')
const { ObjectId } = require("mongodb");

const getAll = () => connection().then(db => db.collection('posts').find({}).toArray());

const insertPost = (id, username, message) => connection().then(db => db.collection('posts')
  .insertOne( { _id: ObjectId(id), username, message } ));

const getById = (id) => connection().then(db => db.collection('posts')
.findOne({ _id: ObjectId(id) }));

module.exports = { 
  getAll,
  insertPost,
  getById,
}