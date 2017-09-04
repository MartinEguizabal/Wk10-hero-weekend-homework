var assert = require("assert");
var Food = require("../food.js");
var Hero = require("../hero.js");

describe("Food", function(){

  var food1;
  var food2;
  var food3;
  var food4;
  var food5;

  beforeEach(function(){
    food1 = new Food("steak", 8, false);
    food2 = new Food("grass", 1, false);
    food3 = new Food("rabbit", 5, false);
    food4 = new Food("cheese burger", 6, false);
    food5 = new Food("slurpy", 3, false);
  });

  it("can set food to poisonous", function(){
    food1.setToPoisonous();
    assert.strictEqual(food1.checkPoisonous(), true);
  })
});