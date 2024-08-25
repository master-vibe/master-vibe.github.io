AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/java.png",
    langName: "Java",
    langDesc: "<li>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  },
  {
    langImage: "assets/images/techstack-page/dart.png",
    langName: "Dart",
    langDesc: "<li>Dart is a client-optimized language for fast apps on any platform</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted, high-level, general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/flutter.png",
    langName: "Flutter",
    langDesc: "<li>Flutter is an open-source UI software development toolkit created by Google</li>",
  },
  {
    langImage: "assets/images/techstack-page/springboot.png",
    langName: "Spring Boot",
    langDesc: "<li>Spring Boot is an open source Java-based framework used to create microservices</li>",
  },
  {
    langImage: "assets/images/techstack-page/mysql.png",
    langName: "MySQL",
    langDesc: "<li>MySQL is an open-source relational database management system</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
