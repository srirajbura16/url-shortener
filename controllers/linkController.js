const Link = require('../models/link');
const { body, validationResult } = require('express-validator');
const { nanoid } = require('nanoid');

exports.get_link_form = (req, res, next) => {
  res.render('index');
};

exports.post_link_form = [
  // url_validator,
  body('url-link').trim().isURL().withMessage('URL invalid'),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.render('index', { errors: errors.array() });
      return;
    } else {
      const new_url = new Link({
        link: req.body.link,
        short_link,
      });
    }
  },
];

exports.get_shorten_link = (req, res, next) => {
  res.render('index');
  //get link by short id link
  //redirect.
};

//validator
//valid url
