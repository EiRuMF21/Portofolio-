const navbarNav = document.querySelector(".navbar-nav");
const mainMenu = document.querySelector("#main-menu");

// Toggle class active saat #main-menu diklik
mainMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Hilangkan class active saat klik dilakukan di luar #main-menu dan .navbar-nav
document.addEventListener("click", (e) => {
  if (!mainMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// animasi pindah page

// Function to check if an element is in viewport
function isInViewport(element, margin = 180) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -margin &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + margin &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateOnScroll() {
  const elements = document.querySelectorAll(".text-enter");

  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("text-enter-active");
    } else {
      element.classList.remove("text-enter-active");
    }
  });
}

// Panggil animateOnScroll saat scroll terjadi
document.addEventListener("scroll", animateOnScroll);

// Panggil animateOnScroll untuk cek awal saat halaman dimuat
document.addEventListener("DOMContentLoaded", animateOnScroll);

function animateProfileOnScroll() {
  const profile = document.querySelector(".profile");

  // Periksa apakah profil dalam viewport
  if (isInViewport(profile)) {
    profile.style.opacity = "1";
    profile.classList.add("text-enter-active");
  } else {
    profile.style.opacity = "0";
    profile.classList.remove("text-enter-active");
  }
}

// Panggil animateProfileOnScroll saat scroll terjadi
document.addEventListener("scroll", animateProfileOnScroll);

// Panggil animateProfileOnScroll untuk cek awal saat halaman dimuat
document.addEventListener("DOMContentLoaded", animateProfileOnScroll);
