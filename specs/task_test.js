var assert = require("assert");
var Task = require("../task.js");

describe("Task", function(){

  var task1;
  var task2;
  var task3;

  beforeEach(function(){
    task1 = new Task(3, 6, "gold coin", false);
    task2 = new Task(7, 2, "silver coin", false);
    task3 = new Task(4, 8, "diamond", false);
  });

  it("can check task is completed__start false", function(){
    assert.strictEqual(task1.checkStatus(), false);
  })

  it("can mark test as completed", function(){
    task1.completed(true);
    assert.strictEqual(task1.checkStatus(), true);
  })
});