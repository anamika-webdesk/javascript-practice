// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add the Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
// Display set.size
document.getElementById("demoAdd").innerHTML = letters.size;

// List all Elements
let text = "";
letters.forEach(function (value) {
  text += value + "<br>";
});
document.getElementById("demoForEach").innerHTML = text;
