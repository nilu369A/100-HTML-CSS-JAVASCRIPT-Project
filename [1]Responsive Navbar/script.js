const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('navlinks2');

menuIcon.addEventListener('click', (event) => {
  navLinks.classList.toggle('show');
});

document.addEventListener('click', () => {
  const ismenuIconClicked = menuIcon.contains(event.target);
  const isnavLinksClicked = navLinks.contains(event.target);

  if (!ismenuIconClicked && !isnavLinksClicked) {
    navLinks.classList.remove('show');
  }
});


const searchIcon = document.getElementById('search-icon');
const searchContainer = document.getElementById('search-container2');


searchIcon.addEventListener('click', (event) => {
  searchContainer.classList.toggle('show2');
});

document.addEventListener('click', () => {
  const isSearchIconClicked = searchIcon.contains(event.target);
  const isSearchContainerClicked = searchContainer.contains(event.target);


  if (!isSearchIconClicked && !isSearchContainerClicked) {
    searchContainer.classList.remove('show2');
  }
});