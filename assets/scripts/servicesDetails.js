const ElHeaderservicesDetials = document.querySelector(".headerContainer ");
const ElServicerowGrid = document.querySelector(".rowGrid");
const ElRowServiceDetailsRight = document.querySelector(
  ".rowServiceDetailsRight"
);
const ElDevelopmentHeadingText = document.querySelector(
  ".developmentHeadingText"
);
const Elpaginationcontainer = document.querySelector(".pagination-container");
const ElstepOneHeading = document.querySelector(".stepOneHeading");
const ElstepTwoHeading = document.querySelector(".stepTwoHeading");
const ElstepThreeHeading = document.querySelector(".stepThreeHeading");
const ElstepFourHeading = document.querySelector(".stepFourHeading");

const ElstepOne = document.querySelector(".stepOne");
const ElstepTwo = document.querySelector(".stepTwo");
const ElstepThree = document.querySelector(".stepThree");
const ElstepFour = document.querySelector(".stepFour");

let myService = sessionStorage.getItem("service");

if (ElServicerowGrid && ElRowServiceDetailsRight && ElDevelopmentHeadingText) {
  ElHeaderservicesDetials.innerHTML = "";
  ElServicerowGrid.innerHTML = "";
  ElRowServiceDetailsRight.innerHTML = "";
  ElDevelopmentHeadingText.innerHTML = "";
  for (singleserviceGrid of ourServiceDetails) {
    if (singleserviceGrid.id === myService) {
      ElHeaderservicesDetials.innerHTML = `
        <div class="col-md-7 col-12 HeaderCol">
            <img src="${singleserviceGrid.bannerImg}"  class="headerIMG" alt="banner image" />
          </div>
          <div class="col-md-5 col-12 HeaderText">
            <div class="row">
              <div class="col-12">
                <h1 style="color: #011945; ">
                  ${singleserviceGrid.bannerH1}
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p style="color: #28c23e;">
                ${singleserviceGrid.bannerPragraph}
                </p>
              </div>
            </div>
           
          </div>
        `;
      for (singleserviceGridDesc of singleserviceGrid.serviceCategDetails) {
        ElServicerowGrid.innerHTML += `
      <div class="col-10 col-sm-5 gridServices">
              <div class="row pt-2 pb-2">
                <div class="col-3">
                  <img
                    src="${singleserviceGridDesc.categImg}"
                    alt="${singleserviceGridDesc.categHeading}"
                  />
                </div>
                <div class="col-9 text-left">
                  <h3>${singleserviceGridDesc.categHeading}</h3>
                </div>
              </div>
              <div class="row pt-2 pb-2">
                <div class="col-12">
                  <p>
                   ${singleserviceGridDesc.categDesc}
                  </p>
                </div>
              </div>
            </div>
      `;
      }
      ElRowServiceDetailsRight.innerHTML = `
        <div class="row ">
        <div class="col-12 pb-5 pt-5 ">
          <span class="pt-5">
            ${singleserviceGrid.serviceHeading}
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>
          ${singleserviceGrid.serviceLongDesc}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button id="btnGetIntouch" class="info-modal2"  >Get In Touch</button>
        </div>
      </div>
    </div>
        `;
      ElDevelopmentHeadingText.innerHTML = `
      <div class="col-12">
      <center><h2>${singleserviceGrid.processHeading}</h2></center>
    </div>
      `;
      ElstepOneHeading.innerHTML = `${singleserviceGrid.step1Heading}`;
      for (FirstStepDetail of singleserviceGrid.processStep1) {
        ElstepOne.innerHTML += `
        <li>${FirstStepDetail.step1Tag}</li>`;
      }

      ElstepTwoHeading.innerHTML = `${singleserviceGrid.step2Heading}`;
      for (secondStepDetail of singleserviceGrid.processStep2) {
        ElstepTwo.innerHTML += `
        <li>${secondStepDetail.step2Tag}</li>`;
      }

      ElstepThreeHeading.innerHTML = `${singleserviceGrid.step3Heading}`;
      for (thirdStepDetail of singleserviceGrid.processStep3) {
        ElstepThree.innerHTML += `
        <li>${thirdStepDetail.step3Tag}</li>`;
      }

      ElstepFourHeading.innerHTML = `${singleserviceGrid.step4Heading}`;
      for (fourthStepDetail of singleserviceGrid.processStep4) {
        ElstepFour.innerHTML += `
        <li>${fourthStepDetail.step4Tag}</li>`;
      }
    }
  }
  var paginationNumbers = document.getElementById("pagination-numbers");
  const paginatedList = document.querySelector(".rowGrid");
  var listItems = paginatedList.querySelectorAll(".gridServices");

  var paginationLimit = 4;
  var pageCount = Math.ceil(listItems.length / paginationLimit);
  var currentPage = 1;
  FnLoadPagination();
}

