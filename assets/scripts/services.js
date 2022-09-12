const btnGetStarted = document.querySelector(".btnGetStarted");
const btnGetInTouh = document.getElementById("btnGetIntouch");

const element = document.getElementById("emptyRow");

const FnGetstarted = () => {
  element.scrollIntoView();
};

btnGetStarted.addEventListener("click", FnGetstarted);

btnGetInTouh.addEventListener("click", FnGetstarted);
