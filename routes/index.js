var express = require('express');
var router = express.Router();
const link_controller = require('../controllers/linkController');

/* GET home page. */
router.get('/', link_controller.get_link_form);

router.post('/', link_controller.post_link_form);

router.get('/:id', link_controller.get_shorten_link);

module.exports = router;
