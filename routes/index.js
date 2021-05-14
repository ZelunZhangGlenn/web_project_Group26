var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
    res.send();
});

router.get('/news', function(req, res, next) {
    res.send();
});

router.get('/HealthTopics/WhatisCovid', function(req, res, next) {
  res.send();
});

router.get('/HealthTopics/Vaccine', function(req, res, next) {
  res.send();
});

module.exports = router;
