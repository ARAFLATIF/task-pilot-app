const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  content: String,
  status: String,
});

module.exports = mongoose.model('Task', TaskSchema);
