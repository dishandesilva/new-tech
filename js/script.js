/* ---------- Page loading function ---------- */

document.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('.content');

  setTimeout(function() {
      document.querySelector('.loader-wrapper').style.display = 'none';
      content.classList.remove('hidden');
      content.style.opacity = '1';
  }, 2000); // Adjust the delay in milliseconds (2000 for 2 seconds)
});

/* ---------- /Page loading function ---------- */


function navigateToShop(){
  window.location.href = "shop.html";
}

function sound() {
  var audio = document.getElementById("sound");
  audio.play();
}


/* ---------- Carousel auto moving function ---------- */

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

function showPreviousSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 3000);

/* ---------- /Carousel auto moving function ---------- */


/* ---------- products swiper function ---------- */

document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const pagination = document.querySelector('.swiper-pagination');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
  
    const numSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
  
    let currentIndex = 0;
  
    showSlides(currentIndex);
  
    function showSlides(index) {
      swiperWrapper.style.transform = `translateX(-${(slideWidth + slideMarginRight) * index}px)`;
      updatePagination(index);
    }
  
    function updatePagination(index) {
      pagination.querySelectorAll('.swiper-pagination-dot').forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
          dot.classList.add('active');
        }
      });
    }
  
    function goToSlide(index) {
      if (index < 0) {
        currentIndex = numSlides - 1;
      } else if (index >= numSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      showSlides(currentIndex);
    }
  
    prevButton.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  
    nextButton.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  
    // Create pagination dots
    for (let i = 0; i < numSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('swiper-pagination-dot');
      if (i === 0) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      pagination.appendChild(dot);
    }
  
    // Automatic sliding
    setInterval(() => {
      currentIndex = (currentIndex + 1) % numSlides;
      showSlides(currentIndex);
    }, 3000); // Adjust timing as needed
  
    // Show navigation buttons only if there's more than one slide
    if (numSlides > 1) {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
    }
  });
  
  

/* ---------- /products swiper function ---------- */

/* ---------- Beast Deals swiper function ---------- */


document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.swiper2-wrapper');
    const slides = document.querySelectorAll('.swiper2-slide');
    const pagination = document.querySelector('.swiper2-pagination');
    const prevButton = document.querySelector('.swiper2-button-prev');
    const nextButton = document.querySelector('.swiper2-button-next');
  
    const numSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
  
    let currentIndex = 0;
  
    // Show initial set of slides
    showSlides(currentIndex);
  
    function showSlides(index) {
      swiperWrapper.style.transform = `translateX(-${(slideWidth + slideMarginRight) * index}px)`;
      updatePagination(index);
    }
  
    function updatePagination(index) {
      pagination.querySelectorAll('.swiper2-pagination-dot').forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
          dot.classList.add('active');
        }
      });
    }
  
    function goToSlide(index) {
      if (index < 0) {
        currentIndex = numSlides - 1;
      } else if (index >= numSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      showSlides(currentIndex);
    }
  
    prevButton.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  
    nextButton.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  
    // Create pagination dots
    for (let i = 0; i < numSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('swiper2-pagination-dot');
      if (i === 0) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      pagination.appendChild(dot);
    }
  
    // Automatic sliding
    setInterval(() => {
      currentIndex = (currentIndex + 1) % numSlides;
      showSlides(currentIndex);
    }, 3000); // Adjust timing as needed
  
    // Show navigation buttons only if there's more than one slide
    if (numSlides > 1) {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
    }
});

/* ---------- /Best Deals swiper function ---------- */


/* ---------- New Arrivals swiper function ---------- */

document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.swiper3-wrapper');
    const slides = document.querySelectorAll('.swiper3-slide');
    const pagination = document.querySelector('.swiper3-pagination');
    const prevButton = document.querySelector('.swiper3-button-prev');
    const nextButton = document.querySelector('.swiper3-button-next');
  
    const numSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
  
    let currentIndex = 0;
  
    // Show initial set of slides
    showSlides(currentIndex);
  
    function showSlides(index) {
      swiperWrapper.style.transform = `translateX(-${(slideWidth + slideMarginRight) * index}px)`;
      updatePagination(index);
    }
  
    function updatePagination(index) {
      pagination.querySelectorAll('.swiper3-pagination-dot').forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
          dot.classList.add('active');
        }
      });
    }
  
    function goToSlide(index) {
      if (index < 0) {
        currentIndex = numSlides - 1;
      } else if (index >= numSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      showSlides(currentIndex);
    }
  
    prevButton.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  
    nextButton.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  
    // Create pagination dots
    for (let i = 0; i < numSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('swiper3-pagination-dot');
      if (i === 0) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      pagination.appendChild(dot);
    }
  
    // Automatic sliding
    setInterval(() => {
      currentIndex = (currentIndex + 1) % numSlides;
      showSlides(currentIndex);
    }, 3000); // Adjust timing as needed
  
    // Show navigation buttons only if there's more than one slide
    if (numSlides > 1) {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
    }
});

