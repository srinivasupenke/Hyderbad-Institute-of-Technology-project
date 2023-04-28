const initial = () => {
  const sidebarContainer = document.querySelector(".sidebar-container");
  const hamburger = document.querySelector(".hamburger");
  const closeButton = document.querySelector(".close-button");

  const openSideBar = () => {
    sidebarContainer.classList.add("show-sidebar");
  };

  const closesideBar = () => {
    sidebarContainer.classList.remove("show-sidebar");
  };

  hamburger.addEventListener("click", openSideBar);

  closeButton.addEventListener("click", closesideBar);
};

initial();

const navContainer = document.querySelector(".nav-container");

window.addEventListener("scroll", function () {
  const scrollNumber = window.scrollY;
  const targetNumber = window.innerWidth >= 992 ? 70 : 50;
  if (scrollNumber >= targetNumber) {
    navContainer.classList.add("sticky-nav");
  } else {
    navContainer.classList.remove("sticky-nav");
  }
});
