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
    serviceHeading: "WEB Applications",
    servicesDetails:
      "We have exceptional experience in creating native, hybrid, and cross-platform mobile applications.",
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
    servicesDetails:
      "We have exceptional experience in creating native, hybrid, and cross-platform mobile applications.",
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
    servicesDetails:
      "We have exceptional experience in creating native, hybrid, and cross-platform mobile applications.",
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
    id: "btnBigData",
    serviceHeading: "Big Data",
    servicesDetails:
      "We have exceptional experience in creating native, hybrid, and cross-platform mobile applications.",
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
    servicesDetails:
      "We have exceptional experience in creating native, hybrid, and cross-platform mobile applications.",
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
    servicesDetails:
      "We have exceptional experience in creating native, hybrid, and cross-platform mobile applications.",
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
    id: "btnSwTesting",
    serviceHeading: "Software Testing",
    servicesDetails:
      "We have exceptional experience in creating native, hybrid, and cross-platform mobile applications.",
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
    id: "btnCloudMngmnt",
    serviceHeading: "Cloud Management",
    servicesDetails:
      "We have exceptional experience in creating native, hybrid, and cross-platform mobile applications.",
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
    servicesDetails:
      "We have exceptional experience in creating native, hybrid, and cross-platform mobile applications.",
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
                      <img src="" alt="" />
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