/* ---------- /New Arrivals swiper function ---------- */

/* ---------- Just for you swiper function ---------- */

document.addEventListener('DOMContentLoaded', function () {
  const swiperWrapper = document.querySelector('.swiper4-wrapper');
  const slides = document.querySelectorAll('.swiper4-slide');
  const pagination = document.querySelector('.swiper4-pagination');
  const prevButton = document.querySelector('.swiper4-button-prev');
  const nextButton = document.querySelector('.swiper4-button-next');

  const numSlides = slides.length;
  const slideWidth = slides[0].offsetWidth;
  const slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);

  let currentIndex = 0;

  // Show initial set of slides
  showSlides(currentIndex);

  function showSlides(index) {
    swiperWrapper.style.transform = `translateX(-${(slideWidth + slideMarginRight) * index}px)`;
    updatePagination(index);
  }

  function updatePagination(index) {
    pagination.querySelectorAll('.swiper4-pagination-dot').forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === index) {
        dot.classList.add('active');
      }
    });
  }

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = numSlides - 1;
    } else if (index >= numSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    showSlides(currentIndex);
  }

  prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  // Create pagination dots
  for (let i = 0; i < numSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('swiper4-pagination-dot');
    if (i === 0) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
    pagination.appendChild(dot);
  }

  // Automatic sliding
  setInterval(() => {
    currentIndex = (currentIndex + 1) % numSlides;
    showSlides(currentIndex);
  }, 3000); // Adjust timing as needed

  // Show navigation buttons only if there's more than one slide
  if (numSlides > 1) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
});

/* ---------- /Just for you swiper function ---------- */

/* ---------- Review Section swiper function ---------- */

let activeIndex = 0;
const cards = document.querySelectorAll('.carouselreview-card');

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

function moveCarouselreview(step) {
    activeIndex = (activeIndex + step + cards.length) % cards.length;
    showCard(activeIndex);
}

function autoMoveCarouselreview() {
    moveCarouselreview(1);
}

document.addEventListener('DOMContentLoaded', () => {
    showCard(activeIndex);
    setInterval(autoMoveCarouselreview, 4000);
});

/* ---------- /Review Section swiper function ---------- */


/* ---------- signin sign up function ---------- */

document.getElementById('signInBtn').addEventListener('click', function() {
  document.getElementById('signInForm').classList.remove('hidden');
  document.getElementById('signUpForm').classList.add('hidden');
});

document.getElementById('signUpBtn').addEventListener('click', function() {
  document.getElementById('signInForm').classList.add('hidden');
  document.getElementById('signUpForm').classList.remove('hidden');
});

/* ---------- /signin sign up function ---------- */

/* ---------- signin-signup alerts ---------- */

function functionsignup1(){
  alert("Click Sign Up button");
}

function functionsigin1(){
  alert("Click Sign In button");
}

function signup2(){
  alert("A new account created successfully");
}

function signin2(){
  alert("You have successfully logged in");
}

function resetpassword(){
  alert("Password reset successfully");
}

/* ---------- /signin-signup alerts ---------- */


/* ---------- forgotPassword function ---------- */

function forgotPassword() {
  alert("Verification code has sent successfully to your email");
  var modal = document.getElementById("fpmodal");
  forgotPasswordModal = new bootstrap.Modal(modal);
  forgotPasswordModal.show();
}

/* ---------- /forgotPassword function ---------- */


// ---------- showPassword1 ---------- //

function showPassword1() {
  var textField = document.getElementById("np");
  var button = document.getElementById("npb");

  if (textField.type == "password") {
      textField.type = "text";
      button.innerHTML = "Hide";
  } else {
      textField.type = "password";
      button.innerHTML = "Show";
  }
}

// ---------- /showPassword1 ---------- //

// ---------- showPassword2 ---------- //

function showPassword2() {
  var textField = document.getElementById("rp");
  var button = document.getElementById("rpb");

  if (textField.type == "password") {
      textField.type = "text";
      button.innerHTML = "Hide";
  } else {
      textField.type = "password";
      button.innerHTML = "Show";
  }
}

// ---------- /showPassword2 ---------- //

// ---------- showPassword3 ---------- //

function showPassword3() {
  var pw = document.getElementById("pw");
  var pwicon = document.getElementById("pwi");

  if (pw.type == "password") {
      pw.type = "text";
      pwicon.className = "bi bi-eye-fill text-white";
  }else{
      pw.type = "password";
      pwicon.className = "bi bi-eye-slash-fill text-white";
  }
}


// ---------- profileupdate ---------- //

function profileupdate() {
  alert("Profile updated successfully");
}

// ---------- /profileupdate ---------- //


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
