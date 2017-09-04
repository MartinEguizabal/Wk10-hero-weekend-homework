var assert = require("assert");
var Rat = require("../rat.js");
var Food = require("../food.js");

describe("Rat", function(){

  var rat1;
  var rat2;
  var food2;

  beforeEach(function(){
    rat1 = new Rat("Ralph");
    rat2 = new Rat("Tom");
    food2 = new Food("grass", 1, false);
  });

  it("rat touched food", function(){
    rat1.touchFood(food2);
    assert.strictEqual(food2.checkPoisonous(), true);
  });

});