// Modern background image slider with smooth transitions
const imageList = ['.background-1', '.background-2', '.background-3'];
var bgIndex = 0;
var bgChange = setInterval(() => {
    if (bgIndex > 2) {
        bgIndex = 0;
    }
    let nextIndex = bgIndex + 1;
    if (nextIndex > 2) {
        nextIndex = 0;
    }
    
    // Smoother transitions with longer duration
    $(imageList[bgIndex]).fadeOut(1200);
    $(imageList[nextIndex]).fadeIn(1200);
    
    bgIndex++;
}, 5000) // Longer interval for more elegant transitions


// Reveal on scroll

window.addEventListener('scroll', reveal)
function reveal(){
    var leftReveal = document.querySelectorAll('.left-reveal')
    var rightReveal = document.querySelectorAll('.right-reveal')

    for (var i = 0; i< leftReveal.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = leftReveal[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            leftReveal[i].classList.add('active')
        }
        else{
            leftReveal[i].classList.remove('active')
        }
    }
    for (var i = 0; i< rightReveal.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = rightReveal[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            rightReveal[i].classList.add('active')
        }
        else{
            rightReveal[i].classList.remove('active')
        }
    }
}

// menu

// Modern UI interactions
const navMenu = document.querySelector('.navmenu');
const navbar = document.querySelector('.navbar');

// Add scrolled class to navbar on scroll for elegant transition effect
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Menu interactions with smooth animations
$('.menu').click(function() {
  $('.navmenu').fadeIn(300);
  $('.navmenu-box').animate({opacity: 1, right: '10px'}, 400);
});

$('.cross-btn').click(function() {
  $('.navmenu-box').animate({opacity: 0, right: '-50px'}, 300, function() {
    $('.navmenu').fadeOut(200);
  });
});

const navMenuLink = document.querySelectorAll('.navmenu-link');

for (let i = 0; i < navMenuLink.length; i++) {
  navMenuLink[i].addEventListener('click', () => {
    $('.navmenu-box').animate({opacity: 0, right: '-50px'}, 300, function() {
      $('.navmenu').fadeOut(200);
    });
  });
}

// Loading screen

setTimeout(()=>{
    $('.loading-screen').fadeOut()
}, '3000')
