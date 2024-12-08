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
