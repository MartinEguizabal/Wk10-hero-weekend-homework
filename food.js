var Food = function(name, value, poisonous){
  this.name = name;
  this.value = value;
  this.poisonous = poisonous;
};

Food.prototype.checkPoisonous = function(){
  return this.poisonous;
}

Food.prototype.setToPoisonous = function(){
  this.poisonous = true;
}

module.exports = Food;