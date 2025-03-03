document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
   
    // Toggle the mobile menu on hamburger icon click
    menuIcon.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
    navLinks.addEventListener('click',function (e) {
        console.log('---nav--',e.target.closest('a'))
        if(e.target.closest('a')){
          navLinks.classList.toggle('active');
        }  
    })
  });
   
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".g-banner-slide");
  let currentSlide = 0;

  // Function to change slide
  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // Change slide every 3 seconds
  setInterval(nextSlide, 3000);
});
document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("dev").innerHTML = "Ajay Bhardwaj";


let gImages = {
  bags: [
    "b7.png",
    "b2.png",
    "b3.png",
    "b4.png",
    "b1.png",
    "b5.png",
    "b6.png",
  ],
  wooden_Gifts: ["w1.png", "w2.png"],
  diaries: ["d1.png", "d2.png", "d3.png"],
  keychains: ["k1.png", "b8.png"],
  more: ["m1.png", "m3.png", "m2.png"],
};

let gCurrentCategory = "wooden_Gifts";
let gCurrentIndex = 0;
let gGalleryGrid = document.querySelector(".g-gallery-grid");
let gSliderI = null;
function gFilterGallery(category, event) {
  gCurrentCategory = category;
  document
    .querySelectorAll(".g-filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active");
  } else {
    document.querySelectorAll(".g-filter-btn").item(1).classList.add("active");
  }

  gGalleryGrid.innerHTML = "";
  gImages[category].slice(0, 8).forEach((src, index) => {
    let img = document.createElement("img");
    img.src = "assets/" + src;
    img.classList.add("g-gallery-img");
    img.onclick = () => gOpenSlider(index);
    gGalleryGrid.appendChild(img);
  });
}

function gOpenSlider(index) {
  let sliderOverlay = document.getElementById("g-slider-overlay");
  let sliderImg = document.getElementById("g-slider-img");

  gCurrentIndex = index;
  sliderImg.src = "assets/" + gImages[gCurrentCategory][gCurrentIndex];

  sliderOverlay.style.display = "flex";
  setInterval(() => {
    sliderOverlay.style.opacity = "1";
  }, 100);
  gSliderI = setInterval(() => {
    gChangeSlide(1);
  }, 3000);
}

function gCloseSlider() {
  let sliderOverlay = document.getElementById("g-slider-overlay");
  sliderOverlay.style.opacity = "0";

  setTimeout(() => {
    sliderOverlay.style.display = "none";
  }, 1000);
  if (gSliderI) {
    clearInterval(gSliderI);
    gSliderI = null;
  }
}

function gChangeSlide(step) {
  gCurrentIndex += step;
  if (gCurrentIndex < 0) gCurrentIndex = gImages[gCurrentCategory].length - 1;
  if (gCurrentIndex >= gImages[gCurrentCategory].length) gCurrentIndex = 0;
  document.getElementById("g-slider-img").src =
    "assets/" + gImages[gCurrentCategory][gCurrentIndex];
}
gFilterGallery("wooden_Gifts");

// setInterval(() => gChangeSlide(1), 3000);
