const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  link: { type: String, required: true },
  short_link: { type: String, required: true },
});

//User URL
LinkSchema.virtual('url').get(function () {
  return '/' + this.link;
});

module.exports = mongoose.model('Link', LinkSchema);
