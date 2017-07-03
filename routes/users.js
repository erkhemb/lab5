var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var Rx = require('@reactivex/rxjs');

express().set('strict routing', true);

const jsonPromise = fetch('http://jsonplaceholder.typicode.com/users/');

var datas = {};

// ----- SOLUTION 1: USING PROMISES -----
var result = function() {
  jsonPromise.then(function (data) {
    return data.json();
  }).then(function (json) {
    datas = json;
  })
    .catch(function () {
      console.log("Promise Rejected");
    });
}
result();
// -------------- END --------------------



// ----- SOLUTION 2: USING OBSERVABLES -----
// Rx.Observable.fromPromise(jsonPromise)
//   .subscribe(
//   (res) => {
//     process(res);
//   });

// function process(resp) {
//   resp.buffer().then(function (res) {
//     return res.toString();
//   })
//     .then(function (json) {
//       datas = JSON.parse(json);
//     })
//     .catch((error) =>
//     { new Error("Error ..."); }
//     );
// }
// -------------- END --------------------



// ----- SOLUTION 3: USING ASYNC / AWAIT -----
// async function callAsync() {
//   try {
//     let results = await (jsonPromise);
//     return results.json();
//   }
//   catch (error) {
//     console.log(error.message);
//   }
// }

// callAsync()
//   .then(function (json) {
//     datas = json;
//   }).catch(() => console.log("Error 3... "));
// -------------- END --------------------



router.get('/', function (req, res, next) {
  res.render('users', { datas: datas });
});

module.exports = router;
