//Vendor Section :Start

//Vendor Section :ENDS

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
    projName: "First Project Name",
    projShortDescp: "This is Short description of My First Project",
    projFullDescrp: "This is Full Description of my First Project",
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
    clientDesc: "This is Our 1st Client",
  },
  {
    id: 1,
    projName: "Second Project Name",
    projShortDescp: "This is Short description of My Second Project",
    projFullDescrp: "This is Full Description of my second Project",
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
    clientDesc: "This is Our 2nd Client",
  },
  {
    id: 2,
    projName: "3rd Project Name",
    projShortDescp: "This is Short description of My 3rd Project ",
    projFullDescrp: "This is Full Description of my 3rd Project ",
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

// Redering Our Projects :Start
const FnRenderOurProjects = () => {
  for (const singleProject of projectsByBxTech) {
  }
};
// Redering Our Projects :END
