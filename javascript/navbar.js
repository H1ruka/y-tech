// Get all elements with class 'list'
const listItems = document.getElementsByClassName('list');

const nav = document.getElementById('navbar')

// Convert HTMLCollection to an array for easier iteration
const listItemArray = Array.from(listItems);

// Listen for the scroll event
window.addEventListener('scroll', function () {
  // Get the current scroll position
  const scrollY = window.scrollY || window.pageYOffset;

  // Check if the scroll position is greater than or equal to 830 pixels
  if (scrollY >= 20) {
    // Iterate through the array and set the style for each element
    listItemArray.forEach(function (item) {
      item.style.color = "black";
    });

  } else {
    // Reset the style when scrolling back up
    listItemArray.forEach(function (item) {
      item.style.color = ""; // Reset to the default color or remove the style
    });
    nav.style.backgroundColor = 'transparent';
  }

  if (scrollY >= 20){
    nav.style.backgroundColor = '#fff'
  }
  else{
    nav.style.backgroundColor = 'transparent'
  }
});
