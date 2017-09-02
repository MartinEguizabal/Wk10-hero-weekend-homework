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
  if(this.food === food.name){
    this.health += (food.value *1.5);
  } else {
    this.health += food.value;
  };
};

module.exports = Hero;