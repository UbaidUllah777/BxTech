//Vendor Section :Start
const ElAllProjectItemsContainer = document.querySelector(".items-container");
//Vendor Section :ENDS

// variables section : Start
const SYSTEMS_ANALYSIS_DESIGN = "System Analysis & Design";
const USER_INTERFACE_DESIGN = "UI/UX Design";
const SOFTWRE_ENGINEERING = "Software Engineering";
const Web_DEVELOPMENT = "Web App Development";
const CUSTOM_SOFTWAE_DEVELOPMENT = "Custom Software Development";
const CLOUD_DEPLOYMENT = "AppLication Deployment";
const DATA_ANALYSIS = "Data Analytics";
const SOFTWARE_TESTING = "Software Testing";
const QUALITY_ASSURENCE = "Quality Assurence";
const SEO = "Search Engine Optimization";
const PRODUCT_MANAGEMENT = "Project Management";
const TECHNOLOGY_CONSULTANCY = "Technology Consultancy";
const MOBILE_APP_DEVELOPMENT = "Mobile App Development";
const ECOMMERECE_INDUSTRY = "e-Commerece";
const SERVICES_INDUSTRY = "Services Industry";
const ELEARNING_INDUSTRY = "E-learning";
const HEALTH_CARE_INDUSTRY = "Health Care";
const CUSTOM_SOFTWARE_INDUSTRY = "Custom Software Development";
const TELECOMMUNICATION_IoTS = "IoT'S and Blockchain";
const WORDPRESS = "Word Press";
const JAVASCRIPT = "Java Script";
const MY_SQL = "MySQL";
const BOOTSTRAP = "Bootstrap";
const REACT = "React";
const REACT_NATIVE = "React Native";
const VUEJS = "vue Js";
const MONGODB = "MongoDB";
const CODEIGNITER = "Codenigiter";
const RUBY_ON_RIALS = "Ruby on Rails";
const JAVA = "Java";
const CSHARP = "C#";
const DOT_NET_FRAMEWORK = ".Net Framework";
const POSTMAN = "Postman";
const SELENIUM = "Selenium";
const PYTHON = "Python";
const DJANGO = "Django";
const MERERN_STACK = "Meren Stack";
const MEAN_STACK = "Mean Stack";

