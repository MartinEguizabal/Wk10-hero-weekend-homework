var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.food = food;
  this.tasks = [];
}

Hero.prototype.sayName = function(){
  return "My name is " + this.name; 
};

Hero.prototype.eatFood = function(food){
  this.health += food.value;
}

module.exports = Hero;