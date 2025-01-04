

const navbar = document.getElementById("navbar")
const jumbotron = document.getElementById("jumbotron")
const mobile_navbar = document.getElementById("menu-toggle")

console.log(jumbotron)


window.addEventListener('scroll', () => {
    if (window.scrollY > "500") {
        navbar.classList.add("position-sticky")
        navbar.classList.remove("top")
    } else if (window.screenY < "500") {
        navbar.classList.remove("position-sticky")
        navbar.classList.add("top")
    }
})

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });


mobile_navbar.addEventListener('click', e => {
  if (mobile_navbar.checked) {
    navbar.classList.add("on-mobile")
    if (window.scrollY > "500") {
      navbar.classList.remove("width-full")
      navbar.classList.remove("position-fixed")
      // navbar.classList.remove("top")
      jumbotron.classList.remove('margin-top-m-13')
    } else if (window.screenY < "500") {
      navbar.classList.add("width-full")
      navbar.classList.add("position-fixed")
        // navbar.classList.add("top")
        jumbotron.classList.add('margin-top-m-13')
    }
  } else {
    navbar.classList.remove("on-mobile")
    navbar.classList.remove("width-full")
    navbar.classList.remove("position-fixed")
    // navbar.classList.remove("top")
    jumbotron.classList.remove('margin-top-m-13')
  }
})