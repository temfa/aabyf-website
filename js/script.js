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
          <div class="navbar-single">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="testimonials.html" class="nav-link">Testimonials</a>
              </li>
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Events </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="nav-link" href="https://aabyfghana2023.allafricabaptistyouthfellowship.com/" target="_blank"/>AABYFGhana2023</a>
                </div>
              </li>
              <li class="nav-item">
                <a href="gallery.html" class="nav-link">Gallery</a>
              </li>
             
              <li class="nav-item">
                <a href="contact.html" class="nav-link">Contact</a>
              </li>
            </ul>
            <div class="both-butns navbar-nav">
            <ul>
                <li class="dropdown">
                    <button type="button" class="register-hedder dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    English
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
  let french = document.getElementById("french");
  let portugese = document.getElementById("portugese");
  let menuList = document.querySelectorAll(".nav-item");
  let navList = document.querySelectorAll(".nav-link");
  const currentLocation = location.href;
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
                    <a href="contact.html" class="nav-link">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="icons text-center">
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100068236816994&mibextid=ZbWKwL" target="_blank" ><span class="fa fa-facebook"></span></a>
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

  portugese.addEventListener("click", () => {
    const link = currentLocation.split("/")[currentLocation.split("/").length - 1];
    window.location.href = `../portugese/${link}`;
  });

  for (let i = 0; i < navList.length; i++) {
    if (currentLocation === navList[i].href) {
      if (currentLocation.split("/")[currentLocation.split("/").length - 1] === "contact.html") {
        menuList[i - 1].classList.add("active");
      } else {
        menuList[i].classList.add("active");
      }
    }
  }
});
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date("08/01/2023");

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();

// fetch("https://www.example.com")
//   .then((response) => response.text())
//   .then((html) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");

//     // Extract images
//     const images = doc.querySelectorAll("img");
//     images.forEach((img) => {
//       console.log(img.src);
//     });

//     // Extract videos
//     const videos = doc.querySelectorAll("video");
//     videos.forEach((video) => {
//       console.log(video.src);
//     });

//     // Extract text
//     const text = doc.body.innerText;
//     console.log(text);
//   })
//   .catch((error) => console.error(error));

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
  // <li class="nav-item">
  //   <a href="service.html" class="nav-link">
  //     Services
  //   </a>
  // </li>;
}
