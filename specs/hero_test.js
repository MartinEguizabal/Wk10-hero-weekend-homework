var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");

describe("Hero", function(){

  var hero1;

  beforeEach(function(){
    hero1 = new Hero("Frank", 10, "steak");
  });

  it("can say name", function(){
    assert.strictEqual(hero1.sayName(), "My name is Frank");
  });

});
