var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  console.log('-------------------------');
  console.log(req.query);
  console.log('-------------------------');
  res.json({
    name: 'zeqi',
    age: 25
  });
});

module.exports = router;
