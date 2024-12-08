// Select overlay and close button
const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
const closeFullscreen = document.querySelector('.fullscreen-close');

// Function to show fullscreen
function openFullscreen(content) {
    // Clear previous content
    const overlayContent = fullscreenOverlay.querySelector('.fullscreen-content');
    if (overlayContent) overlayContent.remove();

    // Create new content element
    let newContent;
    if (content.tagName === "IFRAME") {
        newContent = document.createElement('iframe');
        newContent.src = content.src;
        newContent.frameBorder = "0";
        newContent.allowFullscreen = true;
        newContent.classList.add('fullscreen-content');
    } else {
        newContent = document.createElement('img');
        newContent.src = content.src;
        newContent.alt = "Fullscreen Content";
        newContent.classList.add('fullscreen-content');
    }

    // Add content to overlay
    fullscreenOverlay.appendChild(newContent);
    fullscreenOverlay.classList.add('active');
}

// Function to close fullscreen
function closeFullscreenOverlay() {
    fullscreenOverlay.classList.remove('active');
    // Remove fullscreen content
    const overlayContent = fullscreenOverlay.querySelector('.fullscreen-content');
    if (overlayContent) overlayContent.remove();
}

// Add click event for images, videos, and memes
document.querySelectorAll('.meme-item img, .video-item iframe, .image-item img').forEach((item) => {
    item.addEventListener('click', () => openFullscreen(item));
});

// Add click event to close fullscreen
closeFullscreen.addEventListener('click', closeFullscreenOverlay);

// Close fullscreen on overlay click
fullscreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenOverlay) closeFullscreenOverlay();
});





document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Toggle visibility
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});


document.getElementById('burgerMenu').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
});


const memeWrapper = document.getElementById("memeWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollPosition = 0;
const memeWidth = memeWrapper.querySelector(".meme-item").offsetWidth + 20; // Item width + gap

prevBtn.addEventListener("click", () => {
  scrollPosition = Math.min(scrollPosition + memeWidth, 0); // Prevent scrolling beyond start
  memeWrapper.style.transform = `translateX(${scrollPosition}px)`;
});

nextBtn.addEventListener("click", () => {
  const maxScroll =
    -(memeWrapper.scrollWidth - memeWrapper.clientWidth); // Calculate max scroll
  scrollPosition = Math.max(scrollPosition - memeWidth, maxScroll); // Prevent scrolling beyond end
  memeWrapper.style.transform = `translateX(${scrollPosition}px)`;
});


document.addEventListener("DOMContentLoaded", () => {
    // Animate images (zoom effect with text shadow)
    const imageItems = document.querySelectorAll(".image-item img");
    imageItems.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.1)";
        image.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        image.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
      });
      image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
        image.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      });
    });
  
    // Animate videos (dim others and highlight on hover)
    const videoItems = document.querySelectorAll(".video-item");
    videoItems.forEach((video) => {
      video.addEventListener("mouseenter", () => {
        videoItems.forEach((v) => {
          if (v !== video) {
            v.style.opacity = "0.5";
          }
        });
        video.style.transform = "scale(1.05)";
        video.style.transition = "transform 0.3s ease, opacity 0.3s ease";
      });
      video.addEventListener("mouseleave", () => {
        videoItems.forEach((v) => {
          v.style.opacity = "1";
        });
        video.style.transform = "scale(1)";
      });
    });
  
    // Animate memes (zoom effect with rotation)
    const memeItems = document.querySelectorAll(".meme-item img");
    memeItems.forEach((meme) => {
      meme.addEventListener("mouseenter", () => {
        meme.style.transform = "scale(1.1) rotate(3deg)";
        meme.style.transition = "transform 0.3s ease";
      });
      meme.addEventListener("mouseleave", () => {
        meme.style.transform = "scale(1) rotate(0deg)";
      });
    });
  
    // Add hover animation to navigation links
    const navLinks = document.querySelectorAll(".desktop-menu a, .mobile-menu a");
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.style.color = "#38ef7d";
        link.style.textShadow = "0 0 10px #38ef7d";
        link.style.transition = "color 0.3s ease, text-shadow 0.3s ease";
      });
      link.addEventListener("mouseleave", () => {
        link.style.color = "#fff";
        link.style.textShadow = "none";
      });
    });
  
    // Animate burger menu icon (simple rotation)
    const burgerMenu = document.getElementById("burgerMenu");
    burgerMenu.addEventListener("mouseenter", () => {
      burgerMenu.style.transform = "rotate(90deg)";
      burgerMenu.style.transition = "transform 0.3s ease";
    });
    burgerMenu.addEventListener("mouseleave", () => {
      burgerMenu.style.transform = "rotate(0deg)";
    });
  });
  
  