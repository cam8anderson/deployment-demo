const btn = document.querySelector("button");

const clickHandler = () => {
  alert("The cat name is: Rascal"), rollbar.log("cat button on");
};

btn.addEventListener("click", clickHandler);
