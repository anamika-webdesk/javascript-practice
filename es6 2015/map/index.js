// Create a new Map()
const healthyFruits = new Map([
  ["apples", 7000],
  ["oranges", 3000],
  ["bananas", 2000],
]);
document.getElementById("demoNewMap").innerHTML = healthyFruits.get("apples"); //The get() method gets the value of a key in a Map

// Create a Map
const carCost = new Map(); //You can create a Map by passing an Array to the new Map() constructor:
// Set Map Values
carCost.set("bmw", 500); //The set() method sets the value of a key in a Map
carCost.set("volvo", 300);
carCost.set("audi", 200);
//The set() method can also be used to change existing Map values:
document.getElementById("demoMapSet").innerHTML = carCost.get("bmw"); //The get() method gets the value of a key in a Map

document.getElementById("demoMapSize").innerHTML = healthyFruits.size; //The size property returns the number of key-value pairs in a Map

// Create Objects
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };

// Create a new Map
const fruits = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

// Display Object Type
document.getElementById("demoMapKeyValueObject").innerHTML = fruits;
