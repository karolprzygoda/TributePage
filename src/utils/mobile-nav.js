const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const headerWrapper = document.querySelector("#header-wrapper");
  const header = document.querySelector("#header");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  // State
  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
      headerWrapper.style.display = "none";
      header.style.justifyContent = "flex-end";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
      headerWrapper.style.display = "flex";
      header.style.justifyContent = "space-between";
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

mobileNav();
