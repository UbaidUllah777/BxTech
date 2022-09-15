//Vendering :START
const btnGetStarted = document.querySelector(".btnGetStarted");
const btnGetInTouh = document.getElementById("btnGetIntouch");
const element = document.getElementById("emptyRow");
const btnwebApp = document.getElementById("btnwebApp");
const btnMobApp = document.getElementById("btnMobApp");
const btDatabases = document.getElementById("btDatabases");
const btnBigData = document.getElementById("btnBigData");
const btnIOTs = document.getElementById("btnIOTs");
const btnBlockChain = document.getElementById("btnBlockChain");
const btnSwTesting = document.getElementById("btnSwTesting");
const btnCloudMngmnt = document.getElementById("btnCloudMngmnt");
const btnVersionControl = document.getElementById("btnVersionControl");
const EltechStockTwo = document.querySelector(".techStockTwo");
//Vendering :END
//
//
//
//
//
//
// Form into View : START
const FnGetstarted = () => {
  element.scrollIntoView();
};

// Form into View  : END
//
//
//
//
//
//
// Services DATA: START
const allServices = [
  {
    id: "btnwebApp",
    serviceHeading: "Web Applications",
    headingImg: "assets/images/web application development.png",
    servicesDetails:
      "Bx Technologies web application development team has exceptional experience in wide range of web development technologies and frameworks. we are capable of delivering robust, scalable and user friendly web applications. ",
    servicesImages: [
      {
        image1: "assets/images/Techstackimg/angularjs.png",
        image2: "assets/images/Techstackimg/bootstrap.png",
        image3: "assets/images/Techstackimg/codeigniter.png",
        image4: "assets/images/Techstackimg/javascript.png",
        image5: "assets/images/Techstackimg/python.png",
        image6: "assets/images/Techstackimg/rails.png",
        image7: "assets/images/Techstackimg/vuejs.png",
        image8: "assets/images/Techstackimg/wordpress.png",
        image9: "assets/images/Techstackimg/nodejs.png",
        image10: "assets/images/Techstackimg/jquery.png",
        image11: "assets/images/Techstackimg/html5.png",
        image12: "assets/images/Techstackimg/css3.png",
      },
    ],
  },
  {
    id: "btnMobApp",
    serviceHeading: "Mobile Applications",
    headingImg: "assets/images/mobile-development.png",
    servicesDetails:
      " Our mobile application development engineers and developers always welcome complex and technical mobile application development tasks. we use wide range of mobile app technologies for developing native, hybrid, and cross-platform mobile applications.",
    servicesImages: [
      {
        image1: "assets/images/Techstackimg/android.png",
        image2: "assets/images/Techstackimg/react.png",
        image3: "assets/images/Techstackimg/nodejs.png",
        image4: "assets/images/Techstackimg/java.png",
        image5: "assets/images/Techstackimg/javascript.png",
        image6: "assets/images/Techstackimg/swift.png",
        image7: "assets/images/Techstackimg/react.png",
        image8: "assets/images/Techstackimg/react.png",
        image9: "",
        image10: "",
      },
    ],
  },
  {
    id: "btDatabases",
    serviceHeading: "Databases",
    headingImg: "assets/images/databaseSystem.png",
    servicesDetails:
      "We use and employ diverse range of Databases (i.e. SQL and NoSQL) for handling the most precious data for business value  behind the seens.",
    servicesImages: [
      {
        image1: "assets/images/Techstackimg/mongodb.png",
        image2: "assets/images/Techstackimg/mysql.png",
        image3: "assets/images/Techstackimg/oracle.png",
        image4: "assets/images/Techstackimg/couchdb.png",
        image5: "assets/images/Techstackimg/postgresql.png",
        image6: "assets/images/Techstackimg/postgresql.png",
        image7: "assets/images/Techstackimg/postgresql.png",
        image8: "assets/images/Techstackimg/postgresql.png",
        image9: "assets/images/Techstackimg/postgresql.png",
        image10: "assets/images/Techstackimg/postgresql.png",
        image11: "assets/images/Techstackimg/postgresql.png",
      },
    ],
  },
  {
    id: "btnSwTesting",
    serviceHeading: "Software Testing",
    headingImg: "assets/images/didicated software testing.png",
    servicesDetails:
      "To ensure the quality and build confidence on any software solution we develop,Bx technologies uses variety of testing tools and framework for automated and manuel testing.  ",
    servicesImages: [
      {
        image1: "assets/images/Techstackimg/cucumber.png",
        image2: "assets/images/Techstackimg/mocha.png",
        image3: "assets/images/Techstackimg/crashlytics.png",
        image4: "assets/images/Techstackimg/appium.png",
        image5: "assets/images/Techstackimg/testNG.png",
        image6: "assets/images/Techstackimg/Fabrictest.png",
        image7: "assets/images/Techstackimg/Junit.png",
        image8: "assets/images/Techstackimg/postman.png",
        image9: "assets/images/Techstackimg/selenium.png",
        image10: "assets/images/Techstackimg/iTools.png",
        image11: "assets/images/Techstackimg/saucelabs.png",
      },
    ],
  },
  {
    id: "btnBigData",
    serviceHeading: "Big Data",
    headingImg: "assets/images/big-data.png",
    servicesDetails:
      "Data is sometimes referred to 21 ist century oil. To manage, process, transform and obtian actionable information and insights we use several tools and technology to expose hidden pattrens in the data. ",
    servicesImages: [
      {
        image1: "assets/images/Techstackimg/spark.png",
        image2: "assets/images/Techstackimg/cassandra.png",
        image3: "assets/images/Techstackimg/apache.png",
        image4: "assets/images/Techstackimg/apachehadoop.png",
        image5: "assets/images/Techstackimg/cucumber.png",
        image6: "assets/images/Techstackimg/cucumber.png",
        image7: "",
        image8: "",
        image9: "",
        image10: "",
      },
    ],
  },
  {
    id: "btnIOTs",
    serviceHeading: "Internet Of Things",
    headingImg: "assets/images/internet-of-things.png",
    servicesDetails:
      "Internet of things which is commonly referred to as IoT's. we use a wide range of tools and technologys to implement IoT's based applications.",
    servicesImages: [
      {
        image1: "/assets/images/MbA1redux.svg",
        image2: "/assets/images/MbA2Swift_logo_color.svg",
        image3: "/assets/images/MbA3lockup.svg",
        image4: "/assets/images/mbA4nativescript.svg",
        image5: "/assets/images/Mb5flutter-logo.svg",
        image6: "/assets/images/mbA6download.svg",
        image7: "",
        image8: "",
        image9: "",
        image10: "",
      },
    ],
  },
  {
    id: "btnBlockChain",
    serviceHeading: "BlockChain",
    headingImg: "assets/images/blockchain  and IoTs.png",
    servicesDetails:
      "To develop secure, robust, interoperable and scalable Blockchain technology based applications, we incorporate tools and frameworks didicated to Blockchain technology.  ",
    servicesImages: [
      {
        image1: "/assets/images/MbA1redux.svg",
        image2: "/assets/images/MbA2Swift_logo_color.svg",
        image3: "/assets/images/MbA3lockup.svg",
        image4: "/assets/images/mbA4nativescript.svg",
        image5: "/assets/images/Mb5flutter-logo.svg",
        image6: "/assets/images/mbA6download.svg",
        image7: "",
        image8: "",
        image9: "",
        image10: "",
      },
    ],
  },
  {
    id: "btnCloudMngmnt",
    serviceHeading: "Cloud Management",
    headingImg: "assets/images/cloud.png",
    servicesDetails:
      "Application deployment and managment on the Cloud platforms and Cloud Server requires the use of specilized softwares and tools. in order to manage and maintian our CI/CD pipelines we makes use of several didicated software solutions that helps in seemless and smooth CI/CD operations.",
    servicesImages: [
      {
        image1: "assets/images/Techstackimg/docker.png",
        image2: "assets/images/Techstackimg/debian.png",
        image3: "assets/images/Techstackimg/jenkins.png",
        image4: "assets/images/Techstackimg/maven.png",
        image5: "assets/images/Techstackimg/devops.png",
        image6: "assets/images/Techstackimg/travis.png",
        image7: "assets/images/Techstackimg/ubuntu.png",
        image8: "",
        image9: "",
        image10: "",
      },
    ],
  },
  {
    id: "btnVersionControl",
    serviceHeading: "Version Control",
    headingImg: "assets/images/git.png",
    servicesDetails:
      "In todays complex software development environments, virson control is the most fundamental and necessary tools to keep track of changes mades to codebase by the developers. at BX technologies we use multiple version control systems acording to the client and project needs",
    servicesImages: [
      {
        image1: "assets/images/Techstackimg/git.png",
        image2: "assets/images/Techstackimg/github.png",
        image3: "assets/images/Techstackimg/bitbucket.png",
        image4: "assets/images/Techstackimg/slack-logo.png",
        image5: "assets/images/Techstackimg/trello.png",
        image6: "assets/images/Techstackimg/ubuntu.png",
        image7: "",
        image8: "",
        image9: "",
        image10: "",
      },
    ],
  },
];
// Services DATA : END
//
//
//
//
//
//
// Services Stact : START
const FnRenderTechStactTwo = (elementId) => {
  EltechStockTwo.innerHTML = "";

  let counter = 0;
  for (const singleService of allServices) {
    if (EltechStockTwo) {
      if (singleService.id === elementId) {
        EltechStockTwo.innerHTML = `
      <div class="row">
                    <div class="col-4">
                      <img src="${singleService.headingImg}" alt="" />
                    </div>
                    <div class="col-8">
                      <h3>${singleService.serviceHeading}</h3>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-12">
                      <p>
                      ${singleService.servicesDetails}
                      </p>
                      <br />
                    </div>
                  </div>
    
                  <div class="row">
                    <div class="col-md-2 col-4">
                      <img src="${singleService.servicesImages[0].image1}" alt="" />
                    </div>
                    <div class="col-md-2 col-4">
                      <img src="${singleService.servicesImages[0].image2}" alt="" />
                    </div>
                    <div class="col-md-2 col-4">
                      <img src="${singleService.servicesImages[0].image3}" alt="" />
                    </div>
                    <div class="col-md-2 col-4">
                      <img src="${singleService.servicesImages[0].image4}" alt="" />
                    </div>
                    <div class="col-md-2 col-4">
                      <img src="${singleService.servicesImages[0].image5}" alt="" />
                    </div>
                    <div class="col-md-2 col-4">
                      <img src="${singleService.servicesImages[0].image6}" alt="" />
                    </div>
                  </div>
      `;
        break;
      }
    }
  }
};

// Services Stact : END
//
//
//
//
// EVENTS : START
btnMobApp.addEventListener("click", function () {
  const elementId = btnMobApp.id;

  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});
btnwebApp.addEventListener("click", function () {
  const elementId = btnwebApp.id;

  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btDatabases.addEventListener("click", function () {
  const elementId = btDatabases.id;

  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnBigData.addEventListener("click", function () {
  const elementId = btnBigData.id;

  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnIOTs.addEventListener("click", function () {
  const elementId = btnIOTs.id;

  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnBlockChain.addEventListener("click", function () {
  const elementId = btnBlockChain.id;

  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnSwTesting.addEventListener("click", function () {
  const elementId = btnSwTesting.id;

  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnCloudMngmnt.addEventListener("click", function () {
  const elementId = btnCloudMngmnt.id;

  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnVersionControl.addEventListener("click", function () {
  const elementId = btnVersionControl.id;

  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnGetStarted.addEventListener("click", FnGetstarted);

btnGetInTouh.addEventListener("click", FnGetstarted);
// EVENTS : END
