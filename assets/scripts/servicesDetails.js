const ElHeaderservicesDetials = document.querySelector(
  ".HeaderservicesDetials "
);
const ElServicerowGrid = document.querySelector(".rowGrid");
const ElRowServiceDetailsRight = document.querySelector(
  ".rowServiceDetailsRight"
);
const ElDevelopmentHeadingText = document.querySelector(
  ".developmentHeadingText"
);

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
        <div class="col-md-7 col-12 indexHeaderimg">
            <img src="${singleserviceGrid.bannerImg}" class="indexRightIMG" alt="banner image" />
          </div>
          <div class="col-md-5 col-12 HeaderText">
            <div class="row">
              <div class="col-12">
                <h1>
                  ${singleserviceGrid.bannerH1}
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p>
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
        <div class="col-12 pb-5">
          <span>
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
        <button id="btnGetIntouch" class="info-modal2"  >GET IN TOUCH</button>
      
      </div>
    </div>
        `;
      ElDevelopmentHeadingText.innerHTML = `
      <div class="col-12">
      <center><h1>${singleserviceGrid.processHeading}</h1></center>
    </div>
      `;
      for (FirstStepDetail of singleserviceGrid.processStep1) {
        ElstepOne.innerHTML += `
        <li>${FirstStepDetail.step1Tag}</li>`;
      }

      for (secondStepDetail of singleserviceGrid.processStep2) {
        ElstepTwo.innerHTML += `
        <li>${secondStepDetail.step2Tag}</li>`;
      }
      for (thirdStepDetail of singleserviceGrid.processStep3) {
        ElstepThree.innerHTML += `
        <li>${thirdStepDetail.step3Tag}</li>`;
      }
      for (fourthStepDetail of singleserviceGrid.processStep4) {
        ElstepFour.innerHTML += `
        <li>${fourthStepDetail.step4Tag}</li>`;
      }
    }
  }
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
      <h1>Ready To Become A Digital Titan In Your Niche?</h1><br>
      <p>With modern technology, unparalleled experience & a desire for innovation, our team is ready to bring your digital business idea to life.</p>
    <br>
    <p>Fill in this form to start the process</p>
    </div>
  
  </div>
  <div class="col-sm-6 col-12 modaltRight ">
   <center><h1>Get In Touch With Us <hr style="max-width: 80%;"></h1> </center> <br>
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
