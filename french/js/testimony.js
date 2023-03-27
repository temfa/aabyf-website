let testifiers = document.getElementById("testifiers");
const testimonialsData = [
  {
    name: "HOWARD W. WECHULI",
    church: "Ushindi Baptist Church.",
    img: "../images/howard.png",
    testimony:
      "Je m'appelle Howard W. Wechuli, de la République du Kenya. Mon témoignage va comme ça. J'ai perdu mes parents alors que j'étais encore adolescent. La vie était très difficile alors. Au fil du temps, un serviteur de Dieu, l'évêque Joseph Maisha de l'église baptiste d'Ushindi, m'a adapté. Il m'a repéré dans un de ses sermons et m'a dit moi, Dieu lui a parlé de moi. Nous avons eu une très longue conversation. Il a rendu visite à mes frères et sœurs et a également soutenu mon éducation. Il m'a pris comme l'un des siens propre enfant. J'ai fait mes études universitaires grâce à son soutien : il m'a soutenu à la fois spirituellement et financièrement. Il m'a aidée à me marier et à m'installer. Actuellement, je travailler comme administrateur de réseau dans l'une des ONG au Kenya.",
  },
  {
    name: "Aiah Mark Gborie",
    church: "Sierra Leone",
    img: "../images/mark.png",
    testimony:
      "Après avoir donné ma vie à Christ, je suis reconnaissant à Dieu que mon voyage en Dieu ait réellement commencé en Baptiste. Suis un vrai baptiste et continuera de l'être. Il a commencé dans une petite église appelée Christ the King Baptist Church dans le district de Koryor Kono, dans l'est de la Sierra Leone. Depuis lors, Dieu m'a béni et m'a emmené plusieurs quartiers baptistes et a occupé différents postes de direction. C'est une bénédiction d'être baptiste.",
  },
  {
    name: "Idohwo Okeroghene Dennis",
    church: "Grace Community Baptist Church, Lagos State",
    img: "../images/dennis.png",
    testimony:
      " Mon témoignage baptiste La dénomination baptiste a contribué dans une large mesure à mes succès dans la vie. J'ai eu le privilège de passer par le différents départements d'âge dans la dénomination baptiste, c'est-à-dire Sunbeam, BSF, RA et la jeunesse. J'ai aussi eu l'opportunité de mettre mes compétences et ma formation reçu en utilisation active par l'enseignement à l'école du dimanche, les cours d'étude biblique, etc. Tout cela m'a aidé à sortir de ma zone de confort, à prendre plus responsabilités sans peur ni anxiété et s'améliorer dans tous les aspects de la vie. Je suis si heureux et fier d'être un membre baptiste.",
  },
  {
    name: "Meshach Akpaki",
    church: "First Baptist Church Ovom Yenagoa Bayelsa State",
    img: "../images/apkaki.png",
    testimony:
      " À Dieu seul soit toute la gloire, pour m'avoir accordé le privilège et m'avoir fourni les ressources nécessaires pour assister à la conférence de l'AABYF en Afrique de l'Ouest l'année dernière en République du Bénin. Environ 2 semaines avant le programme, je n'ai jamais eu les moyens financiers d'y assister, mais Dieu miraculeux a fourni les fonds nécessaires en l'espace de deux jours. Que Lui seul soit glorifié. Dans l'attente de la conférence continentale AABYF à Accra Ghana en août 2023.",
  },
  {
    name: "Agogo Iyiola David",
    church: "The Ajayi Dahunsi Memorial Baptist Church, Lagos",
    img: "../images/david.png",
    testimony:
      " Louez le SEIGNEUR. En tant que baptiste, la Parole de Dieu habite tellement en moi, je peux sentir sa présence à chaque fois et je suis reconnaissant à Dieu pour la famille à travers le monde. Dieu seul soit loué.",
  },
  {
    name: "Adebisi Taiwo Mercy",
    church: "New Heritage Baptist Church",
    img: "../images/mercy.png",
    testimony:
      "J'ai beaucoup de témoignages sur le fait d'être membre baptiste. Cela a toujours été un voyage formidable. 1. Je n'ai pas payé mon billet d'autobus parce que je portais le L'uniforme de l'ambassadeur royal et le chauffeur du bus était baptiste. (Mars 2016) 2. J'ai reçu de l'aide pendant mon processus d'admission après que les frères sur le campus aient réalisé que je était baptiste. (Août 2017) 3. J'ai pu sceller un contrat après que mon client ait remarqué le revers de la Conférence baptiste de l'Est de Lagos sur moi, c'était comme un gros Réunion baptiste. (janvier 2023) Pour n'en citer que quelques-uns.",
  },
  {
    name: "Ogunsanya J. Olajide",
    church: "Christ Kingdom Baptist Church, Magboro",
    img: "../images/olajide.png",
    testimony:
      "J'avais l'habitude d'être une personne timide et se tenir devant un groupe pour parler était très difficile même jusqu'à mes débuts à l'université, mais j'ai continué à obtenir possibilités de surmonter cela via différentes plates-formes dans les églises baptistes que j'ai fréquentées. A l'heure actuelle, il n'y a pas de rassemblement quel que soit le numéro auquel je ne peux pas faire face pour parler et même avec confiance. De plus, mon être exceptionnel en tant que leader et compétent dans l'étude sont des fonctions des enseignements que j'ai été exposé au fil des ans dans le cadre baptiste. Je dois avouer que nous sommes très uniques. Gracias",
  },
  {
    name: "Akinfenwa Damilola",
    church: "Praise Baptist Church, Liberty road, Ibadan",
    img: "../images/dami.png",
    testimony:
      "Ayant rejoint Baptist en 2012 après avoir été prêché par un pasteur étudiant baptiste à ijoko sango ota et après un an, j'ai été admis à Moshood Abiola Polytechnic, Abeokuta, état d'Ogun et a rejoint Baptist Students Fellowship et a commencé à apprécier la Bible et à comprendre la parole profonde de Dieu à travers l'école du dimanche et en 9 mois, j'ai été choisi pour devenir président de la fraternité et cela m'a également aidé à comprendre le sacerdoce de tous croyants de plus en plus et depuis lors à rejoindre la fraternité des jeunes et dans tous ont apprécié et en profitent encore. J'ai même eu l'occasion de rejoindre d'autres dénomination, mais j'ai pris la décision de ne jamais quitter le giron baptiste.",
  },
  {
    name: "Amos Barnabas Kadanga",
    church: "Makidoniya Baptist Church Muchia",
    img: "../images/amos.png",
    testimony:
      "Être baptiste a été une immense bénédiction pour ma vie chrétienne. En étant ainsi, j'ai obtenu l'assurance de mon salut et j'ai été ajouté au corps du Christ qui distribuent à juste titre la Parole de Vérité et sont engagés dans des missions. Être baptiste m'a donné une identité unique en tant que citoyen du monde de renom et capable d'interagir avec toutes les personnes à travers toutes les frontières.",
  },
  {
    name: "Pastor Ezekiel Razak Alhassan",
    church: "Baptist International Worship Center - Accra",
    img: "../images/ezekiel.png",
    testimony:
      "Devenir baptiste est la meilleure décision que j'ai prise depuis que j'ai accepté Jésus comme mon Seigneur et Sauveur en 1996. La prédication et  l'enseignement basés sur la Bible dans l'Église m'a aidé à comprendre le fondement de ma foi en Jésus-Christ. Je dois avouer que les cours hebdomadaires de l'école du dimanche ont créé pour moi une plate-forme pour apprendre et comprendre les sujets bibliques clés pour ma croissance chrétienne quotidienne.  Cela m'a également donné l'occasion de poser n'importe quelle question sur n'importe quel problème que je ne pouvais pas entièrement comprendre. Être  baptiste m'a également aidé à vraiment apprécier et comprendre certaines doctrines et croyances chrétiennes de base. Je suis convaincu au-delà du  raisonnable doute que je sois arrivé aussi loin dans ma vie chrétienne et mon ministère en grande partie grâce aux solides enseignements bibliques que  j'ai reçus en tant que jeune baptiste. Comme un Baptiste, on me rappelle constamment mon ministère personnel vers l'accomplissement de la Grande  Commission de notre Seigneur Jésus-Christ. Ça m'aide apprécier la raison de mon salut en Jésus-Christ. Je suis fier d'un chrétien et surtout d'un fier  baptiste. Chalom.",
  },
  {
    name: "Rev Bunmi Ayodele",
    church: "Airport Baptist Church, Ibadan",
    img: "../images/bunmi.png",
    testimony: "Connaissance approfondie du salut par le Christ Jésus.",
  },
  {
    name: "Pst. Wisdom C. Gabriel",
    church: "Centenary Baptist Church Obiaruku, Delta State",
    img: "../images/gabriel.png",
    testimony:
      "Mon statut de membre baptiste a vraiment été un voyage merveilleux depuis que j'ai commencé à fréquenter l'église baptiste. De plus en plus de rayon de soleil, ambassadeur royal et maintenant, un membre de la jeunesse a vraiment marqué mon cheminement chrétien. Je ne vois aucune raison de quitter la famille baptiste jusqu'à ce que Christ vienne. Tant que Jésus tarde, je restera un membre dévoué de la famille baptiste. Vive l'église baptiste du centenaire Obiaruku Vive l'association baptiste Obiaruku Vive Anioma Conférence baptiste du delta Vive la Convention baptiste nigériane Vive la communauté baptiste africaine et vive l'Alliance baptiste mondiale",
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
