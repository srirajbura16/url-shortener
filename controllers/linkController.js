const Link = require('../models/link');
const { body, validationResult } = require('express-validator');
const { nanoid } = require('nanoid');

exports.get_link_form = (req, res, next) => {
  res.render('index');
};

exports.post_link_form = [
  // url_validator,
  body('link').trim().isURL().withMessage('URL invalid'),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.render('index', { errors: errors.array() });
      return;
    } else {
      const url = new Link({
        link: req.body.link,
        short_link: nanoid(4),
      });
      url.save((err) => {
        if (err) {
          console.log('error with save');
          return next(err);
        }
        res.render('index', { url: url });
      });
    }
  },
];

exports.get_shorten_link = (req, res, next) => {
  res.render('index');
  //get link by short id link
  //redirect.
};