// variables section : Ends
// Redering Our Projects :Start
const FnRenderOurProjects = () => {
  // if (ElAllProjectItemsContainer) {
  //   ElAllProjectItemsContainer.innerHTML += `

  //   `;
  // }
  //const ElProject = document.querySelector(".projectItemS");
  let counter = 0;
  for (const singleProject of projectsByBxTech) {
    // console.log(singleProject);
    // console.log(`${singleProject.images[0].image1}`);

    if (counter < projectsByBxTech.length) {
      if (ElAllProjectItemsContainer) {
        ElAllProjectItemsContainer.innerHTML += `
        <div class="item-box projectIteM" >
        <div class="col-sm-12 col-10 ">
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
    projFullDescrp:
      "Hashtag Thai massage is well known massage center in Duisburg Germany. The client wanted to scale their business and to develop a website for showcasing their services to customers and to book orders oniline. BX technologies developed a simple and interactive website in order to slove the problem being face by the cleint",
    images: [
      {
        image1: "assets/images/projects images/hastageImage1.png",
        image2: "assets/images/projects images/hastageImage2.png",
        image3: "assets/images/projects images/hastageImage3.png",
        image4: "assets/images/projects images/hastageImage4.png",
      },
    ],
    servicesProvided: [
      {
        service1: USER_INTERFACE_DESIGN,
        service2: SYSTEMS_ANALYSIS_DESIGN,
        service3: Web_DEVELOPMENT,
        service4: CLOUD_DEPLOYMENT,
        service5: SOFTWARE_TESTING,
        service6: "",
      },
    ],
    industryVertical: [
      {
        indusrty1: ECOMMERECE_INDUSTRY,
        indusrty2: "",
        indusrty3: "",
        indusrty4: "",
      },
    ],
    technologiesUsed: [
      {
        technology1: BOOTSTRAP,
        technology2: JAVASCRIPT,
        technology3: SELENIUM,
        technology4: WORDPRESS,
        technology5: "",
      },
    ],
    clientDesc:
      "Hashtag Thai Massage is popular Thai massage service providers based in duisburg Germany",
  },
  {
    id: 1,
    projName: "Gardening Services",
    projShortDescp:
      "Website for garden services and bookings in munster Germany",
    projFullDescrp:
      "The basic reason for the development of Web application for the Hausmeisterservice munsterland is to reach to its customers and generate more leads by online bookings",
    images: [
      {
        image1: "assets/images/projects images/gardenImage1.png",
        image2: "assets/images/projects images/gardenImage2.png",
        image3: "assets/images/projects images/gardenImage3.png",
        image4: "assets/images/projects images/gardenImage4.png",
      },
    ],
    servicesProvided: [
      {
        service1: SYSTEMS_ANALYSIS_DESIGN,
        service2: Web_DEVELOPMENT,
        service3: SOFTWARE_TESTING,
        service4: CLOUD_DEPLOYMENT,
        service5: "",
        service6: "",
      },
    ],
    industryVertical: [
      {
        indusrty1: ECOMMERECE_INDUSTRY,
        indusrty2: "",
        indusrty3: "",
        indusrty4: "",
      },
    ],
    technologiesUsed: [
      {
        technology1: BOOTSTRAP,
        technology2: JAVASCRIPT,
        technology3: SELENIUM,
        technology4: "",
        technology5: "",
      },
    ],
    clientDesc:
      "Hausmeisterservice muensterland is a garden maintainenece and caretaker service provider in munsterland Germany",
  },
  {
    id: 2,
    projName: "ILed Screens",
    projShortDescp:
      "website for the iledscreen bookings and showcasing LED screens products to customers ",
    projFullDescrp:
      "ILedScreen customer wanted to develope a Webapplication for schowcasing their products to customers around the world. BX technologies developed an interactive solution for the our Iled Screens customer, that has resulted in customer infulx and generation of more leads",
    images: [
      {
        image1: "assets/images/projects images/iledscreenImage1.png",
        image2: "assets/images/projects images/iledscreenImage.png",
        image3: "assets/images/projects images/iledscreenImage3.png",
        image4: "assets/images/projects images/iledscreenImage4.png",
      },
    ],
    servicesProvided: [
      {
        service1: USER_INTERFACE_DESIGN,
        service2: Web_DEVELOPMENT,
        service3: SELENIUM,
        service4: PRODUCT_MANAGEMENT,
        service5: "",
        service6: "",
      },
    ],
    industryVertical: [
      {
        indusrty1: CUSTOM_SOFTWARE_INDUSTRY,
        indusrty2: "",
        indusrty3: "",
        indusrty4: "",
      },
    ],
    technologiesUsed: [
      {
        technology1: bootstrap,
        technology2: REACT,
        technology3: MONGODB,
        technology4: JAVASCRIPT,
        technology5: "",
      },
    ],
    clientDesc:
      "Iled Screen is an led screen manufacturer and supplier based in Shenzhen China",
  },
  {
    id: 3,
    projName: "4th Project name",
    projShortDescp: "This is Short description of My 4th Project",
    projFullDescrp: "This is Full Description of my 4th Project",
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
    clientDesc: "This is Our 4th Client",
  },
  {
    id: 4,
    projName: "5th Project Name",
    projShortDescp: "This is Short description of My 5th Project",
    projFullDescrp: "This is Full Description of my 5th Project",
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
    clientDesc: "This is Our 5th Client",
  },
  {
    id: 5,
    projName: "6th project Name",
    projShortDescp: "This is Short description of My 6th Project",
    projFullDescrp: "This is Full Description of my 6th Project",
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
    clientDesc: "This is Our 6th Client",
  },
  {
    id: 6,
    projName: "Hydro Sensing",
    projShortDescp: "This is Short description of My 7th Project",
    projFullDescrp: "This is Full Description of my 7th Project",
    images: [
      {
        image1: "assets/images/projects images/hydroSensingImage1.png",
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
    clientDesc: "This is Our 7th Client",
  },
  {
    id: 7,
    projName: "Ma Faheem",
    projShortDescp: "This is Short description of My 8th Project",
    projFullDescrp: "This is Full Description of my 8th Project",
    images: [
      {
        image1: "assets/images/projects images/mafaheemImage1.png",
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
    clientDesc: "This is Our 8th Client",
  },
];

// DataBase Of Our Projects :END

// Functions Calls : START
FnRenderOurProjects();
// Functions Calls : ENDS
