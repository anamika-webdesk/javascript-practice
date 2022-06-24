const numbers = [4, 9, 16, 25, 29];

document.getElementById("demoArrayFindIndex").innerHTML =
  "First number over 18 has index " + numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
