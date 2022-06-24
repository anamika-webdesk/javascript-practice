const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
document.getElementById("demoObjectEntriesBasic").innerHTML =
  Object.entries(person);

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}

document.getElementById("demoObjectEntriesLoop").innerHTML = text;

const healthyFruits = { Bananas: 300, Oranges: 200, Apples: 500 };

const myMap = new Map(Object.entries(healthyFruits));

document.getElementById("demoObjectEntriesMap").innerHTML = myMap;
