//Vendor Section :Start
const ElAllProjectItemsContainer = document.querySelector(".items-container");
//Vendor Section :ENDS
// variables section : Start
var clickedProject = [];

const SYSTEMS_ANALYSIS_DESIGN = "System Analysis & Design";
const USER_INTERFACE_DESIGN = "UI/UX Design";
const SOFTWRE_ENGINEERING = "Software Engineering";
const Web_DEVELOPMENT = "Web App Development";
const CUSTOM_SOFTWAE_DEVELOPMENT = "Custom Software Development";
const CLOUD_DEPLOYMENT = "Application Deployment";
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
const HTML = "HTML";
const CSS = "CSS";
const DOT_NET_FRAMEWORK = ".Net Framework";
const POSTMAN = "Postman";
const SELENIUM = "Selenium";
const PYTHON = "Python";
const DJANGO = "Django";
const MERERN_STACK = "Meren Stack";
const MEAN_STACK = "Mean Stack";

// variables section : Ends

// DataBase Of Our Projects :Start

const projectsByBxTech = [
  {
    id: "HashTagThaiMassage",
    projName: "HashTag Thai Massage",
    projCategory: "Web Application",
    Mainimage: "assets/images/projects images/hastageImage1.png",
    projShortDescp:
      " Website for managing operations and bookings at hastage thai massage center Duisburg Germany.",
    projFullDescrp:
      "Hashtag Thai massage is well known massage center in Duisburg Germany. The client wanted to scale their business and to develop a website for showcasing their services to customers and to book orders oniline. BX technologies developed a simple and interactive website in order to slove the problem being face by the cleint",
    images: [
      {
        image: "assets/images/projects images/hastageImage1.png",
      },
      {
        image: "assets/images/projects images/hastageImage2.png",
      },
      {
        image: "assets/images/projects images/hastageImage3.png",
      },
      {
        image: "assets/images/projects images/hastageImage4.png",
      },
    ],
    servicesProvided: [
      { service: USER_INTERFACE_DESIGN },
      { service: SYSTEMS_ANALYSIS_DESIGN },
      { service: Web_DEVELOPMENT },
      { service: CLOUD_DEPLOYMENT },
      { service: SOFTWARE_TESTING },
    ],
    industryVertical: [
      {
        indusrty: ECOMMERECE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: JAVASCRIPT },
      { technology: SELENIUM },
      { technology: WORDPRESS },
    ],
    clientName: "Hashtag Thai Massage",
    clientDesc:
      "Hashtag Thai Massage is popular Thai massage service providers based in duisburg Germany",
    ProjectDate: "01/March/2020",
    ProjectDuration: "3 Months",
    ProjectUrl: "https://hashtagthaimassage.com",
  },
  {
    id: "GardeningServices",
    projName: "Gardening Services",
    projCategory: "Web Application",
    Mainimage: "assets/images/projects images/gardenImage1.png",
    projShortDescp:
      "Website for garden services and bookings in munster Germany",
    projFullDescrp:
      "The basic reason for the development of Web application for the Hausmeisterservice munsterland is to reach to its customers and generate more leads by online bookings",
    images: [
      {
        image: "assets/images/projects images/gardenImage1.png",
      },
      {
        image: "assets/images/projects images/gardenImage2.png",
      },
      {
        image: "assets/images/projects images/gardenImage3.png",
      },
      {
        image: "assets/images/projects images/gardenImage4.png",
      },
    ],
    servicesProvided: [
      { service: SYSTEMS_ANALYSIS_DESIGN },
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: CLOUD_DEPLOYMENT },
    ],
    industryVertical: [
      {
        indusrty: ECOMMERECE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: JAVASCRIPT },
      { technology: SELENIUM },
    ],
    clientName: "Hausmeisterservice muensterland",
    clientDesc:
      "Hausmeisterservice muensterland is a garden maintainenece and caretaker service provider in munsterland Germany",
    ProjectDate: "01/March/2020",
    ProjectDuration: "3 Months",
    ProjectUrl: "https://hausmeisterservice-muensterland.de",
  },
  {
    id: "ILedScreens",
    projName: "ILed Screens",
    projCategory: "Web Application",
    Mainimage: "assets/images/projects images/iledscreenImage1.png",
    projShortDescp:
      "website for the iledscreen bookings and showcasing LED screens products to customers ",
    projFullDescrp:
      "ILedScreen customer wanted to develope a Webapplication for schowcasing their products to customers around the world. BX technologies developed an interactive solution for the our Iled Screens customer, that has resulted in customer infulx and generation of more leads",
    images: [
      {
        image: "assets/images/projects images/iledscreenImage1.png",
      },
      {
        image: "assets/images/projects images/iledscreenImage.png",
      },
      {
        image: "assets/images/projects images/iledscreenImage3.png",
      },
      {
        image: "assets/images/projects images/iledscreenImage4.png",
      },
    ],
    servicesProvided: [
      { service: USER_INTERFACE_DESIGN },
      { service: Web_DEVELOPMENT },
      { service: SELENIUM },
      { service: PRODUCT_MANAGEMENT },
    ],
    industryVertical: [
      {
        indusrty: CUSTOM_SOFTWARE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: REACT },
      { technology: MONGODB },
      { technology: JAVASCRIPT },
    ],
    clientName: "Iled Screens",
    clientDesc:
      "Iled Screen is an led screen manufacturer and supplier based in Shenzhen China",
    ProjectDate: "01/March/2020",
    ProjectDuration: "5 Months",
    ProjectUrl: "https://iledscreens.com",
  },
  {
    id: "helpwithoutbordersweb",
    projName: "Help Without Borders",
    projCategory: "Web Application",
    Mainimage: "assets/images/projects images/helfeohenPprojectImage1.png",
    projShortDescp:
      "Website for the chairty organization name help without borders.",
    projFullDescrp:
      "Help without Borders or hilfeohnegrenzen is a charity organization working in different countries around the world to provide help and support to people in need. Help without Borders needed a website to showcase their work to global audience and contributors. BX technologies developed their website in order solve there problems and issues faced by the organization. ",
    images: [
      {
        image: "assets/images/projects images/helfeohenPprojectImage1.png",
      },
      {
        image: "assets/images/projects images/helfeohenPprojectImage2.png",
      },
      {
        image: "assets/images/projects images/helfeohenPprojectImage3.png",
      },
      {
        image: "assets/images/projects images/helfeohenPprojectImage4.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: CLOUD_DEPLOYMENT },
      { service: PRODUCT_MANAGEMENT },
    ],
    industryVertical: [
      {
        indusrty: CUSTOM_SOFTWARE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: SELENIUM },
      { technology: MY_SQL },
      { technology: JAVASCRIPT },
    ],
    clientName: "Help without Borders ",
    clientDesc:
      "Help without Borders or hilfeohnegrenzen is a charity organization",
    ProjectDate: "01/March/2020",
    ProjectDuration: "4 Months",
    ProjectUrl: "https://hilfeohnegrenzen.de/",
  },
  {
    id: "briantimetech",
    projName: "Braintime Professional Services website",
    projCategory: "Web Application",
    Mainimage: "assets/images/projects images/brainTimeProjectImage1.png",
    projShortDescp:
      "Website for the Bahrain based Telecommunication service provider company",
    projFullDescrp:
      "BX technologies developed website for Bahrain based telecommunication and infotainment system service provider company. the basic functionlity of the website is to deficts the different services provided by the company to its customers ",
    images: [
      {
        image: "assets/images/projects images/brainTimeProjectImage1.png",
      },
      {
        image: "assets/images/projects images/brainTimeProjectImage2.png",
      },
      {
        image: "assets/images/projects images/braintimeprojectimage3.png",
      },
      {
        image: "assets/images/projects images/braintimeprojectimage4.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: CLOUD_DEPLOYMENT },
    ],
    industryVertical: [
      {
        indusrty: "",
      },
    ],
    technologiesUsed: [{ technology: CUSTOM_SOFTWARE_INDUSTRY }],
    clientName: "Braintime Professional Services",
    clientDesc:
      "Braintime Professional Services  Bahrain based Telecommunication service provider company",
    ProjectDate: "01/March/2020",
    ProjectDuration: "3 Months",
    ProjectUrl: "https://braintime-tech.com/",
  },
  {
    id: "hydrosendingwebiste",
    projName: "HydroSensing Website",
    projCategory: "Web Application",
    Mainimage: "assets/images/projects images/hydroSensingImage1.png",
    projShortDescp:
      "Website development and deployment for the China based environmental, water resoruces and geological engineering research and consultancy firm",
    projFullDescrp:
      "HydroSensing consultancy approached Bx technologies to develop a website for showcasing there business and application areas. the website provides information about the different research and development (R&D) areas where HydroSensing is actively involved",
    images: [
      {
        image: "assets/images/projects images/hydroSensingImage1.png",
      },
      {
        image: "assets/images/projects images/hydroSensingImage2.png",
      },
      {
        image: "assets/images/projects images/hydroSensingImage3.png",
      },
      {
        image: "assets/images/projects images/hydroSensingImage4.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: CLOUD_DEPLOYMENT },
      { service: SOFTWRE_ENGINEERING },
    ],
    industryVertical: [
      {
        indusrty: CUSTOM_SOFTWARE_INDUSTRY,
      },
      {
        indusrty: SERVICES_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: WORDPRESS },
      { technology: MY_SQL },
      { technology: JAVASCRIPT },
      { technology: HTML },
    ],
    clientName: "HydroSensing",
    clientDesc:
      "HydroSensing is a China based environmental, water resoruces and geological engineering research and consultancy firm",
    ProjectDate: "01/March/2020",
    ProjectDuration: "2 Months",
    ProjectUrl: "https://hydrosensing4u.com",
  },
  {
    id: "jabtco",
    projName: "Jabtco ecommerce website",
    projCategory: "Web Application",
    Mainimage: "assets/images/projects images/jabtcoimage2.png",
    projShortDescp:
      "Complete ecommerce solution for Jabtco chemicals manufacturing company based in Islambad, Pakistan",
    projFullDescrp:
      "Bx Technologies developed complete ecommerce solution for Jabtco chemical manufacturing and distribution company based in islamabad, pakistan. With the development and deployment of the website application, Jabtco experience an upward trend in the sales. The website enabled Jabtco to sell there products online. ",
    images: [
      {
        image: "assets/images/projects images/jabtcoimage2.png",
      },
      {
        image: "assets/images/projects images/jabtcoimage3.png",
      },
      {
        image: "assets/images/projects images/jabtcoimage4.png",
      },
      {
        image: "assets/images/projects images/jabtcoimage1.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: PRODUCT_MANAGEMENT },
    ],
    industryVertical: [
      {
        indusrty: ECOMMERECE_INDUSTRY,
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: SELENIUM },
      { technology: MY_SQL },
      { technology: JAVASCRIPT },
      { technology: HTML },
    ],
    clientName: "Jabtco",
    clientDesc:
      "Jabtco is a chemicals manufacturing company based in Islambad, Pakistan. the Company specialize in cleaning products and detergents",
    ProjectDate: "01/March/2020",
    ProjectDuration: "3 Months",
    ProjectUrl: "https://jabtco.com",
  },
  {
    id: "MaFaheem",
    projName: "Ma Faheem",
    projCategory: "Web Application",
    Mainimage: "assets/images/projects images/mafaheemImage1.png",
    projShortDescp: "This is Short description of My 8th Project",
    projFullDescrp: "This is Full Description of my 8th Project",
    images: [
      {
        image: "assets/images/projects images/mafaheemImage1.png",
      },
    ],
    servicesProvided: [
      { service: Web_DEVELOPMENT },
      { service: SOFTWARE_TESTING },
      { service: USER_INTERFACE_DESIGN },
      { service: PRODUCT_MANAGEMENT },
    ],
    industryVertical: [
      {
        indusrty: "",
      },
    ],
    technologiesUsed: [
      { technology: BOOTSTRAP },
      { technology: SELENIUM },
      { technology: MY_SQL },
      { technology: JAVASCRIPT },
      { technology: HTML },
    ],
    clientName: "Hashtag",
    clientDesc: "This is Our 8th Client",
    ProjectDate: "01/March/2020",
    ProjectDuration: "2 Months",
    ProjectUrl: "google.com",
  },
];

// DataBase Of Our Projects :END

// Redering Our Projects :Start
const FnRenderOurProjects = () => {
  let counter = 0;
  for (const singleProject of projectsByBxTech) {
    if (counter < projectsByBxTech.length) {
      if (ElAllProjectItemsContainer) {
        ElAllProjectItemsContainer.innerHTML += `
        <div class="item-box projectIteM" >
        <div class="col-sm-12 col-10 ">
      <div class="row projectIteM-Image">
            <div class="col-12">
              <img
                src="${singleProject.Mainimage}"
                alt="${singleProject.projName}"
              />
            </div>
          </div>
          <div class="row projectIteM-Title">
            <div class="col-12">
              <br />
              <center><a  onclick="return FnGetProjectForProjectDetails('${singleProject.id}');"><h6  class="clckForMoreDetail">More Details...</h6></a></center>
              <center><h6  class="projectName">${singleProject.projName}</h6></center>
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
if (btnGetStarted) {
  btnGetStarted.addEventListener("click", FnGetstarted);
}
// By click Scroll into view :END

// Functions Calls : START
FnRenderOurProjects();
// Functions Calls : ENDS

//Going to Project Details : START
const FnGetProjectForProjectDetails = (projectId) => {
  for (const singleProject of projectsByBxTech) {
    if (singleProject.id === projectId) {
      clickedProject = [];
      //clickedProject.push(singleProject);
      clickedProject = singleProject;
      FnsetProject(clickedProject);
      break;
    }
  }
  window.location.href = "ViewProjectDetails.html";
};

const FnsetProject = (projectId) => {
  sessionStorage.setItem("projId", JSON.stringify(projectId));
};

//Going to Project Details : END
