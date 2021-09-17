let title = document.querySelector(".Hello");
console.dir(title);

function hadleHelloClick() {
  console.log("test");
}

function changeInnerText() {
  console.log("ischanged");
}

title.addEventListener("click", hadleHelloClick);
