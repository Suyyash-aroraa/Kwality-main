
const fullImage = document.querySelector('.full-image');
const fullImageImg = document.querySelector('#full-image-img');
const galleryImages = document.querySelectorAll('.gallery-image');
const closeContainer = document.querySelector('.close-container');

fullImage.style.display= 'none'

closeContainer.addEventListener('click', ()=>{
    fullImage.style.display= 'none'
})

for (let i = 0; i<galleryImages.length; i++){
    galleryImages[i].addEventListener('click', function(){
        let imageSrc = galleryImages[i].src
        fullImageImg.src = imageSrc;
        fullImage.style.display= 'block'
    })
    
}

