let testifiers = document.getElementById("testifiers");
const testimonialsData = [
  {
    name: "HOWARD W. WECHULI",
    church: "Ushindi Baptist Church.",
    img: "images/howard.png",
    testimony:
      "My names are Howard W. Wechuli, from Republic of Kenya. My testimony goes like this. I lost my parents when I was still a teenager. Life was very difficult then. As time went on , a servant of God Bishop Joseph Maisha of Ushindi Baptist Church adapted me. He spotted me in one of his sermon and told me God talked to him concerning me. We had a very long conversation. He visited my siblings, and supported my education too. He took me like one of his own child. I went through university from his support: he supported me both spiritual and financially. He helped me to marry, and settle. Currently, I work as network administrator in one of NGOs in Kenya.",
  },
  {
    name: "Aiah Mark Gborie",
    church: "Sierra Leone",
    img: "images/mark.png",
    testimony:
      "After giving my life to Christ, am grateful to God that my journey in God actually started in Baptist. Am a true Baptist and will continue to be. It started in a small church call Christ the King Baptist Church in Koryor Kono District, Eastern Sierra Leone. Since then God has blessed me and taken me to several Baptist quarters and has served in different leadership roles. Is a blessing to be a Baptist.",
  },
  {
    name: "Idohwo Okeroghene Dennis",
    church: "Grace Community Baptist Church, Lagos State",
    img: "images/dennis.png",
    testimony:
      "My Baptist Testimony The Baptist denomination has contributed in no small measure to my successes in life. I have been privilege to pass through the different age grade departments in the Baptist denomination i.e Sunbeam, BSF, R.A and the Youth. I also had the opportunity to put my skills and training received into active use through teaching in Sunday School, Bible study classes, etc. All these has helped me to move out of my comfort zone, take on more responsibilities without fear or anxiety and improve in all aspects of life. I am so glad and proud to be a Baptist member.",
  },
  {
    name: "Meshach Akpaki",
    church: "First Baptist Church Ovom Yenagoa Bayelsa State",
    img: "images/apkaki.png",
    testimony:
      "To God alone be all glory, for the granting me privilege and providing the needed resources for me to attend the last year AABYF Western Africa conference at Benin Republic. About 2weeks to the program, I never had the financial means to attend, but God miraculous provide the funds needed within the space of two days. May His alone be gloried. Looking forward to AABYF Continental Conference at Accra Ghana August, 2023.",
  },
  {
    name: "Agogo Iyiola David",
    church: "The Ajayi Dahunsi Memorial Baptist Church, Lagos",
    img: "images/david.png",
    testimony:
      "Praise the LORD. As a Baptist, the Word of God has been dwelling so much in me, I can feel His Presence everytime and I am grateful to God for the family across the World. God alone be Praised.",
  },
  {
    name: "Adebisi Taiwo Mercy",
    church: "New Heritage Baptist Church",
    img: "images/mercy.png",
    testimony:
      "I have a lot of testimony about being a Baptist member. It has always been an awesome Journey. 1. I did not pay for my bus fare because I was wearing the Royal Ambassador uniform and the bus driver was a Baptist. (March 2016) 2. I got help during my admission process after the brethren on campus realised I was a Baptist. (August 2017) 3. I was able to seal a contract after my client noticed the Lagos East Baptist Conference Lapel on me, It was like a big Baptist reunion. (January 2023) To mention but a few.",
  },
  {
    name: "Ogunsanya J. Olajide",
    church: "Christ Kingdom Baptist Church, Magboro",
    img: "images/olajide.png",
    testimony:
      "I used to be a timid person and standing before a group to talk was very challenging even till my early days in the University but I kept getting opportunities to overcome this via different platforms in the Baptist Churches I have attended. As of now, there is no gathering irrespective of the number I can't face to talk and even with confidence. Also, my being exceptional as a leader and proficient in study are functions of the teachings I have been exposed to over the years in the Baptist setting. I must confess that we are very unique. Gracias",
  },
  {
    name: "Akinfenwa Damilola",
    church: "Praise Baptist Church, Liberty road, Ibadan",
    img: "images/dami.png",
    testimony:
      "Having joined Baptist in 2012 after been preached to by a Baptist student pastor in ijoko sango ota and after a year, I gained admission to Moshood Abiola Polytechnic, Abeokuta, Ogun state and joined Baptist Students Fellowship and began to enjoy the bible and understanding the indepth word of God through the Sunday school and within 9months I was picked to becoming the fellowship president and this also assisted me to understand the priesthood of all believers the more and ever since then to joining youth fellowship and in all have enjoyed and still enjoying it. I even had opportunity to join other denomination but I made my mind that I will never leave the Baptist fold.",
  },
  {
    name: "Amos Barnabas Kadanga",
    church: "Makidoniya Baptist Church Muchia",
    img: "images/amos.png",
    testimony:
      "Being a Baptist has been a tremendous blessing to my Christian life. In being so I obtained the assurance of my salvation and have been added to the body of Christ who are rightly dividing the Word of Truth and engaged in missions. Being a Baptist has given me a unique identity as a global citizen of repute and capable of interacting with all people across all borders.",
  },
  {
    name: "Pastor Ezekiel Razak Alhassan",
    church: "Baptist International Worship Center - Accra",
    img: "images/ezekiel.png",
    testimony:
      "Becoming a Baptist is the best decision I taken since I accepted Jesus as my Lord and Savior in 1996. The Bible based preaching and teaching in the Church  helped me understand the basis of my faith in Jesus Christ. I must confessed that the weekly Sunday School Classes created a platform for me to learn and understand key Biblical topics for my daily christian growth. It also gave me the opportunity to ask any question about any issue that I may not fully understand. Being a Baptist also helped me to truly appreciate and understand some Basic Christian Doctrine and Faith. I am convinced beyond reasonable doubts that I have come this far in my Christian life and Ministry largely due to the sound Biblical teachings I have received as a Baptist Youth. As a Baptist, I am constantly reminded about my personal ministry towards the fulfillment of the Great Commission of our Lord Jesus Christ. It helps me appreciate the reason for my salvation in Jesus Christ. I am Proud to a Christian and especially a Proud Baptist. Shalom.",
  },
  {
    name: "Rev Bunmi Ayodele",
    church: "Airport Baptist Church, Ibadan",
    img: "images/bunmi.png",
    testimony: "Deep knowledge about Salvation through Christ Jesus.",
  },
  {
    name: "Pst. Wisdom C. Gabriel",
    church: "Centenary Baptist Church Obiaruku, Delta State",
    img: "images/gabriel.png",
    testimony:
      "My being a Baptist member has really been a very wonderful journey since I started attending Baptist church. Growing from sunbeam, Royal Ambassador andnow a Youth member has really shappend my christian journey. I see no reason of leaving the Baptist family till Christ comes. As long Jesus tarries, Iwill remain a devoted member of the Baptist family. Long live Centenary Baptist church Obiaruku Long Live Obiaruku Baptist Association Long Live Anioma Delta Baptist Conference Long Live Nigerian Baptist Convention Long live All African Baptist Fellowship And long Live Baptist World Alliance",
  },
];

testimonialsData.map((item, index) => {
  return (testifiers.innerHTML += `
      <figure class="snip1157" key=${index}>
          <blockquote>
            ${item.testimony}
            <div class="arrow"></div>
          </blockquote>
          <img src=${item.img} alt="sq-sample3" />
          <div class="author">
            <h5>${item.name} <span> ${item.church} </span></h5>
          </div>
        </figure>
      `);
});

let paginationNumbers = document.getElementById("pagination-numbers");
const listItems = document.querySelectorAll("figure");
const paginationLimit = 5;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;
const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);
  paginationNumbers.appendChild(pageNumber);
};
const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};
const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  handleActivePageNumber();
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};
window.addEventListener("DOMContentLoaded", () => {
  getPaginationNumbers();
  setCurrentPage(1);
  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
