var express = require('express');
var router = express.Router();

// requires the controller with functionality 
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

//Get 
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
