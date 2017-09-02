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

Hero.prototype.countTasks = function(){
  return this.tasks.length;
};

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
};

Hero.prototype.sortUrgency = function(task){
  var urgencyRanked = task.urgency.sort(function(a, b){
    return (b.price - a.price);
  });
  // console.log(urgencyRanked);
  return urgencyRanked;
};

module.exports = Hero;