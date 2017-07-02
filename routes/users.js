var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

express().set('strict routing', true);

/* GET users listing. */
router.get('/', function (req, res, next) {

  data = fetch('http://jsonplaceholder.typicode.com/users/')
    .then(function (res) {
      // console.log('111'+res.json());
      return res.json();
    }).catch(function () {
      console.log("Promise Rejected");
    });

  console.log("222" + data);
  res.render('users', { data: JSON.stringify(data) });
});

module.exports = router;
