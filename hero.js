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
  } else if (food.poisonous === true){
    this.health -= food.value;
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

Hero.prototype.sortByUrgency = function(){
  var urgencyRanked = this.tasks.sort(function(a, b){
    return (b.urgency - a.urgency);
  });
  return urgencyRanked;
};

// Hero.prototype.viewTasksByCompletion = function(status){
//   var tasksByStatus = this.tasks.map(function(task){
//     if(task.task_complete === status){
//       return task.printTask();
//     }
//   });
//   console.log(tasksByStatus);
//   return tasksByStatus;
// }

// removeAndClone: function (arr, valueToRemove) {
//   return arr.filter(function(item){
//     return item !== valueToRemove;
//   })
// }

Hero.prototype.viewTasksByCompletion = function(status){
  return this.tasks.filter(function(task){
    return task.task_complete === status;
  });
};

Hero.prototype.loseHealth = function(amount){
  this.health += amount;
};

module.exports = Hero;