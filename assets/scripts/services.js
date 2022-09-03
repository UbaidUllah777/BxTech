const btnGetStarted = document.querySelector(".btnGetStarted");

const element = document.getElementById("footer");

const FnGetstarted = () => {
  element.scrollIntoView();
};

btnGetStarted.addEventListener("click", FnGetstarted);