// SHOWING or HIDING MODAL: START

const backdropElement = document.getElementById("backdrop");
const modalLinkElement = document.querySelector(".info-modal");
const modalLinkElement2 = document.querySelector(".info-modal2");

let infoModal;

function toggleBackdrop() {
  backdropElement.classList.toggle("visible");
}

function presentInfoModal() {
  toggleBackdrop();

  infoModal = document.createElement("div");
  infoModal.classList.add("modal");
  infoModal.innerHTML = `
  
  
  <div class="row OurFullModal">
  <div class="col-sm-6 col-12 modaltLeft">
    <div class="leftModalData">
      <h1>Looking for an Outstanding Development Company to Outsource your Project !</h1><br>
      <p>That excels in state-of-the-art modern software development technology, full-stack services, years of experience, and a desire for quality & innovation; Bx technologies' diverse team of experts is one click away from your business idea to turning it into a reality.
      </p>
    <br>
    <p>Fill in this form to start the process</p>
    </div>
  
  </div>
  <div class="col-sm-6 col-12 modaltRight ">
   <center><h1>Drop Us a Line Here <hr style="max-width: 80%;"></h1> </center> <br>
 <form>
    <div class="col-12 mb-3">
      <input type="text" class="form-control" id="formName" placeholder="Name" aria-describedby="emailHelp">
   
    </div>
    <div class=" col-12 mb-3">
      <input type="text" class="form-control" placeholder="Email address" id="formEmail">
    </div>
    <div class=" col-12 mb-3">
      <input type="number" class="form-control" placeholder="Contact Number" id="formContactNumber">
    </div>
    
    <div class=" col-12 mb-3">
      <textarea class="form-control" rows="3" placeholder="Details" required></textarea>
    </div>
    <div clas="row">
        <div class="col-12">
        <button type="submit" class=" btnModalSubmit ">Submit</button>
        </div>
    </div>
  </form>
  
    <div class="col-12"></div>
    <div class="col-12"></div>
  </div>
</div>
            
  `;

  document.body.appendChild(infoModal);
}

function hideInfoModal() {
  toggleBackdrop();
  document.body.removeChild(infoModal);
}
if (backdropElement) {
  backdropElement.addEventListener("click", hideInfoModal);
}
if (modalLinkElement) {
  modalLinkElement.addEventListener("click", presentInfoModal);
}
if (modalLinkElement2) {
  modalLinkElement2.addEventListener("click", presentInfoModal);
}

// SHOWING or HIDING MODAL:End

// Pagination :START

function appendPageNumber(index) {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers() {
  if (pageCount > 1) {
    for (let i = 1; i <= pageCount; i++) {
      appendPageNumber(i);
    }
  } else {
    Elpaginationcontainer.classList.add("hidden");
  }
}

function handleActivePageNumber() {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
}

function setCurrentPage(pageNum) {
  currentPage = pageNum;
  handleActivePageNumber();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
}
function FnLoadPagination() {
  getPaginationNumbers();
  setCurrentPage(1);

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
}

// Pagination END
