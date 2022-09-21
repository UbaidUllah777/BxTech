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
const ElourServicesContainer = document.querySelector(".ourServicesContainer");
//Vendering :END
//
//
//
//
//
//
// Form into View : START
const FnGetstarted = () => {
  if (element) {
    element.scrollIntoView();
  }
};

// Form into View  : END
//
//
//
//
//
//
//  DATA: START

//Service Stact Data:Start
const allServices = [
  {
    id: "btnwebApp",
    serviceHeading: "Web Applications",
    headingImg: "assets/images/web application development.png",
    servicesDetails:
      "Bx Technologies web application development team has exceptional experience in wide range of web development technologies and frameworks. we are capable of delivering robust, scalable and user friendly web applications. ",
    servicesImages: [
      {
        image: "assets/images/Techstackimg/angularjs.png",
        serviceName: "angularjs",
      },
      {
        image: "assets/images/Techstackimg/bootstrap.png",
        serviceName: "bootstrap",
      },
      {
        image: "assets/images/Techstackimg/codeigniter.png",
        serviceName: "codeigniter",
      },
      {
        image: "assets/images/Techstackimg/javascript.png",
        serviceName: "javascript",
      },
      {
        image: "assets/images/Techstackimg/python.png",
        serviceName: "python",
      },
      {
        image: "assets/images/Techstackimg/rails.png",
        serviceName: "rails",
      },
      {
        image: "assets/images/Techstackimg/vuejs.png",
        serviceName: "vuejs",
      },
      {
        image: "assets/images/Techstackimg/wordpress.png",
        serviceName: "wordpress",
      },
      {
        image: "assets/images/Techstackimg/nodejs.png",
        serviceName: "nodejs",
      },
      {
        image: "assets/images/Techstackimg/jquery.png",
        serviceName: "jquery",
      },
      {
        image: "assets/images/Techstackimg/html5.png",
        serviceName: "html5",
      },
      {
        image: "assets/images/Techstackimg/css3.png",
        serviceName: "css3",
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
        image: "assets/images/Techstackimg/android.png",
        serviceName: "android",
      },
      {
        image: "assets/images/Techstackimg/react.png",
        serviceName: "react",
      },
      {
        image: "assets/images/Techstackimg/nodejs.png",
        serviceName: "nodejs",
      },
      {
        image: "assets/images/Techstackimg/java.png",
        serviceName: "java",
      },
      {
        image: "assets/images/Techstackimg/javascript.png",
        serviceName: "javascript",
      },
      {
        image: "assets/images/Techstackimg/swift.png",
        serviceName: "swift",
      },
      {
        image: "assets/images/Techstackimg/react.png",
        serviceName: "react",
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
        image: "assets/images/Techstackimg/mongodb.png",
        serviceName: "mongodb",
      },
      { image: "assets/images/Techstackimg/mysql.png", serviceName: "mysql" },
      {
        image: "assets/images/Techstackimg/couchdb.png",
        serviceName: "couchdb",
      },
      {
        image: "assets/images/Techstackimg/postgresql.png",
        serviceName: "postgresql",
      },
      {
        image: "assets/images/Techstackimg/postgresql.png",
        serviceName: "postgresql",
      },
      {
        image: "assets/images/Techstackimg/mongodb.png",
        serviceName: "mongodb",
      },
      { image: "assets/images/Techstackimg/mysql.png", serviceName: "mysql" },
      {
        image: "assets/images/Techstackimg/couchdb.png",
        serviceName: "couchdb",
      },
      {
        image: "assets/images/Techstackimg/postgresql.png",
        serviceName: "postgresql",
      },
      {
        image: "assets/images/Techstackimg/postgresql.png",
        serviceName: "postgresql",
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
        image: "assets/images/Techstackimg/cucumber.png",
        serviceName: "cucumber",
      },
      {
        image: "assets/images/Techstackimg/mocha.png",
        serviceName: "mocha",
      },
      {
        image: "assets/images/Techstackimg/crashlytics.png",
        serviceName: "crashlytics",
      },
      {
        image: "assets/images/Techstackimg/appium.png",
        serviceName: "appium",
      },
      {
        image: "assets/images/Techstackimg/testNG.png",
        serviceName: "testNG",
      },
      {
        image: "assets/images/Techstackimg/Fabrictest.png",
        serviceName: "Fabrictest",
      },
      {
        image: "assets/images/Techstackimg/Junit.png",
        serviceName: "Junit",
      },
      {
        image: "assets/images/Techstackimg/postman.png",
        serviceName: "postman",
      },
      {
        image: "assets/images/Techstackimg/selenium.png",
        serviceName: "selenium",
      },
      {
        image: "assets/images/Techstackimg/iTools.png",
        serviceName: "iTools",
      },
      {
        image: "assets/images/Techstackimg/saucelabs.png",
        serviceName: "saucelabs",
      },
    ],
  },
  {
    id: "btnBigData",
    serviceHeading: "Big Data",
    headingImg: "assets/images/big-data.png",
    servicesDetails:
      "Data is sometimes referred to 21st century oil. To manage, process, transform and obtian actionable information and insights we use several tools and technology to expose hidden pattrens in the data. ",
    servicesImages: [
      { image: "assets/images/Techstackimg/spark.png", serviceName: "spark" },
      {
        image: "assets/images/Techstackimg/cassandra.png",
        serviceName: "cassandra",
      },
      { image: "assets/images/Techstackimg/apache.png", serviceName: "apache" },
      {
        image: "assets/images/Techstackimg/apachehadoop.png",
        serviceName: "apachehadoop",
      },
      {
        image: "assets/images/Techstackimg/cucumber.png",
        serviceName: "cucumber",
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
      { image: "assets/images/MbA1redux.svg", serviceName: "redux" },
      { image: "assets/images/MbA2Swift_logo_color.svg", serviceName: "Swift" },
      { image: "assets/images/MbA3lockup.svg", serviceName: "lockup" },
      {
        image: "assets/images/mbA4nativescript.svg",
        serviceName: "ativescript",
      },
      { image: "assets/images/Mb5flutter-logo.svg", serviceName: "flutter" },
      { image: "assets/images/mbA6download.svg", serviceName: "React" },
    ],
  },
  {
    id: "btnBlockChain",
    serviceHeading: "BlockChain",
    headingImg: "assets/images/blockchain  and IoTs.png",
    servicesDetails:
      "To develop secure, robust, interoperable and scalable Blockchain technology based applications, we incorporate tools and frameworks didicated to Blockchain technology.  ",
    servicesImages: [
      { image: "assets/images/MbA1redux.svg", serviceName: "redux" },
      { image: "assets/images/MbA2Swift_logo_color.svg", serviceName: "Swift" },
      { image: "assets/images/MbA3lockup.svg", serviceName: "lockup" },
      {
        image: "assets/images/mbA4nativescript.svg",
        serviceName: "ativescript",
      },
      { image: "assets/images/Mb5flutter-logo.svg", serviceName: "flutter" },
      { image: "assets/images/mbA6download.svg", serviceName: "React" },
    ],
  },
  {
    id: "btnCloudMngmnt",
    serviceHeading: "Cloud Management",
    headingImg: "assets/images/cloud.png",
    servicesDetails:
      "Application deployment and managment on the Cloud platforms and Cloud Server requires the use of specilized softwares and tools. in order to manage and maintian our CI/CD pipelines we makes use of several didicated software solutions that helps in seemless and smooth CI/CD operations.",
    servicesImages: [
      { image: "assets/images/Techstackimg/docker.png", serviceName: "docker" },
      { image: "assets/images/Techstackimg/debian.png", serviceName: "debian" },
      {
        image: "assets/images/Techstackimg/jenkins.png",
        serviceName: "jenkins",
      },
      { image: "assets/images/Techstackimg/maven.png", serviceName: "maven" },
      { image: "assets/images/Techstackimg/devops.png", serviceName: "devops" },
      { image: "assets/images/Techstackimg/travis.png", serviceName: "travis" },
      { image: "assets/images/Techstackimg/ubuntu.png", serviceName: "ubuntu" },
    ],
  },
  {
    id: "btnVersionControl",
    serviceHeading: "Version Control",
    headingImg: "assets/images/git.png",
    servicesDetails:
      "In todays complex software development environments, virson control is the most fundamental and necessary tools to keep track of changes mades to codebase by the developers. at BX technologies we use multiple version control systems acording to the client and project needs",
    servicesImages: [
      { image: "assets/images/Techstackimg/git.png", serviceName: "git" },
      { image: "assets/images/Techstackimg/github.png", serviceName: "github" },
      {
        image: "assets/images/Techstackimg/bitbucket.png",
        serviceName: "bitbucket",
      },
      {
        image: "assets/images/Techstackimg/slack-logo.png",
        serviceName: "slack",
      },
      { image: "assets/images/Techstackimg/trello.png", serviceName: "trello" },
      { image: "assets/images/Techstackimg/ubuntu.png", serviceName: "ubuntu" },
    ],
  },
];
//Service Stact Data :END
//
//
//
//Service Deatil_one Data:Start
const ourServices = [
  {
    id: "SERVmobAppDev",
    serviceName: "Mobile Application Development",
    serviceImg: "assets/images/mobile-development.png",
    serviceShortDesc:
      "We provide application design, integration, and management services throughout the entirety of the application life cycle. Whether it's a consumer-facing app or a game-changing enterprise-level solution",
  },
  {
    id: "SERVwebAppDev",
    serviceName: "Web Application Development",
    serviceImg: "assets/images/web application development.png",
    serviceShortDesc:
      "BX Technologies web development team take a comprehensive approach to web development, including everything from mock-ups and coding to site design and content. We are proud of our skilled and creative web development team",
  },
  {
    id: "SERVCustSoftDev",
    serviceName: "Custom Software Development",
    serviceImg: "assets/images/custom software development.png",
    serviceShortDesc:
      "Our absolute expertise in custom software development can help you create a software that is sure to get you the best results, including performance and user-friendly interface. We are a team of experts who work on wide techology stack",
  },
  {
    id: "SERVcloudAppMng",
    serviceName: "Cloud Application Management",
    serviceImg: "assets/images/cloud.png",
    serviceShortDesc:
      "By improving business agility, security, scalability and performance, cloud platforms enables businesses to achieve 360-degree growth. Today's businesses are relying on cloud application development to boost business resilience and availability, resulting in a better employee and customer experience.",
  },
  {
    id: "SERVsoftTestQA",
    serviceName: "Software Testing/QA",
    serviceImg: "assets/images/didicated software testing.png",
    serviceShortDesc:
      "We offer a variety of dedicated software testing and Quality assurance services that include, Functional testing, Performance testing, Security testing, Usability testing, API testing, infotaiment systems testing, sanity & smoke testing. our team has expertise in both automated and manual testing",
  },
  {
    id: "SERVcyberSecurity",
    serviceName: "Cyber Security and PenTesting",
    serviceImg: "assets/images/cyber-security and pentesting.png",
    serviceShortDesc:
      "BX Technologies IT security management services ensure that your applications, products, and infrastructure are fully protected against cyber threats, data leaks, thefts, and calamities. All of your infrastructure is secured by implementing cyber security standards and runing threats vulnerability assessment and pentests.",
  },
  {
    id: "SERVblockChainIots",
    serviceName: "BlockChain & IoTs",
    serviceImg: "assets/images/blockchain  and IoTs.png",
    serviceShortDesc:
      "Blockchain and IoT's is transforming how people live and work around the world, but it is merely a means to a goal, not the end itself. We can assist you in putting this technology to work for you in the future",
  },
  {
    id: "SERVuiUxDesign",
    serviceName: "UI/UX Design",
    serviceImg: "assets/images/UI and UX design.png",
    serviceShortDesc:
      "Front-end is the first impression that a user takes from any software application while using it. Develop high-quality and interactive user interface, mock-ups, Wireframes and user experience for your product ideas",
  },
  {
    id: "SERVtechConsServices",
    serviceName: "Technology Consultancy Services",
    serviceImg: "assets/images/technology consultancy.png",
    serviceShortDesc:
      "Need consultation and advice about your project implementation, selection and evaluation of technology stack and overall monitoring of the development process. You can avial BX technologies services at any time",
  },
  {
    id: "SERVdataAnalBussInt",
    serviceName: "Data Analytics & Business Intelligence",
    serviceImg: "assets/images/data analytics.png",
    serviceShortDesc:
      "Bring more agility to your business by exploring hidden pattrens,Insights in your data. Data analytics solutions will help you in this by using latest technologies such as AI, Machine learning, Deep Learning and Business Intellegence Tools",
  },

  {
    id: "SERVseo",
    serviceName: "Search Engine Optimization(SEO)",
    serviceImg: "assets/images/seo.png",
    serviceShortDesc:
      "Improve your business reach to more audience and customers by enhancing your website Rank on search engines by employing varity of search strategies and keywords using the Search Engine Optimization tools and techniques",
  },
  {
    id: "SERVprojManagment",
    serviceName: "Product/Project Management Services",
    serviceImg: "assets/images/product-management.png",
    serviceShortDesc:
      "Digital product management requires lots of moving parts to be gathered and fine-tuned in order to achieve the desired goal. At BX technologies we take care of your product end-to-end managment process. starting from initail concept to market delivery",
  },
];
//Service Deatil_one Data:END
//
//
//
//Service Deatil_Two Data:Start
const ourServiceDetails = [
  {
    id: "SERVmobAppDev",
    serviceCategDetails: [
      {
        categHeading: "Android Apps",
        categImg: "assets/images/serviceDetailImages/android.png",
        categDesc:
          "BX Technologies robust, scalable and dynamic Mobile Apps using different languages and development frameworks, which not fulfill your business requirements, but also strictly follow Android platform rules, regulations and guidelines, and industrial standards.",
      },
      {
        categHeading: "IoS",
        categImg: "assets/images/serviceDetailImages/IOSApps.png",
        categDesc:
          "We develop mobile apps targeting the IoS platform using swift and objective-C programming languages to cater to the demands of our customers.",
      },
      {
        categHeading: "Cross-Platform",
        categImg: "assets/images/serviceDetailImages/crossPplatformApps.png",
        categDesc:
          "Due to the availability of multiple platforms, Bx Technologies leverage its experience to deliver top niche cross-platform solutions to support wee, native apps on various platforms using HTML, CSS, JavaScript, NodeJs, and react native framework.",
      },
      {
        categHeading: "Flutter App Development",
        categImg: "assets/images/serviceDetailImages/flutterApps.png",
        categDesc:
          "We develop user-friendly, interactive, and scalable native Mobile applications for IoS and Android platforms.",
      },
    ],

    serviceLongDesc:
      "Adopt a modern and state-of-the-art approach for your next mobile application development project with BX Technologies. A top-rated software development firm where the focus is on the multi-dimensional aspects of your project idea. We believe in and deliver a scalable, interactive, high-performance, and fully functional mobile application to our clients across the globe. Bx technologies have the expertise to undertake any project wither, developing an application from scratch or maintaining or improving new features in an existing mobile application. We are experts in ios, Android, cross-platform, and native mobile application development. Our development team would love to hear from you and work on turning your ideas into reality. ",
    serviceHeading:
      "Mobile app development services to build innovative experiences",
    processHeading: "Agile Based Mobile Application Development",
    step1Heading: "Requirments Analysis",
    processStep1: [
      {
        step1Tag: "Business case analysis",
      },
      {
        step1Tag: "Requirements gathering",
      },
      {
        step1Tag: "Identify features",
      },
      {
        step1Tag: "Plan time & cost estimates",
      },
    ],
    step2Heading: "User Interface Design",
    processStep2: [
      {
        step2Tag: " Develop Mock-ups/wireframe",
      },
      {
        step2Tag: "Develop UI/UX design",
      },
      {
        step2Tag: "finalize UI/UX ",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "Develop User Stories",
      },
      {
        step3Tag: "Start Implementation",
      },
      {
        step3Tag: "Perform Unit Level Testing",
      },
      {
        step3Tag: "Refactor The Code",
      },
    ],

    step4Heading: "Deployment",
    processStep4: [
      {
        step4Tag: "Perform Testing ",
      },
      {
        step4Tag: "Manage Deployment and DevOps",
      },
      {
        step4Tag: "Release Product",
      },
    ],
  },
  {
    id: "SERVwebAppDev",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },
  {
    id: "SERVCustSoftDev",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },
  {
    id: "SERVcloudAppMng",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },
  {
    id: "SERVsoftTestQA",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },
  {
    id: "SERVcyberSecurity",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },
  {
    id: "SERVblockChainIots",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },
  {
    id: "SERVuiUxDesign",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },
  {
    id: "SERVtechConsServices",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },

  {
    id: "SERVdataAnalBussInt",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },

  {
    id: "SERVseo",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],

    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },
  {
    id: "SERVprojManagment",
    serviceCategDetails: [
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
      {
        categHeading: "",
        categImg: "",
        categDesc: "",
      },
    ],
    serviceLongDesc: "",
    serviceHeading: "",
    processHeading: "",
    step1Heading: "Discovery",
    processStep1: [
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Design",
    processStep2: [
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
      {
        step4Tag: "",
      },
    ],
  },
];
//Service Deatil_Two Data:END
//  DATA : END
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
    
                  <div class="row servicesImagesRow">
                    
                  </div>
      `;
        const ElservicesImagesRow =
          document.querySelector(".servicesImagesRow");
        for (singleImage of singleService.servicesImages) {
          if (ElservicesImagesRow) {
            ElservicesImagesRow.innerHTML += `
          <div class="col-md-2 pt-5 col-4">
          <center> <img src="${singleImage.image}" alt="" /><br>
                     <h6 class="pt-2">${singleImage.serviceName}</h6></center> 
                    </div>
          `;
          }
        }
        break;
      }
    }
  }
};

FnRenderTechStactTwo("btnwebApp");
// Services Stact : END
//
//
//
//

//Our Services Container rendering :Start
const FnRenderOurService = () => {
  if (ElourServicesContainer) {
    ElourServicesContainer.innerHTML = "";
    for (singleOurService of ourServices) {
      console.log(singleOurService.id);
      //   ElourServicesContainer.innerHTML += `
      //   <div class="col-sm-3 col-10 ourServiceElement" id="${singleOurService.id}">
      //   <div class="row">
      //     <div class="col-md-4 col-12">
      //       <img
      //         src="assets/images/mobile-development.png"
      //         alt="Mobile App Development"
      //       />
      //     </div>
      //     <div class="col-md-8 col-12">
      //       <h5>Mobile Application Development</h5>
      //     </div>
      //   </div>
      //   <div class="row">
      //     <div class="col-12">
      //       <p>
      //         We provide application design, integration, and management
      //         services throughout the entirety of the application life
      //         cycle. Whether it's a consumer-facing app or a game-changing
      //         enterprise-level solution
      //       </p>
      //     </div>
      //   </div>
      // </div>
      //     `;
    }
  }
};
FnRenderOurService();
//Our Services Container rendering :END

