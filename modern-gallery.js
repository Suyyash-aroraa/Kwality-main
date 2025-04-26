// Modern Gallery JavaScript for Kwality Restaurant

document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxNext = document.querySelector('.lightbox-next');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const loadingScreen = document.querySelector('.loading-screen');
    const fadeElements = document.querySelectorAll('.fade-in');
    
    let currentImageIndex = 0;
    const galleryImages = [];
    
    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const imgSrc = img.getAttribute('src');
        const imgAlt = img.getAttribute('alt');
        const imgTitle = item.querySelector('.item-title')?.textContent || '';
        
        galleryImages.push({
            src: imgSrc,
            alt: imgAlt,
            title: imgTitle
        });
        
        // Add click event to open lightbox
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Lightbox functions
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }
    
    function updateLightboxImage() {
        const image = galleryImages[currentImageIndex];
        lightboxImage.setAttribute('src', image.src);
        lightboxImage.setAttribute('alt', image.alt);
    }
    
    // Event listeners for lightbox controls
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', nextImage);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', prevImage);
    }
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });
    
    // Fade in animation for elements
    function handleScrollAnimation() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check for elements in view
    handleScrollAnimation();
    
    // Check for elements on scroll
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Hide loading screen after page loads
    if (loadingScreen) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingScreen.style.opacity = '0';
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1500);
        });
    }
});