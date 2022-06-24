const cars = ["BMW", "Volvo", "Mini", "Tata", "jaguar"];
let text = "";
for (let x of cars) {
  text += x + "<br>";
}
document.getElementById("demoForOf").innerHTML = text;

const person = { fname: "Reeju", lname: "Bhattacherji", age: 21 };
let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
document.getElementById("demoForIn").innerHTML = txt;