//
//
//
//
// EVENTS : START
btnMobApp.addEventListener("click", function () {
  const elementId = btnMobApp.id;
  FnAddClass(btnMobApp);
  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});
btnwebApp.addEventListener("click", function () {
  const elementId = btnwebApp.id;
  FnAddClass(btnwebApp);
  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btDatabases.addEventListener("click", function () {
  const elementId = btDatabases.id;
  FnAddClass(btDatabases);
  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnBigData.addEventListener("click", function () {
  const elementId = btnBigData.id;
  FnAddClass(btnBigData);
  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnIOTs.addEventListener("click", function () {
  const elementId = btnIOTs.id;
  FnAddClass(btnIOTs);
  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnBlockChain.addEventListener("click", function () {
  const elementId = btnBlockChain.id;
  FnAddClass(btnBlockChain);
  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnSwTesting.addEventListener("click", function () {
  const elementId = btnSwTesting.id;
  FnAddClass(btnSwTesting);
  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnCloudMngmnt.addEventListener("click", function () {
  const elementId = btnCloudMngmnt.id;
  FnAddClass(btnCloudMngmnt);
  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

btnVersionControl.addEventListener("click", function () {
  const elementId = btnVersionControl.id;
  FnAddClass(btnVersionControl);
  for (const singleService of allServices) {
    if (singleService.id === elementId) {
      FnRenderTechStactTwo(singleService.id);
      break;
    }
  }
});

if (btnGetStarted) {
  btnGetStarted.addEventListener("click", FnGetstarted);
}
if (btnGetInTouh) {
  btnGetInTouh.addEventListener("click", FnGetstarted);
}
// EVENTS : END

const FnAddClass = (btnId) => {
  if (btnMobApp.classList.contains("h6Active")) {
    btnMobApp.classList.remove("h6Active");
  }
  if (btnwebApp.classList.contains("h6Active")) {
    btnwebApp.classList.remove("h6Active");
  }
  if (btDatabases.classList.contains("h6Active")) {
    btDatabases.classList.remove("h6Active");
  }
  if (btnBigData.classList.contains("h6Active")) {
    btnBigData.classList.remove("h6Active");
  }
  if (btnIOTs.classList.contains("h6Active")) {
    btnIOTs.classList.remove("h6Active");
  }
  if (btnBlockChain.classList.contains("h6Active")) {
    btnBlockChain.classList.remove("h6Active");
  }
  if (btnSwTesting.classList.contains("h6Active")) {
    btnSwTesting.classList.remove("h6Active");
  }
  if (btnCloudMngmnt.classList.contains("h6Active")) {
    btnCloudMngmnt.classList.remove("h6Active");
  }
  if (btnVersionControl.classList.contains("h6Active")) {
    btnVersionControl.classList.remove("h6Active");
  }

  btnId.classList.add("h6Active");
};

/* Service Details Page : Start*/

const ElReadyDiscuss = document.querySelector(".readyToDiscuss");
const ElWods = document.querySelector(".word");
if (ElWods) {
  var words = [
      "Ready To Discuss a Project With Us?",
      "Talk To Us Today For a Free Consultation!",
    ],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 30,
    speed = 70;
  var wordflick = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      $(ElWods).text(part);
    }, speed);
  };
  wordflick();
}

// SHOWING or HIDING BOOK DETAIL: START

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

// SHOWING or HIDING BOOK DETAIL:End

/* Service Details Page : END*/
