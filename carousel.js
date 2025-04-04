
const images = [
    "https://www.alcamielements.com/cdn/shop/files/WhatsAppImage2023-12-07at3.45.04PM_70f8ccd0-4873-4815-a835-625ee2d4ae87.jpg?v=1709229507&width=1500",
    "https://spirulinahealthbar.com/cdn/shop/files/5_7_1e65d998-cff8-4448-97cf-b239ca62d51d.webp?v=1732904459&width=533",
    "https://spirulinahealthbar.com/cdn/shop/files/8_2_1.webp?v=1732904459&width=533",
    "https://spirulinahealthbar.com/cdn/shop/files/3_10_7b9cbb05-268a-49c5-b9b0-df509895d32e.webp?v=1732904697&width=823",
    "https://spirulinahealthbar.com/cdn/shop/files/4_8_1.webp?v=1732904697&width=1100",
    
];

let currentIndex = 0;

// Initialize carousel
document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("mainImage");
    const thumbnailContainer = document.getElementById("thumbnailContainer");
    const dotsContainer = document.getElementById("dotsContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    // Load thumbnails dynamically
    function loadThumbnails() {
        thumbnailContainer.innerHTML = ''; // Clear any existing thumbnails
        images.forEach((imgSrc, index) => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.classList.add("thumb");
            if (index === currentIndex) {
                img.classList.add("active");
            }
            img.addEventListener("click", () => {
                selectImage(index);
            });
            thumbnailContainer.appendChild(img);
        });
    }
    
    // Load navigation dots
    function loadDots() {
        dotsContainer.innerHTML = ''; // Clear any existing dots
        images.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (index === currentIndex) {
                dot.classList.add("active");
            }
            dot.addEventListener("click", () => {
                selectImage(index);
            });
            dotsContainer.appendChild(dot);
        });
    }
    
    // Update main image, active thumbnail, and active dot
    function updateImage() {
        mainImage.src = images[currentIndex];
        
        // Update active thumbnail
        document.querySelectorAll(".thumb").forEach((thumb, i) => {
            if (i === currentIndex) {
                thumb.classList.add("active");
            } else {
                thumb.classList.remove("active");
            }
        });
        
        // Update active dot
        document.querySelectorAll(".dot").forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }
    
    // Navigate to previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }
    
    // Navigate to next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }
    
    // Select image from thumbnail or dot
    function selectImage(index) {
        currentIndex = index;
        updateImage();
    }
    
    // Initialize
    loadThumbnails();
    loadDots();
    updateImage();
    
    // Add event listeners
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);
    
    // Debug - confirm event listeners are attached
    console.log("Event listeners attached to navigation buttons");
});

// Add your addToCart function here if needed
function addToCart() {
    // Implementation of add to cart functionality
    const notification = document.getElementById("notification");
    notification.textContent = "Added to cart!";
    notification.classList.remove("hidden");
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 3000);
}