// Spinner
// Page loads, after 3 seconds the spinner disappears
// Add a new class to body element
// And in CSS display using that new class
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 3000);
};

//Sidebar
//unhide the sidebar
// .change .sidebar{
//     right: 0;
// }

// The classList property returns the class name(s) of an element, as a DOMTokenList object.

//This property is useful to add, remove and toggle CSS classes on an element.

//Will also transition the menu icon
//.hamburger-menu{    transition: right 0.7s;}
//.change .hamburger-menu{right:33rem;}

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("change");
  });

// Scroll to top button
//assign html property scroll behaviour and set to smooth
//then remove smooth scroll
// () => is a function call

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
