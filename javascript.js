// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar hamburger menu untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

// dropdown

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fungsi toggle dropdown
document.getElementById("sekolahBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  document.getElementById("sekolahDropdown").classList.toggle("show");
  document.getElementById("desaDropdown").classList.remove("show");
});

document.getElementById("desaBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  document.getElementById("desaDropdown").classList.toggle("show");
  document.getElementById("sekolahDropdown").classList.remove("show");
});

// Tutup dropdown jika klik di luar
window.addEventListener("click", function () {
  document.getElementById("sekolahDropdown").classList.remove("show");
  document.getElementById("desaDropdown").classList.remove("show");
});
