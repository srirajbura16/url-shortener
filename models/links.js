const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  link: { type: String, required: true },
  short_url: { type: String, required: true },
});

//User URL
LinkSchema.virtual('url').get(function () {
  return '/' + this.username;
});

module.exports = mongoose.model('Link', LinkSchema);
