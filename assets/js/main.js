// const body = document.getElementsByTagName("body")

// body.addEventListener("", myScript);

const navbar = document.getElementById("navbar")
window.addEventListener('scroll', () => {
    if (window.scrollY > "500") {
        navbar.classList.add("position-sticky")
    } else if (window.screenY < "500") {
        navbar.classList.remove("position-sticky")
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

const mobile_navbar = document.getElementById("menu-toggle")
mobile_navbar.addEventListener('click', e => {
  console.log(mobile_navbar.checked)
  if (mobile_navbar.checked) {
    // navbar.classList.add('height-100vh')
    // navbar.style.height = "100vh" 
    navbar.setAttribute('style', 'background:rgba(0, 0, 0, 0.8)!important; height:100vh;')
  } else {
    navbar.style.height = "auto"
    navbar.style.background = ""
    navbar.style.position = ""
    navbar.style.width = ""
    navbar.style.marginTop = ""
    // navbar.classList.remove('height-100vh')
  }
})