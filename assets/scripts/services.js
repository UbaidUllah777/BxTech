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
    bannerImg: "assets/images/serviceDetailImages/SVmobAppdev.png",
    bannerH1: "Mobile App Development",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",
    serviceCategDetails: [
      {
        categHeading: "Android Apps",
        categImg: "assets/images/serviceDetailImages/android.png",
        categDesc:
          "BX Technologies robust, scalable and dynamic Mobile Apps using different frameworks, which not only fulfill your business requirement; but also strictly follow Google rules, regulations, guidelines, and industrial standards.",
      },
      {
        categHeading: "IoS Apps",
        categImg: "assets/images/serviceDetailImages/IOSApps.png",
        categDesc:
          "We develop mobile apps targeting the IoS platform using swift and objective-C programming languages to cater to the demands of customers and provide them with a seamless experience with apple products.",
      },
      {
        categHeading: "Cross Platform Apps",
        categImg: "assets/images/serviceDetailImages/crossPplatformApps.png",
        categDesc:
          "Due to the availability of multiple platforms, we leverage our experience to deliver top niche cross-platform solutions to support native apps on various platforms using HTML, JavaScript and react native framework.",
      },
      {
        categHeading: "Flutter App Development",
        categImg: "assets/images/serviceDetailImages/flutterApps.png",
        categDesc:
          "We develop user-friendly, interactive, robust, and scalable native Apple and Android Mobile applications across different industry domains.",
      },
    ],

    serviceLongDesc:
      "Adopt a modern and state-of-the-art approach for your next mobile application development project with BX Technologies. A top-rated software development firm where the focus is on the multi-dimensional aspects of your project idea. We believe in and deliver a scalable, interactive, high-performance, and fully functional mobile application to our clients across the globe. Bx technologies have the expertise to undertake any project wither, developing an application from scratch or maintaining or improving new features in an existing mobile application. We are experts in ios, Android, cross-platform, and native mobile application development. Our development team would love to hear from you and work on turning your ideas into reality. ",
    serviceHeading:
      "Innovative Mobile Application Development Services that Meet User Expectations",
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
    bannerImg: "assets/images/serviceDetailImages/SVwebAppdev.png",
    bannerH1: "Custom Web Application Development",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "Custom Web Application Development",
        categImg: "assets/images/serviceDetailImages/webAppDevelopment.png",
        categDesc:
          "We at BX technologies brainstorm, ideate, plan and execute custom-based web app solutions tailored to our client-specific needs. Our emphasis on quality, security, and scalability during the development process results in enhanced user experience and satisfaction. ",
      },
      {
        categHeading: "Progressive Web Development",
        categImg:
          "assets/images/serviceDetailImages/ProgressiveWebDevelopment.png",
        categDesc:
          "Our customer-centric approach enables us to implement cross-platform progressive web applications. Thanks to the pool of our experienced web developers that ensure better performance and user experience in PWAs development.",
      },
      {
        categHeading: "Full Stack Web Development",
        categImg:
          "assets/images/serviceDetailImages/fullStackWebDevelopment.png",
        categDesc:
          "Our Web application Development team consist of developers and designers having experience in a diverse range of web development technologies. This enables them to carry out full-stack development on MERN, MEAN, PHP, .Net and JavaScript.",
      },
      {
        categHeading: "Web Application Upgradation",
        categImg: "assets/images/serviceDetailImages/webUpgradeMigration.png",
        categDesc:
          "Transitioning from a legacy system to the newest technology is always a nightmare for any organization or business. Thanks to the expertise of our development team. We have got you covered and can help in the smooth transition from a legacy system to a state-of-the-art system. ",
      },
    ],

    serviceLongDesc:
      "Experience a state-of-the-art and structured approach for your Web application development project with BX Technologies. A top-rated software development firm where the focus is on the multi-dimensional aspects of your project idea. We believe in and deliver scalable, interactive, high-performance, and functional web applications to our clients across the globe. We use different web development programming languages, tools, and frameworks according to the project and business case requirements. Our developers are experienced and proficient in MERN, MEAN, JavaScript, .Net, PHP, RubyonRails, and many other web development technology stacks. ",
    serviceHeading:
      "Full-Stack Web Development Services that Deliver High Performance, Scalability, and Reliability",
    processHeading: "Agile Powered Web Development",
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
    bannerImg: "assets/images/serviceDetailImages/SVcustomSWdev.png",
    bannerH1: "Custom Software Development",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "Legacy Systems",
        categImg: "assets/images/serviceDetailImages/lagacySystem.png",
        categDesc:
          "To stay relevant and keep your presence in a competitive environment, you need to keep looking for innovation and updates in your system. BX technology remodels and develops a legacy system to meet the varying demands of modern-day businesses.  ",
      },
      {
        categHeading: "API Development And Software Integration",
        categImg: "assets/images/serviceDetailImages/apiDevelopment.png",
        categDesc:
          "Modern-day software products and solutions are highly efficient and robust; This robustness and efficiency come due to the use of  API,s. Our dedicated teams of software engineers have in-depth experience in API-driven development and API integration.",
      },
      {
        categHeading: "SaaS Applications Development",
        categImg:
          "assets/images/serviceDetailImages/enterpriseDevelopement.png",
        categDesc:
          "The software as a Service model for the development and deployment of software applications is widely in use worldwide; due to several reasons, such as less downtime and infrastructure costs, etc. We use our knowledge and experience to develop SaaS solutions within the deadline and budget. ",
      },
      {
        categHeading: "Enterprise Applications",
        categImg: "assets/images/serviceDetailImages/webAppDevelopment.png",
        categDesc:
          "Bx technology offers highly customized and optimized software solutions to its clients to improve the core functions and operations of the business. Employing enterprise-level applications like ERP, SCM, and third-party software integrations in core processes leads to greater level optimization. ",
      },
    ],

    serviceLongDesc:
      "We plan, code, test and deploy scalable and custom software solutions for start-ups, small and medium-sized businesses, and enterprise-level applications to empower them to unleash the potential of digital transformation. Our developers and software engineers leverage agile practices to develop innovative & powerful web applications, high-level mobile applications, and any other custom applications to meet the specified requirements and market needs. So, Hire us for your digital transformation adventure; we will make it a smooth ride for you. One of the most visible advantages of a custom solution is that it eliminates any further investments in the shape of commercial-of-the-shelf products. ",
    serviceHeading:
      "Custom Software Development Services that Takes Care of your Digital Transformation Needs",
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
    bannerImg: "assets/images/serviceDetailImages/SVcloudManagment.png",
    bannerH1: "Cloud Application Management",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "Cloud App Deployment",
        categImg: "assets/images/serviceDetailImages/cloudAppMigration.png",
        categDesc:
          "To offer high-performing, maintainable, and reasonably priced application deployment and management, we plan, develop, and deploy your application in the cloud using a variety of cloud services, deployment models and robust continuous integration and continuous deployment (CI/CD) pipelines, including 24/7 maintenance.",
      },
      {
        categHeading: "Data Warehouse Migration",
        categImg:
          "assets/images/serviceDetailImages/dataWarehousemigration.png",
        categDesc:
          "We plan, create, and migrate your Data Warehouse using cloud services and serverless execute, transform and load (ETL) methods.  With the Cloud deployment, the operating costs of a Data warehouse can be reduced significantly, Which results in improved Data Warehouse performance and operations. ",
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
      "Cloud services offer greater flexibility and managed services to achieve better results in terms of cost and application availability.  Our team of professional developers and engineers is capable of undertaking a wide range of cloud-related activities and tasks.",
    serviceHeading:
      "Unleash and Utilize the Power of Cloud Computing to Maximum",
    processHeading: "Cloud App Deployment Process",
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
    bannerImg: "assets/images/serviceDetailImages/SVswTestingQA.png",
    bannerH1: "Software Testing / QA",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "QA Automation",
        categImg: "assets/images/serviceDetailImages/QAautomation.png",
        categDesc:
          "Fast track and automate your application testing process by applying test automation techniques. Our team of experienced test engineers collaborates and works with you to integrate the QA process into your product development. ",
      },
      {
        categHeading: "Web and Mobile App Testing",
        categImg: "assets/images/serviceDetailImages/mobileappTesting.png",
        categDesc:
          "Attain a substantial level of confidence and maturity on your mobile or web app with our experienced QA and test engineers. We apply manual and Automated testing techniques to perform functional and non-functional testing.",
      },
      {
        categHeading: "Performance Testing",
        categImg: "assets/images/serviceDetailImages/performanceTesting.png",
        categDesc:
          "Our Test engineers employ a wide range of tools and techniques to assess and test the performance of your software solution. Performance testing tools like LoadRunner and JMeter are used to unhide performance issues in software. ",
      },
      {
        categHeading: "Usability Testing",
        categImg: "assets/images/serviceDetailImages/usebilityTesting.png",
        categDesc:
          "To provide an outstanding user experience to end-users, Our testing and QA department put extraordinary efforts into identifying errors, ambiguous user interface flows, and performance bottlenecks in your application.  ",
      },
      {
        categHeading: "Security Testing",
        categImg: "assets/images/serviceDetailImages/securityTesting.png",
        categDesc:
          "To safeguard your application from exposure to any malicious activity, our Test engineers have the expertise to perform security-related testing such as vulnerability risks assessment and penetration tests.",
      },
      {
        categHeading: "Manual Testing ",
        categImg: "assets/images/serviceDetailImages/manualTesting.png",
        categDesc:
          "To make sure that we test an application end-to-end. Our QA engineers conduct testing of the software application; while, keeping in mind the end-user perspective to unhide any potential errors.",
      },
      {
        categHeading: "API Testing ",
        categImg: "assets/images/serviceDetailImages/apiTesting.png",
        categDesc:
          "API is considered a critical component of any software solution. To ensure that the API functions as expected. Extensive tests of the API are done manually and automatically to ensure its functionality, performance, and security. ",
      },
    ],

    serviceLongDesc:
      "BX Technologies provides custom and tailored software quality assurance services to develop and deploy high-quality and efficient software systems. Our test engineers and managers always look for options and solutions to deliver the best quality software to you and your end-users. Our testing process is multi-dimensional, where end-to-end testing is performed on your product; while keeping in mind the rules and regulations of international testing leaders like ISTQB and ISO. Thanks to the diverse skill set of our test engineer, your software is tested for different testing purposes while employing manual, automated, and DevOps startegies. ",
    serviceHeading:
      "Oustanding Software Quality and User Experience Through Testing and Quality Assurance ",
    processHeading: "End-to-End Software Testing Service",
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
    bannerImg: "assets/images/serviceDetailImages/SVcyberSecAndPenTesting.png",
    bannerH1: "Cyber Security and Pen Testing",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "Web Application Security",
        categImg:
          "assets/images/serviceDetailImages/webApplicationsSecurity.png",
        categDesc:
          "Our team of cyber security specialists leverages their skills and experience to minimize the risks and vulnerabilities in your application. Penetration tests are carried out in accordance with cyber security standards and OWASP v4 guidelines. ",
      },
      {
        categHeading: "Internal/External Network Penetration Testing",
        categImg: "assets/images/serviceDetailImages/networkSecurity.png",
        categDesc:
          "Safeguard your critical network and IT infrastructure by employing BX technologies penetration testing. We offer a diverse range of solutions for network security by inducting efficient tools for managing your security operation center (SOC).",
      },
      {
        categHeading: "Phishing Simulation Service",
        categImg: "assets/images/serviceDetailImages/phisingSimulations.png",
        categDesc:
          "One of the most pressing issues that businesses often come across on their IT infrastructure is spam and phishing email campaigns. We help you in avoiding dangerous phishing campaigns directed at your application. Our team of experts overcomes these issues using dynamic simulation services.",
      },
      {
        categHeading: "Vulnerability Assessment",
        categImg: "assets/images/serviceDetailImages/vulnrabilityAssesment.png",
        categDesc:
          "Our cyber security specialists dig deep into your application architecture & code to identify risks, vulnerabilities, and loopholes using vulnerability assessment approaches. Moreover, our cyber security not only identifies risks & threats but develops efficient solutions to eliminate these vulnerabilities hampering your application performance.",
      },
    ],

    serviceLongDesc:
      "We utilize the latest tools and techniques to ensure your application is secure and resilient against cyber-attacks and malicious activities. Let us identify and fix your system vulnerabilities before any hacker exploits them.",
    serviceHeading:
      "Secure, Test, and Verify Your Business Critical System  With BX Technologies Pentesting Services",
    processHeading: "How We Secure Your Application",
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
    bannerImg: "assets/images/serviceDetailImages/SVblockChainAndIot.png",
    bannerH1: "Grow Your Business Now",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "Decentralized Finance Apps",
        categImg: "assets/images/serviceDetailImages/dfApps.png",
        categDesc:
          "Since the inception of blockchain technology and its applications have revolutionized several industry domains, the most disruptive implication of this technology is visible in the financial technology domain. We help businesses to develop their blockchain technology-based applications to compete,  survive and lead the market.",
      },
      {
        categHeading: "Smart Contracts",
        categImg: "assets/images/serviceDetailImages/smartContracts.png",
        categDesc:
          "Smart contracts is another term incepted after the introduction of blockchain technology; Smart contract allows users to execute agreements and contracts without involving any third party or mediator. We help clients to implement and deploy their custom & tailored solutions based on blockchain technology applications.",
      },
      {
        categHeading: "Online Marketplaces",
        categImg: "assets/images/serviceDetailImages/onlineMarketplace.png",
        categDesc:
          "Our blockchain technology developers & engineers make use of their technical and domain knowledge to plan, implement and deploy secure, reliable, and trustworthy online marketplace solutions based on blockchain technology. Online marketplace solutions are crafted with extra care while keeping transactional integrity and specific client requirements in front.  ",
      },
      {
        categHeading: "Supply Chain Management",
        categImg: "assets/images/serviceDetailImages/supplychainManagement.png",
        categDesc:
          "The Supply chain process is not straightforward as assumed by an ordinary person. There are lots of moving parts that need to keep in control to achieve the desired result and transparency. Our talented bunch of developers offers promising opportunities for our clients to enhance their supply chain system by developing blockchain-based solutions.",
      },
    ],

    serviceLongDesc:
      "Decentralized and distributed application development is becoming an absolute requirement for businesses due to their varying need of business requirements. We plan, execute and deploy decentralized solutions for clients powered by blockchain technology to ensure security, high efficiency, transparency, and robustness.",
    serviceHeading: "End-to-end Blockchain Application Development Services",
    processHeading: "Blockchain Application Development Process",
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
    bannerImg: "assets/images/serviceDetailImages/SVuiUxDesign.png",
    bannerH1: "UI/UX Design",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "Web UI/UX Design",
        categImg: "assets/images/serviceDetailImages/webAppUIDesign.png",
        categDesc:
          "An end-user can lose track of their activity while navigating an application having a complex user interface & user experience. Enhance and simplify your web application user interface and user experience with the talented designers of Bx technologies. So let us know to craft your web application user interface to relay an extraordinary user experience to your end-users.",
      },
      {
        categHeading: "Mobile App UI/UX Design",
        categImg: "assets/images/serviceDetailImages/mobileUIDesign.png",
        categDesc:
          "Delivering an outstanding user interface and user experience on mobile apps requires lots of effort and testing due to the availability of varying device types and screen sizes. Our team of UI & UX specialists looks deep into minute details to improve and enhance the mobile application user experience for major platforms like iOS and Android UI guidelines. ",
      },
      {
        categHeading: "HCI Design",
        categImg: "assets/images/serviceDetailImages/HCIDesign.png",
        categDesc:
          "Are you experiencing difficulty; while realizing a new product user interface and its impact on performance and user interaction? Our expert designer works tirelessly by conducting different experiments and applying visual designs to deliver designs that reflect a positive effect on end-users from an HCI perspective.",
      },
      {
        categHeading: "UX consulting",
        categImg: "assets/images/serviceDetailImages/UxConsulting.png",
        categDesc:
          "Are you searching for a dedicated team of expert software product designers and HCI consultants? So let us know; we guide our clients in developing their product's user experience designs. Our team follows a systematic and structured approach to suggest and devise the best possible UX design according to your product need and requirements.",
      },
    ],

    serviceLongDesc:
      "Increase future product adoption by creating intuitive user experience design.Invest in user interface design for higher conversion rates and increased revenue. Boost customer retention by developing fit-for-purpose UI/UX design.",
    serviceHeading:
      "Achieve Aspiring Design for your Product With our Product Design Titans",
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
    bannerImg: "assets/images/serviceDetailImages/SVtechConsultAnd.png",
    bannerH1: "Technology Consultancy Services",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "Technology Consulting",
        categImg: "assets/images/serviceDetailImages/TechnologyConsultancy.png",
        categDesc:
          "Our team of software and technology consultants provides support and advice to clients on several issues and problems. We help clients to develop and implement the latest technology solutions such as machine learning & AI, cloud computing, telecommunication & infotainment system testing, blockchain, and cyber security. ",
      },
      {
        categHeading: "Digital Strategy Consulting",
        categImg: "assets/images/serviceDetailImages/digitalStrategy.png",
        categDesc:
          "To enable conventional businesses to turn their losses and inefficiencies into profits and high performance in terms of effectiveness. Our team of digital technology specialists ideates, plan and execute digital strategies that achieve multi-dimensional results such as more agility and exponential growth in revenues.",
      },
      {
        categHeading: "Solutions Consulting",
        categImg: "assets/images/serviceDetailImages/problemsolving.png",
        categDesc:
          "Are you facing difficulties in integrating a new system or optimizing your existing system? We are here to help you to develop complex and critical solutions that are important to your business's core processes. We advise our clients on different aspects of digital solutions implementation and decision-making. ",
      },
      {
        categHeading: "Software Support Services",
        categImg: "assets/images/serviceDetailImages/supportServices.png",
        categDesc:
          "To ensure the smooth operations and functioning of your business-critical systems on a 24/7 basis. Our team of support engineers is eager to help you develop processes and controls that are reliable and trustworthy, which results in improved performance and less frequent system outages.",
      },
    ],

    serviceLongDesc:
      "Our Team of IT systems domain knowledge experts and consultants leverages their experiences and knowledge to assist you in overcoming challenges and bottlenecks in your digital transformation or carrying out your existing digital operations. We navigate clients on IT system-related issues and difficulties to eliminate loopholes and gray areas to boost business performance and functions. ",
    serviceHeading:
      "Explore Solutions and Guidelines for your Challenging IT Bottlenecks with Bx Technologies ",
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
    bannerImg:
      "assets/images/serviceDetailImages/SVdataAnalyticsBusinessIn.png",
    bannerH1: " Data Analytics and Business Intelligence",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "Artificial Intelligence",
        categImg:
          "assets/images/serviceDetailImages/artificial-intelligence.png",
        categDesc:
          "Are you planning to deploy and integrate an AI-based system to boost your business operations? Avial our professional and domain knowledge expert developers to develop and implement artificial intelligence solutions for your business and keep yourself ahead of others in the competition. ",
      },
      {
        categHeading: "Machine Learning",
        categImg: "assets/images/serviceDetailImages/machineLearning.png",
        categDesc:
          "At Bx technologies, we use state-of-the-art tools and frameworks to develop machine learning-based solutions that are robust, scalable, and resilient. We closely collaborate with clients to implement and deploy your next machine learning solution to keep you ahead of the competition.",
      },
      {
        categHeading: "Business Intelligence",
        categImg: "assets/images/serviceDetailImages/businessIntelligence.png",
        categDesc:
          "Data is the twenty-first-century oil; hire our BI experts to work on your business intelligence project. We are capable of working with your precious data to process, extract hidden patterns, and transform your raw data into actionable intelligence using business intelligence tools and technologies. ",
      },
      {
        categHeading: "Data Analytics",
        categImg: "assets/images/serviceDetailImages/dataAnalytics.png",
        categDesc:
          "Are you in Search of a dedicated and outstanding data analytics team for your data analysis project? Contact Us; our team of talented Data analysts incorporates the latest tools and techniques to dig deep into your critical business data to identify and extract hidden insights vital for the sustainability and growth of your business.",
      },
    ],

    serviceLongDesc:
      "Are you unaware of the extraordinary potential of your business data? Work with our team of talented Data scientists & data analysts to explore and extract hidden patterns and insights from your Data. We employ the latest tools and techniques to find meaningful and actionable intelligence in your business data that are vital for revenue generation and operational efficiency of your business",
    serviceHeading:
      "Explore Untapped Potential of Your Business with Our Data Science Solutions",
    processHeading: "Data Analytics Process",
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
    bannerImg: "assets/images/serviceDetailImages/SVseo.png",
    bannerH1: "Search Engine Optimization",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

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
    bannerImg: "assets/images/serviceDetailImages/SVprojManagment.png",
    bannerH1: "Product/ Project Management",
    bannerPragraph:
      "  A company with proven track record in the development of software systems across the world for its customers",

    serviceCategDetails: [
      {
        categHeading: "Realistic Estimation of Product Development",
        categImg: "assets/images/serviceDetailImages/costestimation.png",
        categDesc:
          "Managing a software development project sometimes turns into a nightmare for organizations. If this is the same case with you, hire our team of professional and experienced project managers and scrum masters to build and develop your project management pipelines and process that ensures the seamless development of a complex software system.",
      },
      {
        categHeading: "Software Development Life Cycle Planning",
        categImg: "assets/images/serviceDetailImages/projectManagment.png",
        categDesc:
          "Our team of project & product management practitioners at BX technologies provides an end-to-end software development management process for clients to plan, develop and execute their software projects efficiently. We provide project and product management services to manage start-ups, SMEs, and enterprise-level software application development projects.",
      },
      {
        categHeading: "Remote Software Project Management",
        categImg:
          "assets/images/serviceDetailImages/RemoteprojectManagement.png",
        categDesc:
          "Collaboration, feedback, and teamwork are the main reasons behind a successful project implementation. Bx technologies' software project management team offers its services to carry out remote project management activities for clients. Jira, Asana, and other Project management tools are employed to meet client business goals and requirements.",
      },
      {
        categHeading: "Software Quality Assurance",
        categImg: "assets/images/serviceDetailImages/quality.png",
        categDesc:
          "Do you want to work with outstanding and talented quality assurance and testing experts to make your product error-free to provide a sleek and innovative user experience? So let us Work on your product quality to meet the software quality standards and criteria.",
      },
    ],
    serviceLongDesc:
      "Execute your software project with our top-class team of project managers, product owners, and Scrum masters. We plan end-to-end project activities to reduce project risks and uncertainties in the software development life cycle. Streamline and organize workflows and project milestones, sprints, and deliverables to meet your project deadline with quality and within budget.",
    serviceHeading:
      " Bx Technologies Software Project Management Services One Click Away From You ",
    processHeading: "Software Project Management Process",
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

  
        <div class="col-sm-3 col-10 ourServiceElement " onclick="FnShowService('${singleOurService.id}')" id="${singleOurService.id}">
        
        
        <div class="flip-card-inner">
          <div class="flip-card-front">
            
                <div class="row frontRow">
                <center><div class=" col-12 circle">
                  
                  <img
                    src="${singleOurService.serviceImg}"
                    alt=""
                  />
                </div> 
                <div class="col-12 pt-2">
                  <h5>${singleOurService.serviceName}</h5>
                </div></center>
              </div>
          
          </div>
          <div class="flip-card-back">
            <br />
            <div class="row">
            <div class="col-12">
              <p>
              ${singleOurService.serviceShortDesc}
              </p>
            </div>
          </div>
            
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
