var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");

describe("Hero", function(){

  var hero1;
  var food1;
  var food2;
  var food3;
  var food4;
  var food5;

  beforeEach(function(){
    hero1 = new Hero("Frank", 2, "steak");
    food1 = new Food("steak", 8);
    food2 = new Food("grass", 1);
    food3 = new Food("rabbit", 5);
    food4 = new Food("cheese burger", 6);
    food5 = new Food("slurpy", 3);
  });

  it("can say name", function(){
    assert.strictEqual(hero1.sayName(), "My name is Frank");
  });

  it("can eat", function(){
    hero1.eatFood(food3);
    assert.strictEqual(hero1.health, 7);
  });

  it("can eat favourite food", function(){
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 14);
  })

});
