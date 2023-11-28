const Rollbar = require("rollbar");

const btn = document.querySelector("button");

const clickHandler = () => rollbar.log("cat button on");
alert("The cat name is: Rascal");

btn.addEventListener("click", clickHandler);
