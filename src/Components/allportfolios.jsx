import port1 from "../img/portImages/dynamicWebsite.gif";
import port2 from "../img/portImages/event.gif";
import port3 from "../img/portImages/api.gif";
import port4 from "../img/portImages/TextAnalysis.gif";
import port5 from "../img/portImages/carprice.png";
import port6 from "../img/portImages/jack.gif";
import port7 from "../img/portImages/TextAnalysis.gif";
import port8 from "../img/portImages/hostel.gif";

const portfolios = [
  {
    id: 1,
    category: ["PYTHON", "Django REST Framework"],
    link1: "https://github.com/alokknight/Dynamic-Website",
    link2: "https://coderpapa.herokuapp.com",
    icon1: "GitHub",
    icon2: "Demo",
    image: port1,
    title: "Freelancing Portal",
    about:
      "Freelancing Portal is a portal that enables developers to get the freelancing work from this website after registration & providing past projects details and experience."
  },
  {
    id: 2,
    category: ["Javascript", "Node.js", "MongoDB","Express"],
    link1: "https://github.com/alokknight/Event-Information-System",
    link2: "https://aayojan.herokuapp.com",
    icon1: "GitHub",
    icon2: "Demo",
    image: port2,
    title: "Event Aayojan System",
    about:
      "Event Aayojan System is a MERN stack based website that enables Universities, College societies and for an evidividual to conduct event in proper manner. It shows all nearby events to all customers. Registerd person can add events.",
  },
  {
    id: 3,
    category: ["PYTHON", "MySQL", "MongoDB","Django REST Framework"],
    link1: "https://github.com/alokknight/youtubeapi",
    link2: "https://alokyoutubeapi.herokuapp.com",
    icon1: "GitHub",
    icon2: "Demo",
    image: port3,
    title: "Youtube API",
    about:
      "Youtube API is a DRF bases API, which searches nine latest youtube videos for a query and store in database, and stored videos can be send to frontend with pagination manner as API. Only authorized customers can use this api."
  },
  {
    id: 4,
    category: ["PYTHON","Data Science", "WebScraping" ,"Django REST Framework", "NLP"],
    link1: "https://github.com/alokknight/Webscraping-And-Semantic-Analysis",
    link2: "https://mlapis.herokuapp.com",
    icon1: "GitHub",
    icon2: "Demo",
    image: port4,
    title: "Semantic Analysis",
    about:
      "It is assesment, in which the task was to scrape all data from the links given in an excel, and after cleaning data to apply semantic analysis, and get the sematic score of blog, and store the result in excel back in same order.",
  },
  {
    id: 5,
    category: ["PYTHON","Django","ML"],
    link1: "https://github.com/alokknight/Dynamic-Website",
    link2: "https://coderpapa.herokuapp.com/carprice",
    icon1: "GitHub",
    icon2: "Demo",
    image: port5,
    title: "Car Price Prediction",
    about:
      "Car price Prediction is a web based Machine Learning appliction, which can provide the predicted price of old cars based on the past owners count to those users who want to buy old vehicle, fuel type, age etc. It helps users in guessing the exact current price of vehicle."
  },
  {
    id: 6,
    category: ["PYTHON","Django","React.js" ,"ML"],
    link1: "https://github.com/alokknight/whisky-quality-with-ML-and-Django",
    link2: "https://mlapis.herokuapp.com/whishky",
    icon1: "GitHub",
    icon2: "Demo",
    image: port6,
    title: "Whisky Quality CheckUp",
    about:
      "Whisky Quality CheckUp is a web based Machine Learning application which helps companies to decide the quality of whisky drink; based on its contains.",
  },
  {
    id: 7,
    category: ["PYTHON","Javascript"],
    link1: "https://github.com/alokknight/alokknight",
    link2: "https://alokknight.herokuapp.com/textanalysis",
    icon1: "GitHub",
    icon2: "Demo",
    image: port7,
    title: "Text Analysis",
    about:
      "Text-Analysis ia a react appliction that helps users to convert text from one form to another, user can remove extra space, user can get the avarage time which will take to read that text.",
  },
  {
    id: 8,
    category: ["C++"],
    link1: "https://github.com/alokknight/hostel-management-system",
    link2: "https://github.com/alokknight/hostel-management-system",
    icon1: "GitHub",
    icon2: "Demo",
    image: port8,
    title: "Hostel Management System",
    about:
      "It is C++ linked list based Hostel Management system in which hostel adminstrator can add the students details using his password, students can only view the information but can't delete details.",
  },
];

export default portfolios;
