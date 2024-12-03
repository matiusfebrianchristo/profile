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