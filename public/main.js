const btn = document.querySelector("button");

const clickHandler = () => alert("The cat name is: Rascal");

const buttonClicked = btn.addEventListener("click", clickHandler);
