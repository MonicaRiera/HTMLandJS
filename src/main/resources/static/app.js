console.log("Hello Ferran!");

let text = document.getElementById("paragraph");
text.textContent = "Put the mouse over here!";
console.log(text.textContent);

let container = document.getElementById("container");
let newText = document.createElement("p");
newText.textContent = text.textContent;
container.appendChild(newText);

let counter = 0;
text.onmouseover = function () {
    counter++;
    newText.textContent = "Mouse detected " + counter + " times";
};
