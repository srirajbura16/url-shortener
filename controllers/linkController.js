const Link = require('../models/link');

exports.get_link_form = (req, res, next) => {
  res.render('index');
};

exports.post_link_form = (req, res, next) => {
  res.render('index');
};

exports.get_shorten_link = (req, res, next) => {
  res.render('index');
};
