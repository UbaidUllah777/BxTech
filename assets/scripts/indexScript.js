// By click Scroll into view :Start
const btnGetStarted = document.getElementById("btnGetStarted");

const btnTalkToUs = document.getElementById("btnTalkToUs");

const element = document.getElementById("emptyRow");

const FnGetstarted = () => {
  element.scrollIntoView();
};

btnGetStarted.addEventListener("click", FnGetstarted);
btnTalkToUs.addEventListener("click", FnGetstarted);
// By click Scroll into view :END

//Show Service Details : START
const FnShowServiceDetail = (serviceId) => {};
//Show Service Details : END
