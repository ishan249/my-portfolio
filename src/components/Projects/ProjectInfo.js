import designFolioImage from "../../images/WhatsApp Image 2023-03-08 at 9.34.12 PM.jpeg";
import hotelImage from "../../images/WhatsApp Image 2023-01-31 at 5.04.27 PM.jpeg";
import redditImage from "../../images/Screenshot 2022-09-21 003210.png"
import billImage from "../../images/Screenshot 2022-08-28 003248.png"
import hangoutImage from "../../images/Screenshot 2023-01-09 215150.png";
const projectInfo = [
  {
    id:1,
    imageUrl: designFolioImage,
    ProjectTitle:"DesignFolio",
    projectDescription: "DesignFolio is a simple and easy to use personal landing page builder. You can have your personal URL linked to your portfolio which has your skills, projects and other information.",
    projectLink: "https://designfolio.onrender.com",
    ProjectBlog: "https://ishanpatel.hashnode.dev/landing-page-builder-using-mern",
    tags:[{tagName:"ReactJs", tagColor:"rgb(186 230 253)", textColor:"rgb(21 94 117)"},{tagName:"MongoDb", tagColor:"rgb(217 249 157)"},{tagName:"NodeJs", tagColor:"rgb(134 239 172)"},{tagName:"ExpressJs", tagColor:"rgb(226 232 240)"},{tagName:"TailwindCSS", tagColor:"rgb(255 228 230)"}],
  },
  {
    id:2,
    imageUrl: hotelImage,
    ProjectTitle:"Hotel Booking System",
    projectDescription: "Developed a Hotel booking management system in which all CRUD operations are implemented. Used MongoDB atlas for managing database.",
    projectLink: "https://hotel-booking-pi.vercel.app/",
    ProjectBlog: "https://ishanpatel.hashnode.dev/hotel-booking-system-with-express-js",
    tags:[{tagName:"HTML",tagColor:"rgb(253 186 116)"},{tagName:"BootStrap", tagColor:"rgb(216 180 254)"},{tagName:"MongoDb", tagColor:"rgb(217 249 157)"},{tagName:"NodeJs", tagColor:"rgb(134 239 172)"},{tagName:"ExpressJs", tagColor:"rgb(226 232 240)"}]
  },
  {
    id:3,
    imageUrl: redditImage,
    ProjectTitle:"Best of reddit",
    projectDescription: "Website which will fetch the data of top post from some famous subreddits and show it to users. It is basically a web scraping project.",
    projectLink: "https://best-of-reddit.vercel.app/",
    ProjectBlog: "https://ishanpatel.hashnode.dev/web-scraping-using-cheerio-in-nodejs",
    tags:[{tagName:"Cheerio (npm)", tagColor:"rgb(199 210 254)"},{tagName:"HTML",tagColor:"rgb(253 186 116)"},{tagName:"BootStrap", tagColor:"rgb(216 180 254)"},{tagName:"NodeJs", tagColor:"rgb(134 239 172)"},{tagName:"ExpressJs", tagColor:"rgb(226 232 240)"}],

  },
  {
    id:4,
    imageUrl: hangoutImage,
    ProjectTitle:"Hangout Adviser",
    projectDescription: " I developed a website which will use SERP api and fetch the data of good hangout places like cafes/restuarant nearby given address.",
    projectLink: "https://github.com/ishan249/Hangout-Adviser",
    ProjectBlog: "https://ishanpatel.hashnode.dev/how-to-use-serp-api-for-google-data-in-reactjs",
    tags:[{tagName:"SERP API", tagColor:"rgb(217 249 157)"},{tagName:"ReactJs", tagColor:"rgb(186 230 253)", textColor:"rgb(21 94 117)"},{tagName:"NodeJs", tagColor:"rgb(134 239 172)"},{tagName:"ExpressJs", tagColor:"rgb(226 232 240)"},{tagName:"TailwindCSS", tagColor:"rgb(255 228 230)"}],
    

  },
];

export default projectInfo;
