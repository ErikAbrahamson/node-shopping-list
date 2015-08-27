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
  var currentItemByID = list.items.filter(function(item) {
    return item.id === +req.params.id;
  });
  console.log(currentItemByID);
  res.json(currentItemByID);
});

router.delete('/items', function(req, res, next) {
  list.items.splice([req.params.id - 1], 1);
  res.json(list.items);
});

router.put('/items/:id', function(req, res, next) {
  list.items[req.params.id].name = req.params.name;
  res.json(list.items);
});


module.exports = router;
