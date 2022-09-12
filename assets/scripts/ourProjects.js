//Vendor Section :Start
const ElAllProjectItemsContainer = document.querySelector(".allProjectItems");
//Vendor Section :ENDS

// Redering Our Projects :Start
const FnRenderOurProjects = () => {
  if (ElAllProjectItemsContainer) {
    ElAllProjectItemsContainer.innerHTML += `
    <div class="row projectItemS">
  
    </div>

    `;
  }
  const ElProject = document.querySelector(".projectItemS");
  let counter = 0;
  for (const singleProject of projectsByBxTech) {
    // console.log(singleProject);
    // console.log(`${singleProject.images[0].image1}`);

    if (counter < 3) {
      if (ElProject) {
        ElProject.innerHTML += `

        <div class="col-sm-3 col-10 projectIteM">
      <div class="row projectIteM-Image">
            <div class="col-12">
              <img
                src="${singleProject.images[0].image1}"
                alt="${singleProject.projName}"
              />
            </div>
          </div>
          <div class="row projectIteM-Title">
            <div class="col-12">
              <br />
              <center><h5>${singleProject.projName}</h5></center>
            </div>
          </div>
          <div class="row">
            <div class="col-12 projectIteM-Desc">
              <p>
               ${singleProject.projShortDescp}
              </p>
            </div>
            </div>
        </div>

      `;
      }
    }
    counter = counter + 1;
  }
};
// Redering Our Projects :END

// By click Scroll into view :Start
const btnGetStarted = document.getElementById("btnGetStarted");

const element = document.getElementById("emptyRow");

const FnGetstarted = () => {
  element.scrollIntoView();
};

btnGetStarted.addEventListener("click", FnGetstarted);

// By click Scroll into view :END
// DataBase Of Our Projects :Start

const projectsByBxTech = [
  {
    id: 0,
    projName: "HashTag Thai Massage",
    projShortDescp:
      " Website for managing operations and bookings at hastage thai massage center Duisburg Germany.",
    projFullDescrp: "This is Full Description of my First Project",
    images: [
      {
        image1: "assets/images/projects images/hastageImage1.png",
        image2: "",
        image3: "",
        image4: "",
      },
    ],
    servicesProvided: [
      {
        service1: "",
        service2: "",
        service3: "",
        service4: "",
        service5: "",
        service6: "",
      },
    ],
    industryVertical: [
      {
        indusrty1: "",
        indusrty2: "",
        indusrty3: "",
        indusrty4: "",
      },
    ],
    technologiesUsed: [
      {
        technology1: "",
        technology2: "",
        technology3: "",
        technology4: "",
        technology5: "",
      },
    ],
    clientDesc: "This is Our 1st Client",
  },
  {
    id: 1,
    projName: "Gardening Services",
    projShortDescp:
      "Website for garden services and bookings in munster Germany",
    projFullDescrp: "This is Full Description of my second Project",
    images: [
      {
        image1: "assets/images/projects images/gardenImage1.png",
        image2: "",
        image3: "",
        image4: "",
      },
    ],
    servicesProvided: [
      {
        service1: "",
        service2: "",
        service3: "",
        service4: "",
        service5: "",
        service6: "",
      },
    ],
    industryVertical: [
      {
        indusrty1: "",
        indusrty2: "",
        indusrty3: "",
        indusrty4: "",
      },
    ],
    technologiesUsed: [
      {
        technology1: "",
        technology2: "",
        technology3: "",
        technology4: "",
        technology5: "",
      },
    ],
    clientDesc: "This is Our 2nd Client",
  },
  {
    id: 2,
    projName: "ILed Screens",
    projShortDescp:
      "website for the iledscreen bookings and showcasing LED screens products to customers ",
    projFullDescrp: "This is Full Description of my 3rd Project ",
    images: [
      {
        image1: "assets/images/projects images/iledscreenImage1.png",
        image2: "",
        image3: "",
        image4: "",
      },
    ],
    servicesProvided: [
      {
        service1: "",
        service2: "",
        service3: "",
        service4: "",
        service5: "",
        service6: "",
      },
    ],
    industryVertical: [
      {
        indusrty1: "",
        indusrty2: "",
        indusrty3: "",
        indusrty4: "",
      },
    ],
    technologiesUsed: [
      {
        technology1: "",
        technology2: "",
        technology3: "",
        technology4: "",
        technology5: "",
      },
    ],
    clientDesc: "This is Our 3rd Client",
  },
  {
    id: 3,
    projName: "4th Project name",
    projShortDescp: "This is Short description of My 4th Project",
    projFullDescrp: "This is Full Description of my 4th Project",
    imgages: [
      {
        image1: "",
        image2: "",
        image3: "",
        image4: "",
      },
    ],
    servicesProvided: [
      {
        service1: "",
        service2: "",
        service3: "",
        service4: "",
        service5: "",
        service6: "",
      },
    ],
    industryVertical: [
      {
        indusrty1: "",
        indusrty2: "",
        indusrty3: "",
        indusrty4: "",
      },
    ],
    technologiesUsed: [
      {
        technology1: "",
        technology2: "",
        technology3: "",
        technology4: "",
        technology5: "",
      },
    ],
    clientDesc: "This is Our 4th Client",
  },
  {
    id: 4,
    projName: "5th Project Name",
    projShortDescp: "This is Short description of My 5th Project",
    projFullDescrp: "This is Full Description of my 5th Project",
    imgages: [
      {
        image1: "",
        image2: "",
        image3: "",
        image4: "",
      },
    ],
    servicesProvided: [
      {
        service1: "",
        service2: "",
        service3: "",
        service4: "",
        service5: "",
        service6: "",
      },
    ],
    industryVertical: [
      {
        indusrty1: "",
        indusrty2: "",
        indusrty3: "",
        indusrty4: "",
      },
    ],
    technologiesUsed: [
      {
        technology1: "",
        technology2: "",
        technology3: "",
        technology4: "",
        technology5: "",
      },
    ],
    clientDesc: "This is Our 5th Client",
  },
  {
    id: 5,
    projName: "6th project Name",
    projShortDescp: "This is Short description of My 6th Project",
    projFullDescrp: "This is Full Description of my 6th Project",
    imgages: [
      {
        image1: "",
        image2: "",
        image3: "",
        image4: "",
      },
    ],
    servicesProvided: [
      {
        service1: "",
        service2: "",
        service3: "",
        service4: "",
        service5: "",
        service6: "",
      },
    ],
    industryVertical: [
      {
        indusrty1: "",
        indusrty2: "",
        indusrty3: "",
        indusrty4: "",
      },
    ],
    technologiesUsed: [
      {
        technology1: "",
        technology2: "",
        technology3: "",
        technology4: "",
        technology5: "",
      },
    ],
    clientDesc: "This is Our 6th Client",
  },
];

// DataBase Of Our Projects :END

// Functions Calls : START
FnRenderOurProjects();
// Functions Calls : ENDS
