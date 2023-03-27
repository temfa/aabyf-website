let testifiers = document.getElementById("testifiers");
const testimonialsData = [
  {
    name: "HOWARD W. WECHULI",
    church: "Ushindi Baptist Church.",
    img: "../images/howard.png",
    testimony:
      " Meu nome é Howard W. Wechuli, da República do Quênia. Meu testemunho é assim. Perdi meus pais quando ainda era adolescente. A vida era muito difícil então. Com o passar do tempo, um servo de Deus, Bispo Joseph Maisha, da Igreja Batista Ushindi, me adaptou. Ele me viu em um de seus sermões e disse comigo Deus falou com ele a meu respeito. Tivemos uma conversa muito longa. Ele visitou meus irmãos e também apoiou minha educação. Ele me levou como um de seus próprio filho. Eu fui para a universidade com seu sustento: ele me apoiou tanto espiritual quanto financeiramente. Ajudou-me a casar e a estabelecer-me. Atualmente, eu trabalho como administrador de rede em uma das ONGs no Quênia.",
  },
  {
    name: "Aiah Mark Gborie",
    church: "Sierra Leone",
    img: "../images/mark.png",
    testimony:
      "Depois de entregar minha vida a Cristo, sou grato a Deus porque minha jornada em Deus realmente começou em Batista. Sou um verdadeiro batista e continuarei sendo. Isto começou em uma pequena igreja chamada Christ the King Baptist Church no distrito de Koryor Kono, leste de Serra Leoa. Desde então, Deus me abençoou e me levou para vários bairros batistas e serviu em diferentes funções de liderança. É uma bênção ser batista.",
  },
  {
    name: "Idohwo Okeroghene Dennis",
    church: "Grace Community Baptist Church, Lagos State",
    img: "../images/dennis.png",
    testimony:
      "Meu Testemunho Batista A denominação Batista tem contribuído em grande medida para o meu sucesso na vida. Tive o privilégio de passar pelo departamentos de diferentes faixas etárias na denominação batista, ou seja, Sunbeam, BSF, R.A e Youth. Também tive a oportunidade de colocar minhas habilidades e treinamento recebido em uso ativo através do ensino na Escola Dominical, aulas de estudo bíblico, etc. Tudo isso me ajudou a sair da minha zona de conforto, assumir mais responsabilidades sem medo ou ansiedade e melhorar em todos os aspectos da vida. Estou muito feliz e orgulhoso de ser um membro batista.",
  },
  {
    name: "Meshach Akpaki",
    church: "First Baptist Church Ovom Yenagoa Bayelsa State",
    img: "../images/apkaki.png",
    testimony:
      "Somente a Deus seja toda a glória, por me conceder o privilégio e fornecer os recursos necessários para que eu participasse da conferência do ano passado da AABYF na África Ocidental na República do Benin. Cerca de 2 semanas para o programa, eu nunca tive meios financeiros para participar, mas Deus milagrosamente providenciou os fundos necessários dentro do espaço de dois dias. Que somente Ele seja glorificado. Ansioso pela Conferência Continental da AABYF em Acra, Gana, agosto de 2023.",
  },
  {
    name: "Agogo Iyiola David",
    church: "The Ajayi Dahunsi Memorial Baptist Church, Lagos",
    img: "../images/david.png",
    testimony:
      "Louve o Senhor. Como Batista, a Palavra de Deus tem habitado tanto em mim, posso sentir Sua Presença a cada momento e sou grato a Deus pela família através do mundo. Somente Deus seja louvado.",
  },
  {
    name: "Adebisi Taiwo Mercy",
    church: "New Heritage Baptist Church",
    img: "../images/mercy.png",
    testimony:
      "Tenho muitos testemunhos sobre ser um membro batista. Sempre foi uma jornada incrível. 1. Não paguei minha passagem de ônibus porque estava usando o O uniforme do Embaixador Real e o motorista do ônibus eram batistas. (março de 2016) 2. Recebi ajuda durante meu processo de admissão depois que os irmãos no campus perceberam que eu era batista. (agosto de 2017) 3. Consegui fechar um contrato depois que meu cliente notou a lapela da Conferência Batista do Leste de Lagos em mim. Reunião batista. (janeiro de 2023) Para mencionar apenas alguns.",
  },
  {
    name: "Ogunsanya J. Olajide",
    church: "Christ Kingdom Baptist Church, Magboro",
    img: "../images/olajide.png",
    testimony:
      "Eu costumava ser uma pessoa tímida e ficar diante de um grupo para conversar era muito desafiador até meus primeiros dias na Universidade, mas continuei recebendo oportunidades para superar isso por meio de diferentes plataformas nas Igrejas Batistas que frequentei. A partir de agora, não há nenhuma reunião, independentemente do número que não consigo enfrentar para falar e nem com confiança. Além disso, ser excepcional como líder e proficiente no estudo são funções dos ensinamentos que recebi. exposto ao longo dos anos no ambiente batista. Devo confessar que somos muito únicos. Gracias",
  },
  {
    name: "Akinfenwa Damilola",
    church: "Praise Baptist Church, Liberty road, Ibadan",
    img: "../images/dami.png",
    testimony:
      " Tendo me juntado à Batista em 2012, depois de ser pregado por um estudante pastor batista em ijoko sango ota e depois de um ano, fui admitido no Moshood Abiola Politécnica, Abeokuta, estado de Ogun e juntou-se à Irmandade de Estudantes Batistas e começou a desfrutar da Bíblia e a entender a palavra profunda de Deus através a escola dominical e em 9 meses fui escolhido para me tornar o presidente da irmandade e isso também me ajudou a entender o sacerdócio de todos crentes cada vez mais e desde então se juntaram à comunhão juvenil e em todos eles desfrutaram e ainda desfrutam disso. Tive até oportunidade de ingressar em outros denominação, mas decidi que nunca deixarei o redil batista.",
  },
  {
    name: "Amos Barnabas Kadanga",
    church: "Makidoniya Baptist Church Muchia",
    img: "../images/amos.png",
    testimony:
      " Ser batista tem sido uma tremenda bênção para minha vida cristã. Sendo assim, obtive a certeza da minha salvação e fui acrescentado ao corpo de Cristo que estão dividindo corretamente a Palavra da Verdade e engajados em missões. Ser batista me deu uma identidade única como um cidadão global de renome e capaz de interagir com todas as pessoas em todas as fronteiras.",
  },
  {
    name: "Pastor Ezekiel Razak Alhassan",
    church: "Baptist International Worship Center - Accra",
    img: "../images/ezekiel.png",
    testimony:
      "Tornar-me batista é a melhor decisão que tomei desde que aceitei Jesus como meu Senhor e Salvador em 1996. A pregação e o ensino baseados na Bíblia na Igreja ajudou-me a compreender a base da minha fé em Jesus Cristo. Devo confessar que as aulas semanais da Escola Dominical criaram uma plataforma para eu aprender e entender os principais tópicos bíblicos para o meu crescimento cristão diário. Também me deu a oportunidade de fazer qualquer pergunta sobre qualquer assunto que eu não possa entender completamente. entender. Ser batista também me ajudou a realmente apreciar e entender algumas doutrinas e fés cristãs básicas. Estou convencido além do razoável dúvidas de que cheguei tão longe em minha vida cristã e ministério em grande parte devido aos sólidos ensinamentos bíblicos que recebi como um jovem batista. Como um Batista, sou constantemente lembrado sobre meu ministério pessoal para o cumprimento da Grande Comissão de nosso Senhor Jesus Cristo. Isso me ajuda apreciar a razão da minha salvação em Jesus Cristo. Tenho orgulho de um cristão e especialmente de um orgulhoso batista. Shalom.",
  },
  {
    name: "Rev Bunmi Ayodele",
    church: "Airport Baptist Church, Ibadan",
    img: "../images/bunmi.png",
    testimony: "Profundo conhecimento sobre a Salvação por meio de Cristo Jesus.",
  },
  {
    name: "Pst. Wisdom C. Gabriel",
    church: "Centenary Baptist Church Obiaruku, Delta State",
    img: "../images/gabriel.png",
    testimony:
      "Ser um membro batista realmente foi uma jornada maravilhosa desde que comecei a frequentar a igreja batista. Crescendo do raio de sol, Royal Ambassador e agora um membro da Juventude realmente mudou minha jornada cristã. Não vejo razão para deixar a família batista até que Cristo venha. Enquanto Jesus demorar, eu continuará sendo um membro dedicado da família batista. Viva a Igreja Batista Centenário Obiaruku Viva a Associação Batista Obiaruku Viva Anioma Viva a Conferência Batista Delta Viva a Convenção Batista Nigeriana Viva toda a Fraternidade Batista Africana e Viva a Aliança Batista Mundial",
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
