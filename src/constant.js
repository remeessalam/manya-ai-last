import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaPaintBrush,
  FaCloud,
  FaCloudUploadAlt,
} from "react-icons/fa";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold-creekcap.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think-reality.png";
import AkashMegaMart from "./assets/web-development-portfolio/Akash-Mega-Mart.png";
import MidwamImmersive from "./assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.png";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "./assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.jpg";
import AkashMegaMartApp from "./assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.jpg";
import FeelItMobileApp from "./assets/app-development-portfolio/FeelIt-Mobile-App.jpg";
import KlikomicsMobileApp from "./assets/app-development-portfolio/Klikomics-Mobile-App.jpg";
import AutoSnapMobileApp from "./assets/app-development-portfolio/AutoSnap-Mobile-App.jpg";
export { logoImg };

export const companyDetails = {
  phone: "+91-7411331718",
  phone2: "+91-9345361250.",
  address: "ABC Street, City, Country",
  email: "sales@manya.ai",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio
// export const portfolio = [
//   {
//     id: 1,
//     title: "Figo Tech",
//     img: require("./assets/images/portfolio/1.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 2,
//     title: "News Feed",
//     img: require("./assets/images/portfolio/2.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 3,
//     title: "Food Application",
//     img: require("./assets/images/portfolio/3.png"),
//     imgFit: "object-contain",
//   },
//   {
//     id: 4,
//     title: "Crio Load App",
//     img: require("./assets/images/portfolio/4.jpg"),
//     imgFit: "object-cover",
//   },
// ];

// testimonials
export const testimonials = [
  {
    id: 1,
    clientSay:
      "5G Homes provided us with an incredible solution that improved our internet speed and reliability. We highly recommend their services!",
    clientName: "John Doe",
    position: "CEO",
    companyName: "5G Homes",
    serviceUsed: "Website Development",
    portfolioItem: 1, // References the webPortfolio item with id:1
  },
  // {
  //   id: 2,
  //   clientSay:
  //     "Bayut has truly revolutionized the property market in the UAE. The platform is user-friendly and highly efficient.",
  //   clientName: "Amina Shah",
  //   position: "Founder & CEO",
  //   companyName: "Bayut",
  //   serviceUsed: "Website Development",
  //   portfolioItem: null, // No matching portfolio item shown
  // },
  {
    id: 3,
    clientSay:
      "Cold Creek Cap offers top-notch products. The quality of their caps is unmatched, and we're proud to be working with them.",
    clientName: "David White",
    position: "Product Manager",
    companyName: "Cold Creek Cap",
    serviceUsed: "Website Development",
    portfolioItem: 3, // References the webPortfolio item with id:3
  },
  {
    id: 4,
    clientSay:
      "The Akash Mega Mart app has transformed our retail business, making it easy for customers to shop and for us to manage inventory.",
    clientName: "Raj Patel",
    position: "Operations Director",
    companyName: "Akash Mega Mart",
    serviceUsed: "App Development",
    portfolioItem: 1, // References the appPortfolio item with id:1
  },
  {
    id: 5,
    clientSay:
      "FeelIt's mobile app development was exceptional. The user experience is smooth and engaging, exactly what we envisioned.",
    clientName: "Sophia Chen",
    position: "Marketing Head",
    companyName: "FeelIt",
    serviceUsed: "App Development",
    portfolioItem: 2, // References the appPortfolio item with id:2
  },
  {
    id: 6,
    clientSay:
      "Think Realty's insights and real estate opportunities have helped us make informed investment decisions. A fantastic platform!",
    clientName: "Lucas Green",
    position: "Real Estate Investor",
    companyName: "Think Realty",
    serviceUsed: "Website Development",
    portfolioItem: 9, // References the webPortfolio item with id:9
  },
  // {
  //   id: 7,
  //   clientSay:
  //     "The AI solutions implemented for our logistics company have optimized routes and reduced costs by 22%. Game-changing technology!",
  //   clientName: "Michael Johnson",
  //   position: "CTO",
  //   companyName: "LogiTech Solutions",
  //   serviceUsed: "Artificial Intelligence Services",
  //   portfolioItem: null,
  // },
  {
    id: 8,
    clientSay:
      "Midwam's immersive experience website perfectly captures our brand identity and has significantly increased client engagement.",
    clientName: "Sarah Williams",
    position: "Creative Director",
    companyName: "Midwam",
    serviceUsed: "Website Development",
    portfolioItem: 91, // References the webPortfolio item with id:91
  },
  {
    id: 9,
    clientSay:
      "Rentop's bike and car rental app has exceeded our expectations with its flawless performance and beautiful UI design.",
    clientName: "Carlos Mendez",
    position: "Founder",
    companyName: "Rentop",
    serviceUsed: "App Development",
    portfolioItem: 8, // References the appPortfolio item with id:8
  },
  // {
  //   id: 10,
  //   clientSay:
  //     "The cloud migration services were seamless. We experienced zero downtime and our systems are now more scalable than ever.",
  //   clientName: "Emily Zhang",
  //   position: "IT Director",
  //   companyName: "FinTech Global",
  //   serviceUsed: "Cloud Migration",
  //   portfolioItem: null,
  // },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Website Development",
    link: "website-development",
    icon: (
      <FaGlobe className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Professional website development services that create responsive, fast, and SEO-friendly websites to establish your strong online presence and drive business growth.",
    detailsPage: {
      banner: require("./assets/images/services/web-development.jpg"),
      img1: require("./assets/images/services/web-dev-1.jpg"),
      img2: require("./assets/images/services/web-dev-2.jpg"),
      img3: require("./assets/images/services/web-dev-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Custom Websites That Drive Results
            </h2>
            <p>
              We build websites that are not just visually appealing but also technically robust and optimized for performance. Our websites are designed to convert visitors into customers.
            </p>
            <p>
              From simple brochure sites to complex web applications, we deliver solutions tailored to your business objectives and target audience.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Our Website Development Stands Out
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Mobile-First Approach</h3>
                <p>
                  Responsive designs that work flawlessly on all devices and screen sizes.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">SEO Optimized</h3>
                <p>
                  Built with clean code and proper structure for better search engine visibility.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Fast Loading</h3>
                <p>
                  Optimized performance to reduce bounce rates and improve user experience.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Secure & Scalable</h3>
                <p>
                  Robust security measures and architecture that grows with your business.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Website Development Services
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Corporate Websites</h3>
                <p>
                  Professional websites that establish your brand identity and credibility.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">E-Commerce Solutions</h3>
                <p>
                  Feature-rich online stores with secure payment gateways and inventory management.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Web Portals</h3>
                <p>
                  Custom portals for businesses, education, healthcare, and more.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">CMS Development</h3>
                <p>
                  Easy-to-manage websites using WordPress, Drupal, or custom CMS solutions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 2,
    title: "App Development",
    link: "app-development",
    icon: (
      <FaMobileAlt className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Custom mobile application development for iOS and Android platforms that deliver exceptional user experiences and drive business growth.",
    detailsPage: {
      banner: require("./assets/images/services/app-development.jpg"),
      img1: require("./assets/images/services/app-dev-1.jpg"),
      img2: require("./assets/images/services/app-dev-2.jpg"),
      img3: require("./assets/images/services/app-dev-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Innovative Mobile Solutions
            </h2>
            <p>
              We develop high-performance mobile applications that solve real business problems and engage users effectively. Our apps are built with the latest technologies and best practices.
            </p>
            <p>
              Whether you need a consumer-facing app or an enterprise solution, we deliver products that stand out in competitive app stores.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our App Development Advantages
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cross-Platform Development</h3>
                <p>
                  Single codebase solutions that work on both iOS and Android platforms.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Native Performance</h3>
                <p>
                  Optimized apps that leverage device capabilities for superior performance.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">User-Centric Design</h3>
                <p>
                  Intuitive interfaces that provide seamless navigation and engagement.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Ongoing Support</h3>
                <p>
                  Maintenance and updates to keep your app current and competitive.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our App Development Expertise
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">iOS App Development</h3>
                <p>
                  Native applications built with Swift for Apple devices.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Android App Development</h3>
                <p>
                  High-quality apps developed with Kotlin for Android ecosystem.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">React Native Apps</h3>
                <p>
                  Cross-platform solutions with native-like performance.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Flutter Development</h3>
                <p>
                  Beautiful, natively compiled apps from a single codebase.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 3,
    title: "Artificial Intelligence Services",
    link: "ai-services",
    icon: (
      <FaRobot className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Transform your business with AI-powered solutions including machine learning, natural language processing, and predictive analytics.",
    detailsPage: {
      banner: require("./assets/images/services/ai-development.jpg"),
      img1: require("./assets/images/services/ai-1.jpg"),
      img2: require("./assets/images/services/ai-2.jpg"),
      img3: require("./assets/images/services/ai-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              AI Solutions for Business Transformation
            </h2>
            <p>
              We develop custom artificial intelligence solutions that help businesses automate processes, gain insights from data, and enhance decision-making capabilities.
            </p>
            <p>
              Our AI services are tailored to your specific industry needs, whether you're in healthcare, finance, retail, or manufacturing.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Benefits of Our AI Services
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Process Automation</h3>
                <p>
                  Reduce manual work and human errors with intelligent automation.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Data-Driven Insights</h3>
                <p>
                  Uncover hidden patterns and opportunities in your business data.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Enhanced Customer Experience</h3>
                <p>
                  Deliver personalized interactions and recommendations.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Competitive Advantage</h3>
                <p>
                  Stay ahead with cutting-edge AI capabilities in your industry.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our AI Service Offerings
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Machine Learning Solutions</h3>
                <p>
                  Predictive models that learn from data and improve over time.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Natural Language Processing</h3>
                <p>
                  Chatbots, sentiment analysis, and text processing solutions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Computer Vision</h3>
                <p>
                  Image and video recognition for various business applications.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">AI Consulting</h3>
                <p>
                  Strategic guidance on implementing AI in your organization.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 4,
    title: "UI/UX Design",
    link: "ui-ux-design",
    icon: (
      <FaPaintBrush className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "User-centered design services that create intuitive, engaging, and visually stunning interfaces for digital products.",
    detailsPage: {
      banner: require("./assets/images/services/ui-ux.jpg"),
      img1: require("./assets/images/services/uiux-1.jpg"),
      img2: require("./assets/images/services/uiux-2.jpg"),
      img3: require("./assets/images/services/uiux-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Design That Delights Users
            </h2>
            <p>
              Our UI/UX design services focus on creating digital experiences that are not just beautiful but also highly functional and user-friendly.
            </p>
            <p>
              We combine aesthetics with usability principles to design interfaces that users love and that drive business results.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Invest in Professional UI/UX Design
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Increased User Engagement</h3>
                <p>
                  Well-designed interfaces keep users interested and coming back.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Higher Conversion Rates</h3>
                <p>
                  Intuitive user flows guide visitors toward desired actions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Reduced Development Costs</h3>
                <p>
                  Clear design specifications prevent costly rework during development.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Brand Credibility</h3>
                <p>
                  Professional design establishes trust and authority in your market.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our UI/UX Design Services
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">User Research</h3>
                <p>
                  Understand your users through interviews, surveys, and analytics.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Wireframing & Prototyping</h3>
                <p>
                  Create interactive prototypes to test and refine concepts.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Visual Design</h3>
                <p>
                  Stunning interfaces with consistent branding and aesthetics.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Usability Testing</h3>
                <p>
                  Validate designs with real users to ensure optimal experience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 5,
    title: "Cloud Computing",
    link: "cloud-computing",
    icon: (
      <FaCloud className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Scalable and secure cloud infrastructure solutions that provide flexibility, reliability, and cost-efficiency for your business.",
    detailsPage: {
      banner: require("./assets/images/services/cloud-computing.jpg"),
      img1: require("./assets/images/services/cloud-1.jpg"),
      img2: require("./assets/images/services/cloud-2.jpg"),
      img3: require("./assets/images/services/cloud-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Powerful Cloud Solutions for Your Business
            </h2>
            <p>
              Our cloud computing services help businesses leverage the power of cloud technology to improve efficiency, reduce costs, and scale operations effortlessly.
            </p>
            <p>
              We provide comprehensive cloud solutions across all major platforms, tailored to your specific business requirements.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Advantages of Our Cloud Services
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cost Efficiency</h3>
                <p>
                  Pay only for what you use with flexible pricing models.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Global Scalability</h3>
                <p>
                  Easily scale resources up or down based on demand.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">High Availability</h3>
                <p>
                  99.9% uptime guarantees for mission-critical applications.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Enterprise Security</h3>
                <p>
                  Robust security measures and compliance with industry standards.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Cloud Service Offerings
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Infrastructure as a Service (IaaS)</h3>
                <p>
                  Virtualized computing resources over the internet.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Platform as a Service (PaaS)</h3>
                <p>
                  Cloud platforms for developing and deploying applications.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Software as a Service (SaaS)</h3>
                <p>
                  Cloud-based applications accessible from anywhere.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cloud Management</h3>
                <p>
                  Ongoing monitoring, optimization, and support for cloud resources.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 6,
    title: "Cloud Migration",
    link: "cloud-migration",
    icon: (
      <FaCloudUploadAlt className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Seamless migration of your applications and data to the cloud with minimal disruption and maximum benefits.",
    detailsPage: {
      banner: require("./assets/images/services/cloud-migration.jpg"),
      img1: require("./assets/images/services/cloud-migration-1.jpg"),
      img2: require("./assets/images/services/cloud-migration-2.jpg"),
      img3: require("./assets/images/services/cloud-migration-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Smooth Transition to the Cloud
            </h2>
            <p>
              Our cloud migration services help organizations move their applications, data, and workloads to cloud environments with minimal risk and downtime.
            </p>
            <p>
              We follow proven methodologies to ensure your migration is secure, efficient, and delivers the expected benefits.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Benefits of Cloud Migration
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cost Savings</h3>
                <p>
                  Reduce capital expenses and operational costs with cloud infrastructure.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Improved Performance</h3>
                <p>
                  Leverage cloud scalability for better application performance.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Business Continuity</h3>
                <p>
                  Enhanced disaster recovery and data backup capabilities.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Future-Proof Infrastructure</h3>
                <p>
                  Easily adopt new technologies and scale as needed.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Migration Approach
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Assessment & Planning</h3>
                <p>
                  Comprehensive analysis of your current infrastructure and migration roadmap.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Lift & Shift</h3>
                <p>
                  Rehost applications in the cloud with minimal changes.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Refactoring</h3>
                <p>
                  Optimize applications to take full advantage of cloud capabilities.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Post-Migration Support</h3>
                <p>
                  Ongoing management and optimization of your cloud environment.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
