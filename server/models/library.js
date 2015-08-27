function ItemLibrary() {
  this.items = [];
  this.id = 0;
}

ItemLibrary.prototype.addItem = function(name, price) {
  var newItem = {
    name: name,
    id: this.id,
    price: +price
  };
  this.items.push(newItem);
  this.id += 1;

};

module.exports = {
  ItemLibrary: ItemLibrary
};
