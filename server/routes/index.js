var express = require('express');
var router = express.Router();
var lib = require('../models/library');
var list = new lib.ItemLibrary();

list.addItem('Carrots', 5);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/items', function(req, res, next) {
  res.json(list.items);
});

router.post('/items', function(req, res, next) {
  list.addItem(req.body.name, req.body.price);
  console.log(req.body);
  res.json(list.items);
});

router.get('/items/:id', function(req, res, next) {
  var currentID = list.items.filter(function(item) {
    return item.id === +req.params.id;
  });
  console.log(currentID);
  res.json(currentID);
});

router.put('/items/:id', function(req, res, next) {
  var newName = req.params.name, item;
  console.log(req.params.name);
  for (item in list) {
    if (item.name !== newName) {
      item.name = newName;
      console.log(item.name);
    }
  }
  res.json(list.items);
});


module.exports = router;
