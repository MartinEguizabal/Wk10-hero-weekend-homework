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
    food1 = new Food("steak", 8);
    food2 = new Food("grass", 1);
    food3 = new Food("rabbit", 5);
    food4 = new Food("cheese burger", 6);
    food5 = new Food("slurpy", 3);
  });
});