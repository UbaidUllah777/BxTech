const ElprojectSnapsCol = document.querySelector(".projectSnaps");
const ElprojectDetails = document.querySelector(".projectDetails");
const FnRenderProjectDetails = () => {
  let singleProject = JSON.parse(sessionStorage.getItem("projId"));
  console.log(singleProject);

  ElprojectSnapsCol.innerHTML = "";
  ElprojectSnapsCol.innerHTML = `
  <div class="row">
  <div class="col-12 projectSnapsCol">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="${singleProject.images[0].image1}"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="${singleProject.images[0].image2}"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="${singleProject.images[0].image3}"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  </div>
  <div class="row pt-5">
  <div class="col-12">
    <h2>Project Description</h2>
    <br />
    <p class="projectDescriptiontext">
     ${singleProject.projFullDescrp}
    </p>
    <br />
    <h2>About Client</h2>
    <br />
    <p class="aboutclientText">
      ${singleProject.clientDesc}
    </p>
  </div>
  </div>
  `;
  ElprojectDetails.innerHTML = "";
  ElprojectDetails.innerHTML = `   
   <div class="row" id="projectNameId">
  <div class="col-12">
    <center>
      <h2><span class="projectName">${singleProject.projName} </span></h2>
    </center>
    <center><hr style="width: 70%" /></center>
  </div>
</div>
<div class="row" id="ProjectCategoryId">
  <div class="col-12">
    <h5>
      Category : <span class="ProjectCategory"> ${singleProject.projCategory}</span>
    </h5>
  </div>
</div>

<div class="row" id="ProjectClientId">
  <div class="col-12">
    <h5>Client : <span class="ProjectClient"> ${singleProject.clientName}</span></h5>
  </div>
</div>

<div class="row" id="ProjectDateId">
  <div class="col-12">
    <h5>
      Project Date : <span class="ProjectDate"> ${singleProject.ProjectDate}</span>
    </h5>
  </div>
</div>

<div class="row" id="ProjectDurationId">
  <div class="col-12">
    <h5>
      Project Duration :
      <span class="ProjectDuration"> ${singleProject.ProjectDuration}</span>
    </h5>
  </div>
</div>

<div class="row" id="ProjectUrlId">
  <div class="col-12">
    <h5>
      Project URL :
      <span class="ProjectUrl"
        ><a href=" MICmobiles.com">${singleProject.ProjectUrl}</a></span
      >
    </h5>
  </div>
</div>
<div class="row" id="servicsProvided">
  <div class="col-12 myServices">
    <h2>Services Provided</h2>
    <center><hr style="width: 90%" /></center>
    <br />
    <span class="spCategory">${singleProject.servicesProvided[0].service1}</span>
    <span class="spCategory"> ${singleProject.servicesProvided[0].service2}</span>
    <span class="spCategory">${singleProject.servicesProvided[0].service3}</span>
    <span class="spCategory">${singleProject.servicesProvided[0].service4}</span>
  </div>
</div>
<div class="row" id="IdustryVerticalId">
  <div class="col-12 myIdustryVertical">
    <h2>Industry Vertical</h2>
    <center><hr style="width: 90%" /></center>
    <br />
    <span class="iVCategory">${singleProject.industryVertical[0].indusrty1}</span>
  </div>
</div>

<div class="row" id="TechnologyUsedId">
  <div class="col-12 myTechnologyUsed">
    <h2>Technologies Used</h2>
    <center><hr style="width: 90%" /></center>
    <br />
    <span class="iVCategory">${singleProject.technologiesUsed[0].technology1}</span>
    <span class="iVCategory">${singleProject.technologiesUsed[0].technology2}</span>
    <span class="iVCategory">${singleProject.technologiesUsed[0].technology3}</span>
    <span class="iVCategory">${singleProject.technologiesUsed[0].technology4}</span>
  </div>
</div>
</div>`;
};
FnRenderProjectDetails();
