let myFunction = () => {
  var f_num = parseInt(document.getElementById("first_num").value);
  var s_num = parseInt(document.getElementById("second_num").value);
  return f_num * s_num;
};
document.getElementById("demo").innerHTML = myFunction();

var thisArrow;
thisArrow = function () {
  document.getElementById("demoArrow").innerHTML += this;
};
//The window object calls the function:
window.addEventListener("load", thisArrow);
//A button object calls the function:
document.getElementById("btnArrow").addEventListener("click", thisArrow);

var thisFunc;
thisFunc = () => {
  document.getElementById("demoFunc").innerHTML += this;
};
//The window object calls the function:
window.addEventListener("load", thisFunc);
//A button object calls the function:
document.getElementById("btnFunc").addEventListener("click", thisFunc);
