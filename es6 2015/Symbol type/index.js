const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let id = Symbol("id");
person[id] = 140353;

document.getElementById("demoSymbol").innerHTML = person[id] + " " + person.id;
console.log(Symbol("id") == Symbol("id")); // false
