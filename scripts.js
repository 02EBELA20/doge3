
// Adding interactivity to the slider
document.addEventListener('DOMContentLoaded', function() {
    const buyNowButton = document.querySelector('.buy-now');
    buyNowButton.addEventListener('click', () => {
        alert('Redirecting to buy page!');
    });
});

// Optional: Advanced Animation for Video Scaling
document.addEventListener('DOMContentLoaded', () => {
  const videoContainers = document.querySelectorAll('.video-container');
  videoContainers.forEach((container) => {
      container.addEventListener('mouseenter', () => {
          container.style.transition = 'transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out';
          container.style.transform = 'scale(1.2)';
      });

      container.addEventListener('mouseleave', () => {
          container.style.transform = 'scale(1)';
      });
  });
});
