const ElprojectSnapsCol = document.querySelector(".projectSnaps");
const ElprojectDetails = document.querySelector(".projectDetails");
const FnRenderProjectDetails = () => {
  let singleProject = JSON.parse(sessionStorage.getItem("projId"));

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
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
      
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
  const ElcarouselImage = document.querySelector(".carousel-inner");
  let imageNo = 0;
  for (singleCarouselImage of singleProject.images) {
    if (imageNo == 0) {
      ElcarouselImage.innerHTML = `
      <div class="carousel-item active">
      <img
        src="${singleCarouselImage.image}"
        class="d-block w-100"
        alt="..."
      />
    </div>
      `;
    } else {
      ElcarouselImage.innerHTML += `
      <div class="carousel-item ">
      <img
        src="${singleCarouselImage.image}"
        class="d-block w-100"
        alt="..."
      />
    </div>
      `;
    }
    imageNo = imageNo + 1;
  }

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
  <div class="col-4 "> 
  <h6 class=" row text-right">
     Category :</h6></div>
   <div class="col-8 ">
         <span class="ProjectCategory row text-right"> ${singleProject.projCategory}</span>
  </div>
</div>

<div class="row" id="ProjectClientId">
<div class="col-4 "> 
<h6 class=" row text-right">
Client : </h6></div>
  <div class="col-8">
    <span class="ProjectClient row text-right"> ${singleProject.clientName}</span>
  </div>
</div>



<div class="row" id="ProjectDurationId">
<div class="col-4 "> 
<h6 class=" row text-right">
 Duration :</h6></div>
  <div class="col-8">
   
      <span class="ProjectDuration row text-right"> ${singleProject.ProjectDuration}</span>
  
  </div>
</div>

<div class="row" id="ProjectUrlId">
<div class="col-4 "> 
<h6 class=" row text-right">
 URL :</h6></div>
  <div class="col-8">
      <span class="ProjectUrl  row text-right"
        ><a class=" row text-right" href="${singleProject.ProjectUrl}">${singleProject.ProjectUrl}</a></span
      >
    
  </div>
</div>
<div class="row" id="servicsProvided">
<div class="col-12 myServices">
    <h2>Services Provided</h2>
    <center><hr style="width: 90%" /></center>
    <br />
  </div>
  
</div>
<div class="row" id="IdustryVerticalId">
 <div class="col-12 myIdustryVertical">
    <h2>Industry Vertical</h2>
    <center><hr style="width: 90%" /></center>
    <br />
     </div>


</div>

<div class="row" id="TechnologyUsedId">


<div class="col-12 myTechnologyUsed">
    <h2>Technologies Used</h2>
    <center><hr style="width: 90%" /></center>
    <br />
    </div>
  
</div>
</div>`;

  const ElservicsProvided = document.querySelector(".myServices");
  const ElIdustryVertical = document.querySelector(".myIdustryVertical");
  const ElTechnologyUsed = document.querySelector(".myTechnologyUsed");
  for (singleService of singleProject.servicesProvided) {
    ElservicsProvided.innerHTML += `
    
    <span class="spCategory">${singleService.service}</span>

    `;
  }
  for (singleIndustry of singleProject.industryVertical) {
    ElIdustryVertical.innerHTML += `
    
    <span class="spCategory">${singleIndustry.indusrty}</span>
    `;
  }

  for (singleTechnology of singleProject.technologiesUsed) {
    ElTechnologyUsed.innerHTML += `
    <span class="iVCategory">${singleTechnology.technology}</span>
 
    `;
  }
};
FnRenderProjectDetails();
