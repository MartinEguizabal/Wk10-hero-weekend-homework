var Task = function(difficulty, urgency, reward, task_complete){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.task_complete = task_complete;
};

Task.prototype.checkStatus = function(){
  return this.task_complete;
}

Task.prototype.completed = function(status){
  this.task_complete = status;
};

module.exports = Task;

