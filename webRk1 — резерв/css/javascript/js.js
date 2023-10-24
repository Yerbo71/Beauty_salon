/*--------For Login-------*/ 
function openLoginForm() {
  var loginModal = document.getElementById('loginModal');
  loginModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeLoginForm() {
  var loginModal = document.getElementById('loginModal');
  loginModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/*--------For Registration-------*/ 
function openRegistrationForm() {
  var registrationModal = document.getElementById('registrationModal');
  registrationModal.style.display = 'block';
  loginModal.style.display = 'none';
  document.body.style.overflow = 'hidden';
}

function closeRegistrationForm() {
  var registrationModal = document.getElementById('registrationModal');
  registrationModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/*--------DAAAAARRRRRRRKKKKKK------------*/ 
function toggleDarkMode() {
  var element = document.body;
  var darkModeToggle = document.getElementById("darkModeToggle");

  // Toggle the dark-mode class on the body element
  element.classList.toggle("dark-mode");

  // Check if dark mode is currently active
  var isDarkMode = element.classList.contains("dark-mode");

  // Update the image source based on the current mode
  if (isDarkMode) {
      darkModeToggle.src = "/Icons/defaulttheme.png";
  } else {
      darkModeToggle.src = "/Icons/darktheme.png";
  }
}



/*--------For Wallpaper-------*/ 
const images = [
  "/Wallpaper/Anadearmassite.jpg",//
  "/Wallpaper/anya.jpg",//
  "/Wallpaper/анадеармас.jpg",//
  "/Wallpaper/asia.jpg",//
  "/Wallpaper/billie.jpg",//
  "/Wallpaper/billie2.jpg",//
  "/Wallpaper/model.jpg",//
  "/Wallpaper/ryan.jpg",//
  "/Wallpaper/scarlett.jpg",//
  "/Wallpaper/brad.jpg",
  "/Wallpaper/pratt.jpg",//
  "/Wallpaper/dicap.jpg",//
  "/Wallpaper/akwa.jpg",//
];

const nameofsite = document.querySelector(".nameofsite");

const interval = setInterval(() => {
  document.querySelector(".nameofsite").style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
}, 3000);


/*--------For Hair-------*/ 
function openModalHair() {
  var hairModal = document.getElementById('hairModal');
  hairModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModalHair() {
  var hairModal = document.getElementById('hairModal');
  hairModal.style.display = 'none'; 
  document.body.style.overflow = 'auto';
}
/*--------For ManicurePedicure-------*/ 
function openModalHairM() {
  var hairModal = document.getElementById('manicureModal');
  hairModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModalHairM() {
  var hairModal = document.getElementById('manicureModal');
  hairModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/*--------For Makeup-------*/ 
function openModalHairMa() {
  var hairModal = document.getElementById('makeupModal');
  hairModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModalHairMa() {
  var hairModal = document.getElementById('makeupModal');
  hairModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/*--------For SPA-------*/ 
function openModalHairSpa() {
  var hairModal = document.getElementById('spaModal');
  hairModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModalHairSpa() {
  var hairModal = document.getElementById('spaModal');
  hairModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/*--------For Maasssage-------*/ 
function openModalHairMass() {
  var hairModal = document.getElementById('massModal');
  hairModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModalHairMass() {
  var hairModal = document.getElementById('massModal');
  hairModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/*--------Instagramm-------*/ 
function openLink() {
  var linkUrl = "https://www.instagram.com/"; 
  window.open(linkUrl, "_blank"); 
}

document.getElementById("instagramm").addEventListener("click", openLink);

/*--------Twitter-------*/ 
function openLink1() {
  var linkUrl = "https://twitter.com/?lang=ru"; 
  window.open(linkUrl, "_blank"); 
}

document.getElementById("twitter").addEventListener("click", openLink);

/*--------Telegram-------*/ 
function openLink2() {
  var linkUrl = "https://web.telegram.org/k/"; 
  window.open(linkUrl, "_blank"); 
}

document.getElementById("telegram").addEventListener("click", openLink);

/*--------Whatsapp-------*/ 
function openLink3() {
  var linkUrl = "https://www.whatsapp.com/?lang=ru_RU"; 
  window.open(linkUrl, "_blank"); 
}

document.getElementById("whatsapp").addEventListener("click", openLink);

/*--------TikTok-------*/ 
function openLink4() {
  var linkUrl = "https://www.tiktok.com/ru-RU/"; 
  window.open(linkUrl, "_blank"); 
}

document.getElementById("tiktok").addEventListener("click", openLink);