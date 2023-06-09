window.addEventListener("DOMContentLoaded", () => {
  let header = document.getElementById("header");
  let footer = document.getElementById("footer");
  let date = new Date();
  let year = date.getFullYear();

  header.innerHTML += `
     <div class="header-w3layouts">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="hedder-up">
            <img src="../images/logo.png" alt="" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div class="navbar-single">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link" href="index.html">Lar <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link">Sobre</a>
              </li>
              <li class="nav-item">
                <a href="testimonials.html" class="nav-link">Testemunhos</a>
              </li>
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Eventos </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="nav-link" href="https://aabyfghana2023.allafricabaptistyouthfellowship.com/" target="_blank"/>AABYFGhana2023</a>
                </div>
              </li>
              <li class="nav-item">
                <a href="gallery.html" class="nav-link">Galeria</a>
              </li>
             
              <li class="nav-item">
                <a href="contact.html" class="nav-link">Contato</a>
              </li>
              <!-- <li class="nav-button">
                <button type="button" class="btn login-hedder" data-toggle="modal" data-target="#exampleModalCenter">Login</button>
              </li> -->
            </ul>
            <div class="both-butns navbar-nav">
            <ul>
                <li class="dropdown">
                    <button type="button" class="register-hedder dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    Portuguese
                    </button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <p class="nav-link" id="english">English</p>
                        <p class="nav-link" id="french">French</p>
                        <p  class="nav-link" id="portugese">Portuguese</p>
                    </div>
                </li>
            </ul>
            </div>
            </div>
          </div>
        </nav>
        <!--//navigation section -->
        <div class="clearfix"></div>
      </div>
  `;
  let english = document.getElementById("english");
  let french = document.getElementById("french");
  let portugese = document.getElementById("portugese");
  let menuList = document.querySelectorAll(".nav-item");
  let navList = document.querySelectorAll(".nav-link");
  const currentLocation = location.href;
  footer.innerHTML += `
  <div class="container-fluid py-3">
        <h3 class="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Boletim de Notícias</h3>
        <!--subscribe-->
        <div class="mb-lg-5 mb-md-4 mb-3 sub-wthree-form">
          <form>
            <div class="form-group email-sub-w3layouts">
              <input type="email" class="form-control email-sub-w3layouts" placeholder="E-mail" required="" />
            </div>
            <div class="pt-sm-3 pt-2 text-center">
              <button type="submit" class="btn subscrib-btnn">Se inscrever</button>
            </div>
          </form>
        </div>
        <!--//subscribe-->
        <div class="row">
          <div class="col-lg-7 col-md-7">
            <div class="headder-logo-icon text-center">
                <img src="../images/logo.png" alt="" />  
            </div>
            <div class="footer-bottom py-lg-4 py-md-3 py-2 text-center">
              <p>©${year} AABYF. Todos os direitos reservados | Desenhado por <a href="http://www.W3Layouts.com" target="_blank">Tema Digital Designs</a></p>
            </div>
          </div>
          <div class="col-lg-5 col-md-5">
            <div class="buttom-nav py-2">
              <nav class="border-line">
                <ul class="nav justify-content-center">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">Lar <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a href="about.html" class="nav-link">Sobre</a>
                  </li>
                  <li class="nav-item">
                    <a href="contact.html" class="nav-link">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
             <div class="icons text-center">
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100068236816994&mibextid=ZbWKwL" target="_blank"><span class="fa fa-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="fa fa-twitter"></span></a>
                </li>
                <li>
                  <a href="https://t.me/+BAo2QsK1IyE3ODVk" target="_blank"><span class="fa-brands fa-telegram"></span></a>
                </li>
                <li>
                  <a href="https://instagram.com/aabyf_21?igshid=ZDdkNTZiNTM=" target="_blank"><span class="fa-brands fa-instagram"></span></a>
                </li>
                <li>
                  <a href="https://youtube.com/@aabyf" target="_blank"><span class="fa-brands fa-youtube"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  `;

  french.addEventListener("click", () => {
    const link = currentLocation.split("/")[currentLocation.split("/").length - 1];
    window.location.href = `../french/${link}`;
  });

  english.addEventListener("click", () => {
    const link = currentLocation.split("/")[currentLocation.split("/").length - 1];
    window.location.href = `../${link}`;
  });

  for (let i = 0; i < navList.length; i++) {
    if (currentLocation === navList[i].href) {
      if (currentLocation.split("/")[currentLocation.split("/").length - 1] === "contact.html") {
        menuList[i].classList.add("active");
      } else {
        menuList[i].classList.add("active");
      }
    }
  }
});

{
  //    <ul>
  //   <li>
  //     <button type="button" class="register-hedder" data-toggle="modal" data-target="#exampleModalCenter2">
  //       Register
  //     </button>
  //   </li>
  //   <li>
  //     <div class="contact-hedder">
  //       <a href="contact.html"> Contact Us</a>
  //     </div>
  //   </li>
  // </ul>
}
