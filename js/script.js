window.addEventListener("DOMContentLoaded", () => {
  let header = document.getElementById("header");
  let footer = document.getElementById("footer");
  let date = new Date();
  let year = date.getFullYear();

  header.innerHTML += `
     <div class="header-w3layouts">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="hedder-up">
            <img src="./images/logo.png" alt="" />
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
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="service.html" class="nav-link">Service</a>
              </li>
              <li class="nav-item">
                <a href="galler.html" class="nav-link">Gallery</a>
              </li>
              <li class="nav-item dropdown">
               <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Pages </a> -->
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="nav-link" href="typography.html">Typography</a>
                  <a href="gallery.html" class="nav-link">Gallery</a>
                </div>
              </li>
              <li class="nav-item">
                <a href="contact.html" class="nav-link">Contact</a>
              </li>
              <!-- <li class="nav-button">
                <button type="button" class="btn login-hedder" data-toggle="modal" data-target="#exampleModalCenter">Login</button>
              </li> -->
            </ul>
            <div class="both-butns">
              <ul>
               <!-- <li>
                  <button type="button" class="register-hedder" data-toggle="modal" data-target="#exampleModalCenter2">Register</button>
                </li> -->
                <li>
                  <div class="contact-hedder">
                    <a href="contact.html"> Contact Us</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!--//navigation section -->
        <div class="clearfix"></div>
      </div>
  `;

  footer.innerHTML += `
  <div class="container-fluid py-3">
        <h3 class="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Newsletter</h3>
        <!--subscribe-->
        <div class="mb-lg-5 mb-md-4 mb-3 sub-wthree-form">
          <form>
            <div class="form-group email-sub-w3layouts">
              <input type="email" class="form-control email-sub-w3layouts" placeholder="Email" required="" />
            </div>
            <div class="pt-sm-3 pt-2 text-center">
              <button type="submit" class="btn subscrib-btnn">Subscribe</button>
            </div>
          </form>
        </div>
        <!--//subscribe-->
        <div class="row">
          <div class="col-lg-7 col-md-7">
            <div class="headder-logo-icon text-center">
                <img src="./images/logo.png" alt="" />  
            </div>
            <div class="footer-bottom py-lg-4 py-md-3 py-2 text-center">
              <p>©${year} AABYF. All Rights Reserved | Design by <a href="http://www.W3Layouts.com" target="_blank">Tema Digital Designs</a></p>
            </div>
          </div>
          <div class="col-lg-5 col-md-5">
            <div class="buttom-nav py-2">
              <nav class="border-line">
                <ul class="nav justify-content-center">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a href="about.html" class="nav-link">About</a>
                  </li>
                  <li class="nav-item">
                    <a href="service.html" class="nav-link">Services</a>
                  </li>
                  <li class="nav-item">
                    <a href="contact.html" class="nav-link">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="icons text-center">
              <ul>
                <li>
                  <a href="#"><span class="fa fa-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="fa fa-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="fa fa-rss"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  `;
  let menuList = document.querySelectorAll(".nav-item");
  let navList = document.querySelectorAll(".nav-link");
  const currentLocation = location.href;
  for (let i = 0; i < navList.length; i++) {
    if (currentLocation === navList[i].href) {
      if (currentLocation.split("/")[currentLocation.split("/").length - 1] === "contact.html") {
        menuList[i - 1].classList.add("active");
      } else if (currentLocation.split("/")[currentLocation.split("/").length - 1] === "gallery.html") {
        menuList[i - 2].classList.add("active");
      } else {
        menuList[i].classList.add("active");
      }
    }
  }
});
