var assert = require("assert");
var Task = require("../task.js");

describe("Task", function(){

  var task1;

  beforeEach(function(){
    task1 = new Task(3, 6, "gold coin", false);
  });

  it("can check task is completed__start false", function(){
    assert.strictEqual(task1.checkStatus(), false);
  })

  it("can mark test as completed", function(){
    task1.completed(true);
    assert.strictEqual(task1.checkStatus(), true);
  })
});