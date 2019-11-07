var express = require('express');
var router = express.Router();
let json=[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'acj', });
});
router.post('/json', function(req, res, next) {
  json=(req.body);
  console.log('jsonn receive')
  res.send("ok");
});
router.get('/pgm', function(req, res, next) {
  console.log("pgmmmm", req.json )

  console.log("js", json )
  res.json(json);
});

module.exports = router;
