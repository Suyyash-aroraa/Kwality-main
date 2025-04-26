// Testimonials Section - Kwality Restaurant

document.addEventListener('DOMContentLoaded', function() {
    // Sample testimonials data (simulating scraped Google reviews)
    // In a real implementation, this would come from a Google Reviews API or scraping service
    const testimonials = [
        {
            content: "Kwality Restaurant offers an exceptional dining experience! The ambiance is elegant, and the staff is attentive and professional. Their North Indian cuisine is authentic with perfect spice balance. The butter chicken and garlic naan were outstanding. Highly recommend for special occasions or a luxurious dinner out.",
            author: "Rahul Sharma",
            rating: 5,
            date: "2 months ago"
        },
        {
            content: "A true gem in Gwalior! I've been coming to Kwality for years and the quality has remained consistently excellent. The restaurant's decor is sophisticated and creates a wonderful atmosphere. Their paneer dishes are the best in town, and the service is always impeccable.",
            author: "Priya Patel",
            rating: 5,
            date: "1 month ago"
        },
        {
            content: "Visited Kwality during my trip to Gwalior and was thoroughly impressed. The restaurant has a rich heritage that reflects in their food and service. The dal makhani was creamy and flavorful, and their desserts are not to be missed. A must-visit for anyone in Gwalior!",
            author: "Amit Verma",
            rating: 4,
            date: "3 months ago"
        },
        {
            content: "Kwality Restaurant exceeded all my expectations. The fusion Chinese options are surprisingly authentic and delicious. The staff went above and beyond to accommodate our large family gathering. The restaurant's ambiance is perfect for both casual dining and special occasions.",
            author: "Neha Gupta",
            rating: 5,
            date: "2 weeks ago"
        },
        {
            content: "An iconic restaurant that lives up to its reputation. The food is consistently excellent, and the service is prompt and courteous. I particularly enjoyed their kebab platter and biryani. The restaurant maintains its classic charm while offering modern amenities.",
            author: "Vikram Singh",
            rating: 5,
            date: "1 month ago"
        }
    ];

    // Initialize testimonials section
    function initTestimonials() {
        const testimonialSlider = document.querySelector('.testimonial-slider');
        const dotsContainer = document.querySelector('.testimonial-dots');
        
        // Create slides and dots
        testimonials.forEach((testimonial, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
            
            // Generate stars based on rating
            let stars = '';
            for (let i = 0; i < testimonial.rating; i++) {
                stars += '★';
            }
            for (let i = testimonial.rating; i < 5; i++) {
                stars += '☆';
            }
            
            slide.innerHTML = `
                <div class="testimonial-content">${testimonial.content}</div>
                <div class="testimonial-author">
                    <div class="author-name">${testimonial.author}</div>
                    <div class="author-rating">${stars}</div>
                    <div class="author-date">${testimonial.date}</div>
                </div>
            `;
            
            testimonialSlider.appendChild(slide);
            
            // Create dot
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => showSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        // Set up navigation buttons
        document.querySelector('.prev-btn').addEventListener('click', prevSlide);
        document.querySelector('.next-btn').addEventListener('click', nextSlide);
        
        // Auto-rotate slides
        setInterval(nextSlide, 7000);
    }
    
    // Show specific slide
    function showSlide(index) {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');
        
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Deactivate all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Calculate the correct index (for looping)
        const slideIndex = (index + slides.length) % slides.length;
        
        // Show the selected slide and activate dot
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
        
        // Update current slide index
        currentSlide = slideIndex;
    }
    
    // Navigate to previous slide
    function prevSlide() {
        const slides = document.querySelectorAll('.testimonial-slide');
        showSlide(currentSlide - 1);
    }
    
    // Navigate to next slide
    function nextSlide() {
        const slides = document.querySelectorAll('.testimonial-slide');
        showSlide(currentSlide + 1);
    }
    
    // Track current slide
    let currentSlide = 0;
    
    // Initialize when DOM is fully loaded
    if (document.querySelector('.testimonial-slider')) {
        initTestimonials();
    }
});