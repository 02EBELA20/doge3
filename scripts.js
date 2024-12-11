document.addEventListener('DOMContentLoaded', () => {
  // Burger menu functionality
  const burgerMenu = document.getElementById('burgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  burgerMenu.addEventListener('click', () => {
    const isVisible = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) mobileMenu.style.flexDirection = 'column';
  });

  // Video hover functionality
  const videoItems = document.querySelectorAll('.video-item');
  videoItems.forEach((videoItem) => {
    const video = videoItem.querySelector('iframe');
    const text = videoItem.querySelector('p');

    videoItem.addEventListener('mouseenter', () => {
      video.style.transform = 'scale(1.1)';
      video.style.transition = 'transform 0.3s ease-in-out';
      text.style.opacity = '1';
      text.style.transform = 'translateY(0)';
      text.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';

      videoItems.forEach((otherItem) => {
        if (otherItem !== videoItem) {
          const otherVideo = otherItem.querySelector('iframe');
          otherVideo.style.filter = 'brightness(0.5)';
          otherVideo.src = otherVideo.src; // Pause other videos
        }
      });
    });

    videoItem.addEventListener('mouseleave', () => {
      video.style.transform = 'scale(1)';
      text.style.opacity = '0';
      text.style.transform = 'translateY(10px)';

      videoItems.forEach((otherItem) => {
        const otherVideo = otherItem.querySelector('iframe');
        otherVideo.style.filter = 'brightness(1)';
      });
    });
  });

  // Meme hover effect
  const memeItems = document.querySelectorAll('.meme-item img');
  memeItems.forEach((memeImage) => {
    memeImage.addEventListener('mouseenter', () => {
      memeImage.style.transform = 'scale(1.1) rotate(3deg)';
      memeImage.style.transition = 'transform 0.3s ease-in-out';
    });
    memeImage.addEventListener('mouseleave', () => {
      memeImage.style.transform = 'scale(1) rotate(0)';
    });
  });

  // Fullscreen functionality
  const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
  const closeFullscreen = document.querySelector('.fullscreen-close');

  document.querySelectorAll('.image-item, .meme-item').forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const text = item.querySelector('p') ? item.querySelector('p').textContent : '';

      fullscreenOverlay.innerHTML = `
        <button class="fullscreen-close">&times;</button>
        <img src="${img.src}" alt="Fullscreen Image" class="fullscreen-content">
        <p class="fullscreen-text">${text}</p>
      `;
      fullscreenOverlay.style.visibility = 'visible';
      fullscreenOverlay.style.opacity = '1';

      fullscreenOverlay.querySelector('.fullscreen-close').addEventListener('click', () => {
        fullscreenOverlay.style.visibility = 'hidden';
        fullscreenOverlay.style.opacity = '0';
      });
    });
  });

  fullscreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenOverlay) {
      fullscreenOverlay.style.visibility = 'hidden';
      fullscreenOverlay.style.opacity = '0';
    }
  });

  // FAQ Section functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        button.parentElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      } else {
        document.querySelectorAll('.faq-answer').forEach((otherAnswer) => {
          otherAnswer.style.display = 'none';
        });
        answer.style.display = 'block';
        button.parentElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
      }
    });
  });
});
