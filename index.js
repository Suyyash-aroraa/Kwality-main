const imageList = ['.background-1', '.background-2', '.background-3'];
var bgIndex = 0;
var bgChange = setInterval(()=>{
    if (bgIndex>2){
        bgIndex = 0;
    }
    let x = bgIndex+1;
    if (x>2){
        x=0;
    }
    
    console.log(bgIndex ,  x);
    $(imageList[bgIndex]).fadeOut();
    $(imageList[x]).fadeIn();
    
    bgIndex++
}, '2300')


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

const navMenu = document.querySelector('.navmenu')
var menuOpen = false;
document.querySelector('.menu').addEventListener('click', ()=>{
    
        menuOpen = true;
        $('.navmenu').fadeIn();
        console.log('work')
    
})
document.querySelector('.cross-btn').addEventListener('click', ()=>{
    
        menuOpen = true;
        $('.navmenu').fadeOut();
        console.log('work')
    
})

const navMenuLink = document.querySelectorAll('.navmenu-link');

for (let i = 0; i < navMenuLink.length; i++){
    navMenuLink[i].addEventListener('click', ()=>{
        $('.navmenu').fadeOut();
        console.log('works ig')
    })
}

// Loading screen

setTimeout(()=>{
    $('.loading-screen').fadeOut()
}, '3000')
