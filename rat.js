var Rat = function(name){
  this.name = name;
};

Rat.prototype.touchFood = function(food){
  food.setToPoisonous();
}

module.exports = Rat;