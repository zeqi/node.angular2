var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(process.cwd() + '/index.html');
});
/**/

/*/!* GET home page. *!/
 router.get('/', function(req, res, next) {
 //res.render('index', { title: 'Express' });
 });*/

module.exports = router;
