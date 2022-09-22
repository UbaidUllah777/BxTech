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
    step2Heading: "UI/UX Design",
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
        categHeading: "Web Application Development",
        categImg: "",
        categDesc:
          "We ideate and plan to design and develop custom web solutions to connect our clients with their customers efficiently. Let’s develop feature-rich, highly functional, robust, secure, and scalable custom web solutions along with engaging UI/UX design that enhances your brand.",
      },
      {
        categHeading: "Progressive Web Development",
        categImg: "",
        categDesc:
          "We use progressive enhancement strategies to develop cross-platform web applications. Hire experienced web developers to build responsive Progressive Web Applications (PWAs) and ensure high performance in both online and offline mode.",
      },
      {
        categHeading: "Full Stack Development",
        categImg: "",
        categDesc:
          "We have a team of skilled full-stack developers with expertise in MEAN and MERN stack. You can hire frontend and backend development teams separately as well. Get full-stack development on MEAN, MERN, PHP + Vue.js, .Net + JS, to name a few.",
      },
      {
        categHeading: "Upgradation and Migration",
        categImg: "",
        categDesc:
          "Our team of web developers and designers has expertise in developing solutions using the newest technologies. Whether you want to upgrade outdated web technology or want to migrate to a new CMS, we have skilled web developers and designers to make the transition smooth.",
      },
    ],

    serviceLongDesc:
      "Adopt a modern and state-of-the-art approach for your next mobile application development project with BX Technologies. A top-rated software development firm where the focus is on the multi-dimensional aspects of your project idea. We believe in and deliver a scalable, interactive, high-performance, and fully functional mobile application to our clients across the globe. Bx technologies have the expertise to undertake any project wither, developing an application from scratch or maintaining or improving new features in an existing mobile application. We are experts in ios, Android, cross-platform, and native mobile application development. Our development team would love to hear from you and work on turning your ideas into reality.",
    serviceHeading:
      "Web app development services to build innovative experiences",
    processHeading: "Agile Based Web Application Development",
    step1Heading: "Requirments Analysis",
    processStep1: [
      {
        step1Tag: "Business case study",
      },
      {
        step1Tag: "Architect solution",
      },
      {
        step1Tag: "Refine proposed solution",
      },
    ],
    step2Heading: "UI/UX Design",
    processStep2: [
      {
        step2Tag: "Develop mock-ups",
      },
      {
        step2Tag: "Create UI design",
      },
      {
        step2Tag: "Finalize design",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "User stories creation",
      },
      {
        step3Tag: "Coding and implementation",
      },
      {
        step3Tag: "Unit level testing",
      },
    ],

    step4Heading: "Deployment",
    processStep4: [
      {
        step4Tag: "Conduct QA testing",
      },
      {
        step4Tag: "Reslove bugs and issues",
      },
      {
        step4Tag: "Track DevOps",
      },
    ],
  },
  {
    id: "SERVCustSoftDev",
    serviceCategDetails: [
      {
        categHeading: "Legacy Systems",
        categImg: "",
        categDesc:
          "Businesses must innovate to stay relevant, and Clustox rebuilds legacy systems to be more dynamic, user-friendly, and efficient.",
      },
      {
        categHeading: "API Development And Software Integration",
        categImg: "",
        categDesc:
          "We can also provide API-driven development and support solutions from third-party vendors for seamless integration.",
      },
      {
        categHeading: "SaaS Applications Development",
        categImg: "",
        categDesc:
          "We will leverage our knowledge to build your SaaS solution on time and within your budget.",
      },
      {
        categHeading: "Enterprise Applications",
        categImg: "",
        categDesc:
          "Our optimized solutions include critical business processes and functions, i.e., ERP, middleware, integration, inventory management, and more.",
      },
    ],

    serviceLongDesc:
      "Our custom software development services cater to our clients with the freedom to grow and scale at unprecedented rates. We help startups, medium-sized businesses, and enterprise-grade organizations to build performance-oriented systems.",
    serviceHeading: "Creating Custom Software Solutions of Outstanding Quality",
    processHeading: "Custom Software Development Services",
    step1Heading: "Requirments Analysis",
    processStep1: [
      {
        step1Tag: "Strategic consulting",
      },
      {
        step1Tag: "Feasibility study",
      },
      {
        step1Tag: "Proposal document",
      },
    ],
    step2Heading: "UI/UX Desgin",
    processStep2: [
      {
        step2Tag: "Design consultation",
      },
      {
        step2Tag: "wireframes development",
      },
      {
        step2Tag: "UI creation",
      },
    ],
    step3Heading: "Development",
    processStep3: [
      {
        step3Tag: "Application Architecture",
      },
      {
        step3Tag: "MVP development",
      },
      {
        step3Tag: "implementation",
      },
    ],

    step4Heading: "Delivery",
    processStep4: [
      {
        step4Tag: "Testing",
      },
      {
        step4Tag: "Maintenence",
      },
      {
        step4Tag: "support",
      },
    ],
  },
  {
    id: "SERVcloudAppMng",
    serviceCategDetails: [
      {
        categHeading: "App Migration",
        categImg: "",
        categDesc:
          "We plan, design, and implement your app in the cloud leveraging cloud services and efficient CI/CD pipelines to deliver high-performing and cost-effective apps.",
      },
      {
        categHeading: "Data Warehouse Migration",
        categImg: "",
        categDesc:
          "We plan, design, and migrate your DWH using cloud services and serverless ETL models to reduce cloud consumption costs and increase DWH performance.",
      },
      // {
      //   categHeading: "",
      //   categImg: "",
      //   categDesc: "",
      // },
      // {
      //   categHeading: "",
      //   categImg: "",
      //   categDesc: "",
      // },
    ],

    serviceLongDesc:
      "Achieve greater flexibility and cost-effectiveness with our advanced cloud migration services.",
    serviceHeading: "Utilize Cloud Migration Opportunities to the Full",
    processHeading: "",
    step1Heading: "Goal Setting",
    processStep1: [
      {
        step1Tag: "Cloud Strategy development",
      },
      {
        step1Tag: "Planing",
      },
      {
        step1Tag: "Cloud Selection",
      },
    ],
    step2Heading: "Portfolio Analysis",
    processStep2: [
      {
        step2Tag: "Deep analysis",
      },
      {
        step2Tag: "Migration Planing",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Migration",
    processStep3: [
      {
        step3Tag: "Setting up cloud",
      },
      {
        step3Tag: "Cloud environemnt setting",
      },
      {
        step3Tag: "Mirgration",
      },
    ],

    step4Heading: "Optimization",
    processStep4: [
      {
        step4Tag: "Track application behavour",
      },
      {
        step4Tag: "Tuning and optimization",
      },
      {
        step4Tag: "Test and access performance",
      },
    ],
  },
  {
    id: "SERVsoftTestQA",
    serviceCategDetails: [
      {
        categHeading: "QA Automation",
        categImg: "",
        categDesc:
          "QA automation reduces overall test analysis cost. Accelerate your testing process by applying a large set of functions comprising test automation, tools analysis, software maintenance, and implementation of test scripts. We work with you to enable your QA testing and embed it in your software development life cycle.",
      },
      {
        categHeading: "Mobile Application Testing",
        categImg: "",
        categDesc:
          "Security and scalability are the cornerstones of mobile applications. Achieve a higher level of mobile app testing maturity in an accelerated way. Our mobile application QA testers perform functional and non-functional testing with a manual as well as automated approach for thoroughly testing your application.",
      },
      {
        categHeading: "Performance Testing",
        categImg: "",
        categDesc:
          "Inefficient responsiveness, increasing load times, and instability can be overcome by applying performance testing. Our QA engineers specialize in leading performance testing tools including SOASTA, LoadRunner, and NeoLoad, and can quickly identify and resolve performance bottlenecks in your software.",
      },
      {
        categHeading: "Usability Testing",
        categImg: "",
        categDesc:
          "Usability Testing ensures that customers will love the application or not. Bring best in your systems by testing UI flows, consistency, appearance, and more. Our quality assurance engineers perform exhaustive analysis to determine potential errors, confusing UI flows, and performance flaws to create a seamless product experience.",
      },
      {
        categHeading: "Security Testing",
        categImg: "",
        categDesc:
          "Security testing dramatically increases your application’s security. Uncover potential vulnerabilities to ensure the safety of data, accounts, access, and connections of your users. Our QA engineers are experts in performing risk assessments and penetration testing to shield your application from malicious threats.",
      },
      {
        categHeading: "Manual Testing ",
        categImg: "",
        categDesc:
          "During manual testing, our QA team tests software applications from the end user’s perspective and identifies vulnerabilities that cannot be detected automatically.",
      },
      {
        categHeading: "API Testing ",
        categImg: "",
        categDesc:
          "Our API Testing services include using the most advanced automated tools to develop reliable applications with core functionality and high performance.",
      },
    ],

    serviceLongDesc:
      "Providing fully tailored QA solutions to deliver top-notch software and apps. Our QA experts help you deliver quality software and to provide your end customers with the best experience. Our experts perform end-to-end testing to deploy bug-free software products established on DevSecOps metrics and automation.",
    serviceHeading: "Ensure Quality Assurance to Enhance Customer Experience",
    processHeading: "Full Cycle Software Quality Assurance Services",
    step1Heading: "Test Planing",
    processStep1: [
      {
        step1Tag: "Project Evaluation",
      },
      {
        step1Tag: "Testing Strategy",
      },
      {
        step1Tag: "Test planning",
      },
    ],
    step2Heading: "Test Design",
    processStep2: [
      {
        step2Tag: "Test cases strategy",
      },
      {
        step2Tag: "Developing testing creteria",
      },
      {
        step2Tag: " Automated testing execution",
      },
    ],
    step3Heading: "Test Execution",
    processStep3: [
      {
        step3Tag: "Test execution",
      },
      {
        step3Tag: "Test cases and scripts revision",
      },
      {
        step3Tag: "Interim test result reporting",
      },
    ],

    step4Heading: "Release Testing",
    processStep4: [
      {
        step4Tag: "Acceptance testing",
      },
      {
        step4Tag: "Scope Verification",
      },
      {
        step4Tag: "Deliverables check",
      },
      {
        step4Tag: "Final tests results reporting",
      },
    ],
  },
  {
    id: "SERVcyberSecurity",
    serviceCategDetails: [
      {
        categHeading: "Web Application Security",
        categImg: "",
        categDesc:
          "Minimize the disruptions with BX Technologies web application penetration testing that leverages OWASP v4 Guide.",
      },
      {
        categHeading: "Internal/External Network Penetration Testing",
        categImg: "",
        categDesc:
          "Inhibit any anonymous intrusion to protect the internal networks using InvoZone’s foolproof internal and external penetration testing.",
      },
      {
        categHeading: "Phishing Simulation Service",
        categImg: "",
        categDesc:
          "Avoid phishing campaigns with the assistance of InvoZone’s engineers by observing the flurrying of phishing attacks and scheduling a dynamic simulation service.",
      },
      {
        categHeading: "Vulnerability Assessment",
        categImg: "",
        categDesc:
          "Our security specialists look into your current security architecture to detect and analyze vulnerabilities & threats and give solutions to eradicate these vulnerabilities hampering your IT infrastructure.",
      },
    ],

    serviceLongDesc:
      "Let’s become resilient against cyber-attacks with our laser-focused pentesting services. Prioritize your vulnerability fixes to build your security posture.",
    serviceHeading:
      "Immunize Your Business With BX Technologies Pentesting Services",
    processHeading: "",
    step1Heading: "Identify Vulnerabilities",
    processStep1: [
      {
        step1Tag:
          "Our cybersecurity consultants do a thorough assessment of your key business areas to identify its weak points.",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Risk Assessment",
    processStep2: [
      {
        step2Tag:
          "We do a cybersecurity risk assessment to measure the organization’s level of risk against cyber threats and suggest solutions.",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Risk Mitigation",
    processStep3: [
      {
        step3Tag:
          "Our security experts make sure that the suggested solutions are implemented throughout the company to eliminate risks.",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Monitor & Report",
    processStep4: [
      {
        step4Tag:
          "Our cybersecurity team provides you with on-going performance monitoring, reporting & suggestions for further improvements.",
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
        categHeading: "Decentralized Finance Apps",
        categImg: "",
        categDesc:
          "No need to rely on middlemen or corporations for server space, supervision, and data storage when you can transform traditional finance with Defi apps using blockchain networks. Get ​​a wide range of crypto-centric services in the finance industry with InvoZone.",
      },
      {
        categHeading: "Smart Contracts",
        categImg: "",
        categDesc:
          "Automate agreement execution without any third-party’s involvement. We provide dedicated blockchain developers - experts in Bitcoin, Ripple, Hyperledger, and Ethereum blockchain technology on an hourly basis to help you get tailored solutions.",
      },
      {
        categHeading: "Online Marketplaces",
        categImg: "",
        categDesc:
          "Do you want your online marketplace to be secure, and trustworthy? Our developers know the importance of transaction integrity. So let us help you build your own blockchain marketplace based on your specific requirements.",
      },
      {
        categHeading: "Supply Chain Management",
        categImg: "",
        categDesc:
          "Use blockchain technology for supply chain transparency. Our qualified team of developers brings promising opportunities for you to improve your supply chain processes with high traceability and less administrative costs.",
      },
    ],

    serviceLongDesc:
      "Build decentralized solutions with blockchain technology for more transparency, efficiency, and automation.All our blockchain solution development services aim to provide robust, secure, and highly efficient solutions for clients in every industry.",
    serviceHeading: "Full-cycle Blockchain Development Services",
    processHeading: "",
    step1Heading: "Requirements Gathering",
    processStep1: [
      {
        step1Tag: "List of high-level requirements",
      },
      {
        step1Tag: "Project size assessment",
      },
      {
        step1Tag: "Workshop proposal, SOW",
      },
    ],
    step2Heading: "Strategic Discovery Workshop",
    processStep2: [
      {
        step2Tag: "MVP features & requirements doc",
      },
      {
        step2Tag: "Project plan with release strategy",
      },
      {
        step2Tag: "Development proposal, SOW",
      },
    ],
    step3Heading: "Design & Development",
    processStep3: [
      {
        step3Tag: "Deployment of ready product",
      },
      {
        step3Tag: "Product features document",
      },
      {
        step3Tag: "A clickable prototype",
      },
    ],

    step4Heading: "Launch & Support",
    processStep4: [
      {
        step4Tag: "Product launch",
      },
      {
        step4Tag: "Support & maintenance",
      },
      {
        step4Tag: "SLA contract",
      },
    ],
  },
  {
    id: "SERVuiUxDesign",
    serviceCategDetails: [
      {
        categHeading: "Web UI/UX Design",
        categImg: "",
        categDesc:
          "Simplify your technically complex products in cahoots with InvoZone’s UI/UX development services to grow web traffic through modern design aesthetics and dynamic features.",
      },
      {
        categHeading: "Mobile App UI/UX Design",
        categImg: "",
        categDesc:
          "Build a comfortable experience for your mobile users that delivers accustomed experiences on their phone screens. InvoZone designs mobile apps according to iOS and Android conventions.",
      },
      {
        categHeading: "HCI Design",
        categImg: "",
        categDesc:
          "Maximize operational efficiency and improve productivity through InvoZone’s research, interviews and persona development to deliver user-friendly HCI designs.",
      },
      {
        categHeading: "UX consulting",
        categImg: "",
        categDesc:
          "Want to quickly test different approaches to your issues? Spend 5 days to accelerate and simplify design process of your product",
      },
    ],

    serviceLongDesc:
      "Increase future product adoption by creating intuitive user experience design.Invest in user interface design for higher conversion rates and increased revenue. Boost customer retention by developing fit-for-purpose UI/UX design.",
    serviceHeading:
      "Solve the most pressing product design challenges with InvoZone’s UX and design wizards",
    processHeading: "Top UI/UX Design Services",
    step1Heading: "Discovery Workshop",
    processStep1: [
      {
        step1Tag:
          "We conduct thorough meetings & sessions to understand user requirements. It helps us to kick-start our collaboration and define next steps.",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Wireframing & Prototyping",
    processStep2: [
      {
        step2Tag:
          "Starting form detailed wireframes, we slowly evolve into a thorough, high-fidelity prototype of your product.",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "UI Design",
    processStep3: [
      {
        step3Tag:
          "Our UI design services team makes sure that everything is absolutely stunning and gives users an amazing experience.",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Testing & Feedback",
    processStep4: [
      {
        step4Tag:
          "We thoroughly test the design, incorporate valuable feedback from the end-user, and make sure the final product is just awesome!",
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
        categHeading: "Technology Consulting",
        categImg: "",
        categDesc:
          "We analyze the existing technology area of your interest and assist in its steady evolution to enhance your business growth.Technology areas we consult on: AI/ML Consulting, IoT Consulting, Cloud Consulting, Blockchain Consulting,Computer Vision Consulting",
      },
      {
        categHeading: "Digital Strategy Consulting",
        categImg: "",
        categDesc:
          "We consult on turning IT into a major contributor to your business performance to increase your revenue exponentially. Digital consulting includes: A value-driving business IT strategy, a plan for IT service delivery optimization.Revenue from new digital sales channels. Increase in sales via marketing and sales automation. Employee productivity via simple user experience.",
      },
      {
        categHeading: "Solutions Consulting",
        categImg: "",
        categDesc:
          "We analyze your business needs and help you make strategic decisions on the successful implementation of business-critical solutions.What we consult on: How to maximize ROI.Feature management & prioritization. How to integrate a solution into the existing IT landscape. How to ensure outstanding UX and user adoption.How to organize further solution support and evolution.",
      },
      {
        categHeading: "Software Support Services",
        categImg: "",
        categDesc:
          "Boost risk assessment and mitigation and defend your software from outages and attacks by defining service level requirements with our on-site and remote software support services.",
      },
    ],

    serviceLongDesc:
      "We help our clients leverage advanced IT consultancy services to improve their business performance and achieve their goals.",
    serviceHeading: "Harness the Power of IT Consultancy Services",
    processHeading: "Why Bx Technologies IT Consulting Services",
    step1Heading: "Fast service results",
    processStep1: [
      {
        step1Tag:
          "We advocate incremental changes to help you get the first positive outcome within 2-6 months.",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Cost-Effective Optimization",
    processStep2: [
      {
        step2Tag:
          "We apply our 10+ years of diverse experience to achieve substantial results for your business at a reasonable budget.",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "KPIs-Based Consultancy",
    processStep3: [
      {
        step3Tag:
          "We define target KPIs (increase in sales, decrease in costs, etc.) with you and build our consulting services around these targets.",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Reduced Security Risk",
    processStep4: [
      {
        step4Tag:
          "IT consultants can identify & resolve security threats in your network & systems & establish protocols to ensure better protection.",
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
        categHeading: "Artificial Intelligence",
        categImg: "",
        categDesc:
          "Successfully build, deploy, and manage AI solutions in your company by leveraging our deep knowledge around AI.",
      },
      {
        categHeading: "Machine Learning",
        categImg: "",
        categDesc:
          "Stay ahead of the competition by working with our top machine learning analysts to capture the unexploited areas of business models.",
      },
      {
        categHeading: "Business Intelligence",
        categImg: "",
        categDesc:
          "Empower your organization to make data-driven refinements & improve everything from overall strategy to day-to-day operations.",
      },
      {
        categHeading: "Data Analytics",
        categImg: "",
        categDesc:
          "Unlock the power of analytics to drive deep insights by tapping into data you didn’t even know you had in your company.",
      },
    ],

    serviceLongDesc:
      "Bring substantial revenue generation and enhance operational efficiency leveraging our advanced data science services.",
    serviceHeading:
      "Unlock Your Business Potential With Our Data Science Solutions",
    processHeading: "",
    step1Heading: "Define the Problem",
    processStep1: [
      {
        step1Tag:
          "We thoroughly assess your business environment and carefully analyze the operations bottlenecks to identify key goals and challenges.",
      },
      {
        step1Tag: "",
      },
      {
        step1Tag: "",
      },
    ],
    step2Heading: "Collect & Prepare Data",
    processStep2: [
      {
        step2Tag:
          "We gather the data related to your business and clients in different formats and evaluate data quality to structure data for further analysis.",
      },
      {
        step2Tag: "",
      },
      {
        step2Tag: "",
      },
    ],
    step3Heading: "Analyze & Incorporate",
    processStep3: [
      {
        step3Tag:
          "We develop analytical formulas and algorithms to discover insights and integrate these insights into business to unlock new opportunities",
      },
      {
        step3Tag: "",
      },
      {
        step3Tag: "",
      },
    ],

    step4Heading: "Validate the results",
    processStep4: [
      {
        step4Tag:
          "We continuously monitor and analyze the performance of your algorithms and make necessary improvements & adjustments.",
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
        categHeading: "Realistic Estimation of Product Development",
        categImg: "",
        categDesc:
          "Build your scalable software product with InvoZone’s masterly software project manager that creates and delivers your project within budget considering the aptest software development methodologies.",
      },
      {
        categHeading: "Software Development Life Cycle Planning",
        categImg: "",
        categDesc:
          "Engage with InvoZone’s expert software development management team that plan, build, and maintain products based on the effective software development strategy to enhance your business efficiency.",
      },
      {
        categHeading: "Remote Software Project Management",
        categImg: "",
        categDesc:
          "You can verily trust in our highly productive and devoted remote project management team that has been delivering glitch-free projects to time and date — by implementing the right strategy and practices to meet your end business goals.",
      },
      {
        categHeading: "Software Quality Assurance",
        categImg: "",
        categDesc:
          "Deeply skim through the minutest details of your product and never a miss bug with InvoZone’s sharp-eyed software quality assurance experts skilled in modern testing techniques that ensure zero downtime and error-free project delivery fulfilling your quality criteria.",
      },
    ],
    serviceLongDesc:
      "Lead your project with our end-to-end software project management solutions. Employ effective and optimized Software Project Management Services. Reduce uncertainties and risks in software project development. Streamline the working process to implement your idea. Streamline the working process to implement your idea.",
    serviceHeading:
      "Ace Software Project Management Services, Software Project Management Services We Offer",
    processHeading: "",
    step1Heading: "Project Initiation",
    processStep1: [
      {
        step1Tag: "Idea Discussion",
      },
      {
        step1Tag: "Brain Stroming",
      },
      {
        step1Tag: "Project Start",
      },
    ],
    step2Heading: "Project Backlog",
    processStep2: [
      {
        step2Tag: "Develop Backlog",
      },
      {
        step2Tag: "Refine backlog",
      },
      {
        step2Tag: "Tools selection",
      },
    ],
    step3Heading: "Execution",
    processStep3: [
      {
        step3Tag: "Select execution process",
      },
      {
        step3Tag: "Monitor performance",
      },
      {
        step3Tag: "Report Progress",
      },
    ],

    step4Heading: "Release",
    processStep4: [
      {
        step4Tag: "finalize project",
      },
      {
        step4Tag: "verify Acceptance Certieria",
      },
      {
        step4Tag: "Close project",
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
      ElourServicesContainer.innerHTML += `
        <div class="col-sm-3 col-10 ourServiceElement" onclick="FnShowService('${singleOurService.id}')" id="${singleOurService.id}">
        <div class="row">
          <div class="col-md-4 col-12">
            <img
              src="${singleOurService.serviceImg}"
              alt="Mobile App Development"
            />
          </div>
          <div class="col-md-8 col-12">
            <h5>${singleOurService.serviceName}</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
            ${singleOurService.serviceShortDesc}
            </p>
          </div>
        </div>
      </div>
          `;
    }
  }
};
FnRenderOurService();
const FnShowService = (serviceId) => {
  sessionStorage.setItem("service", serviceId);
  window.location.href = "sevicesDetials.html";
};
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

/* Service Details Page : END*/
