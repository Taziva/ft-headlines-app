var express = require('express');
var router = express.Router();
var request = require('request-promise')


/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  collection = db.get("headlinecollection");
    res.render('index', {
      title: 'Financial Times Headlines'
  })
});

router.get('/search', function(req, res, next) {
  var db = req.db;
  var searchQuery = (req.query.search).toLowerCase()
  var arr = [];
  collection = db.get("searchcollection");
  var options = {
    method: 'POST',
    uri:"http://api.ft.com/content/search/v1",
    qs: {
      apiKey:process.env.FT_KEY
    },
    body: {
  "queryString": searchQuery,
  "queryContext": {
  "curations": [
    "ARTICLES"
  ]
  },
  "resultContext" : {
  "aspects" :[  "title","location","summary"],
  }
  },
    json: true
  }
  request(options).then(function (response) {
    if(response){
      response.results[0].results.forEach(function(result){
        if (result.title.title.toLowerCase().indexOf(searchQuery) >= 0){
          arr.push(result)
        }
      })
    collection.remove({},function(err, doc){
      collection.insert(arr, function (err, docs) {
          res.render('search', {
            title: 'Financial Times Headlines',
            search: req.query.search
          })
      })
    });
  }
      })
      .catch(function (err) {
        console.log(err)
      });
  });

  router.post("/search", function(req, res, next) {
    var db = req.db;
    collection = db.get("searchcollection");
    collection.find({},function(err, results){
      res.json(results)
    });
  });

router.get("/headlines", function(req, res, next) {
  var db = req.db;
  collection = db.get("headlinecollection");
  collection.find({},function(err, results){
    res.json(results)
  });
});

router.post("/headlines", function(req, res) {
var query = req.body;
var db = req.db;
collection = db.get("headlinecollection");
var options = {
  method: 'POST',
  uri:"http://api.ft.com/content/search/v1",
  qs: {
    apiKey:process.env.FT_KEY
  },
  body: {
"queryString": "",
"queryContext": {
"curations": [
  "ARTICLES"
]
},
"resultContext" : {
"aspects" :[  "title","location","summary"],
}
},
  json: true
}
request(options).then(function (response) {
  if(response){
  collection.remove({},function(err, doc){
    collection.insert(response.results[0].results, function (err, docs) {
      collection.find({},function(err, results){
        res.json(results)
      })
    })
  });
} else {
  collection.find({},function(err, results){
    res.json(results)
  })
}
})
    .catch(function (err) {
      console.log(err)
    });
});

module.exports = router;
