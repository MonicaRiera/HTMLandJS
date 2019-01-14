console.log("Hello Ferran!");

let text = document.getElementById("paragraph");
text.textContent = "How are you feeling today?";
console.log(text.textContent);

let container = document.getElementById("container");
let newText = document.createElement("p");
newText.textContent = text.textContent;
container.appendChild(newText);

text.onmouseover = function () {
    newParagraph();
};

function newParagraph() {
    let paragraph = document.createElement("p");
    paragraph.textContent = "Mouse detected";
    container.appendChild(paragraph);
}