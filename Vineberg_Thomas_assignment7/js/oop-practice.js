/*eslint-env browser*/

//STEP 1
/*
function Cat() {}

var Dog = function() {}

//STEP 2

var persian = new Cat();

var corgi = new Dog();

//STEP 3

function Animal() {
        window.console.log("The Animal has been created.");
    } 
var theBeast = new Animal();

//STEP 4

function Animal(beast) {
    "use strict";
    window.console.log(beast);
} 
var yourBeast = new Animal("The Beast has been created.");

//STEP 5

function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

var aBeast = new Animal("Dog", "Corgi", "Yellow", 1, 2);

//STEP 6

for (var property in aBeast) {
    window.console.log(property);
}

//STEP 7

function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
Animal.prototype.speak = function() {
    if (this.type === "dog") {
        window.console.log("The " + this.color + " dog is barking!");
    } else if (this.type === "cat") {
        window.console.log("The " + this.color + " cat is meowing!");
    }
}
}

var aNewBeast = new Animal("dog", "corgi", "yellow", 1, 2);
aNewBeast.speak();

*/
//STEP 8

function Animal(type, breed, color, height, length) {
    "use strict";
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    var checkType = function() {
        if (type === "dog") {
            return "dog";
        } else if 
            (type === "cat") {
            return "cat";
        }
    }
    
    }
    this.speak = function() {
        window.console.log("The " + this.color + checkType().value + " is making a noise!"); 
    }

var aNewBeast = new Animal("dog", "corgi", "yellow", 1, 2);
aNewBeast();


