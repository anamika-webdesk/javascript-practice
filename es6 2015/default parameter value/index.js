function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
document.getElementById("demoDefaultParameter").innerHTML = myFunction(5);
