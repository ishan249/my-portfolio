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
  },
  {
    id:2,
    imageUrl: hotelImage,
    ProjectTitle:"Hotel Booking System",
    projectDescription: "Developed a Hotel booking management system in which all CRUD operations are implemented. Used MongoDB atlas for managing database.",
    projectLink: "https://hotel-booking-pi.vercel.app/",
    ProjectBlog: "https://ishanpatel.hashnode.dev/hotel-booking-system-with-express-js",
  },
  {
    id:3,
    imageUrl: redditImage,
    ProjectTitle:"Best of reddit",
    projectDescription: "Website which will fetch the data of top post from some famous subreddits and show it to users. It is basically a web scraping project.",
    projectLink: "https://best-of-reddit.vercel.app/",
    ProjectBlog: "https://ishanpatel.hashnode.dev/web-scraping-using-cheerio-in-nodejs",
  },
  {
    id:4,
    imageUrl: hangoutImage,
    ProjectTitle:"Hangout Adviser",
    projectDescription: " I developed a website which will use SERP api and fetch the data of good hangout places like cafes/restuarant nearby given address.",
    projectLink: "https://github.com/ishan249/Hangout-Adviser",
    ProjectBlog: "https://ishanpatel.hashnode.dev/how-to-use-serp-api-for-google-data-in-reactjs",
  },
];

export default projectInfo;
