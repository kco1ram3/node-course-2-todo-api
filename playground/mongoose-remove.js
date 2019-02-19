const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c6bb60e7983c2cc77cd410c'}).then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// });

Todo.findByIdAndRemove('5c6bb6117983c2cc77cd410d').then((todo) => {
  console.log(JSON.stringify(todo, undefined, 2));
});
