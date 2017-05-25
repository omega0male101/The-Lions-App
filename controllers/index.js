var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/fixtures', require('./fixtures'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.get('/about', function(req, res){
  res.json({data: "All about the Lions!"});
})

module.exports = router;