import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

let app = require('../server');
let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.route('/').get(function(req, res) {
	res.send('hello world!')
});

module.exports = router;