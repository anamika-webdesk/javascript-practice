class Car {
  constructor(name, year) {
    //The constructor method is called automatically when a new object is created.
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCarConstructorMethod = new Car("Ford", 2014);
document.getElementById("demoConstructorMethod").innerHTML =
  "My car is " + myCarConstructorMethod.age() + " years old.";
const myCarClass = new Car("Ford", 2014);
document.getElementById("demoClass").innerHTML =
  myCarClass.name + " " + myCarClass.year;
