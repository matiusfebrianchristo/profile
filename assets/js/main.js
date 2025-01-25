// Defined Variable
const navbar = document.getElementById("navbar")
const jumbotron = document.getElementById("jumbotron")
const mobile_navbar = document.getElementById("menu-toggle")
// const name_person = document.querySelector('input[name="name"]')
// const email_add = document.querySelector('input[name="email"]')
// const subject_mail = document.querySelector('input[name="subject"]')
// const message = document.querySelector('input[name="message"]')
let numberCardCertificate = 1


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
      jumbotron.classList.remove('margin-top-m-13')
    } else if (window.screenY < "500") {
      navbar.classList.add("width-full")
      navbar.classList.add("position-fixed")
        jumbotron.classList.add('margin-top-m-13')
    }
  } else {
    navbar.classList.remove("on-mobile")
    navbar.classList.remove("width-full")
    navbar.classList.remove("position-fixed")
    jumbotron.classList.remove('margin-top-m-13')
  }
})


function counterTimeWork(){
  const today = new Date()
  const JoinDay = new Date("January 2, 2023")
  const msPerDay = 24 * 60 * 60 * 1000
  const countTime = (today.getTime() - JoinDay.getTime())
  const e_countDays = countTime / msPerDay;
  let countDays = Math.floor(e_countDays);
  let countYears = 0
  let countMonths = 0

  if (countDays > 365) {
    countYears = Math.floor(countDays / 365);
    countDays = countDays % 365;
  }
  if (countDays > 30) {
    countMonths = Math.floor(countDays / 30)
    countDays = countDays % 30;
  }

  // const e_hrsLeft = (e_countDays - countDays) * 24;
  // const hrsLeft = Math.floor(e_hrsLeft);
  // const minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
  if (countMonths > 0) {
    return `${countYears} years and ${countMonths} months`
  } else {
    return `${countYears} years`
  }

}

const tag_counterWorking = document.querySelector('.counterWorking')
tag_counterWorking.innerHTML= counterTimeWork()

function changeSlide(isNext) {
  let moved = 0
  const mediaQuery768  = window.matchMedia('(max-width: 768px)')
  if (mediaQuery768.matches) {
    document.querySelectorAll('#certificate .card-certificate').forEach(e => {
      moved = -(parseFloat(window.getComputedStyle(e).width)/16+7)
    })
  } else {
    moved = -56
  }
  
  
  if(isNext) {
    if (numberCardCertificate <6) {
      document.querySelectorAll('#certificate .card-certificate').forEach(e => {
        e.style.transform = `translateX(${moved*numberCardCertificate}rem)`
      })
      numberCardCertificate += 1
    }

  } else if (!isNext) {
    if (numberCardCertificate > 1) {
      if (numberCardCertificate == 2) {
        numberCardCertificate -= 1
        document.querySelectorAll('#certificate .card-certificate').forEach(e => {
          e.style.transform = `translateX(0)`
          // console.log(parseFloat(window.getComputedStyle(e).width)/16+7)
        })
      } else {
        numberCardCertificate -=1
        let minusNumber = numberCardCertificate - 1
        document.querySelectorAll('#certificate .card-certificate').forEach(e => {
          e.style.transform = `translateX(${moved*minusNumber}rem)`
          // console.log(parseFloat(window.getComputedStyle(e).width)/16+7)
        })
      }
    }
  }
  
  // console.log(card)
}

function openLink(link){
  window.open(
    link,
    '_blank' // <- This is what makes it open in a new window.
  );
}

function viewCertificate(link) {
  if (link == '1OP81Y44LZQK') {
    openLink('https://www.dicoding.com/certificates/1OP81Y44LZQK')
  } else if (link == 'QLZ949D4MP5D') {
    openLink('https://www.dicoding.com/certificates/QLZ949D4MP5D')
  } else if (link == 'L4PQGNVE2ZO1') {
    openLink('https://www.dicoding.com/certificates/L4PQGNVE2ZO1')
  } else if (link == '287RYZ5MSKKH') {
    openLink('https://www.coursera.org/account/accomplishments/specialization/certificate/287RYZ5MSKKH')
  } else if (link == 'AC-097-37056374-98') {
    openLink('https://apidev.agunacourse.com/media/media/certificate/AC-097-37056374-98.pdf')
  } else if (link == 'nokia-nrs-1') {
    openLink('https://www.credly.com/badges/c03a62e8-fc30-4e84-a01e-dc55f95945d7/linked_in_profile')
  }
}


// FOR EMAIL SENDER
(function() {
  emailjs.init({
    publicKey: "2sqqV2gYRrXro8kBW"
  });  // Replace with your EmailJS user ID
})();

const form = document.getElementById('form-email');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const buttonText = document.querySelector('#contact .btn-txt')
  const spinner = document.querySelector('#contact .spinner')
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  buttonText.style.display = 'none'; 
  spinner.style.display = 'block'

  const templateParams = {
      from_name: name.value,
      from_email: email.value,
      subject: subject.value,
      message: message.value
  };
  console.log(templateParams)



  emailjs.send('service_efhy06f', 'template_0alfnhp', templateParams)
      .then(function(response) {
          alert('Email sent successfully!', response.status, response.text);
          buttonText.style.display = 'block'; 
          spinner.style.display = 'none'
          name.value = ""
          email.value = ""
          subject.value = ""
          message.value = ""
      }, function(error) {
          alert('Failed to send email. Please try again.', error);
      });
});