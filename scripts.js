document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-container");
  const videoCards = document.querySelectorAll(".video-card");
  const prevBtn = document.querySelector(".scroll-btn.prev");
  const nextBtn = document.querySelector(".scroll-btn.next");

  let currentIndex = 0; // Index of the currently highlighted video
  let isPausedByUser = false; // Flag to check if video was paused by user

  // Function to update the video slider
  function updateSlider() {
    videoCards.forEach((card, index) => {
      card.style.transform = `scale(0.8)`; // Smaller size
      card.style.opacity = `0.5`; // Dull effect
      card.style.zIndex = `0`;

      // Highlight the current video
      if (index === currentIndex) {
        card.style.transform = `scale(1)`; // Full size
        card.style.opacity = `1`; // Full visibility
        card.style.zIndex = `10`; // Bring to front
      }

      // Arrange videos in a circular manner
      const offset = index - currentIndex;
      card.style.transform += ` translateX(${offset * 120}%)`; // Space between videos
    });
  }

  // Function to go to the previous video
  function goToPrevious() {
    if (!isPausedByUser) {
      currentIndex = (currentIndex - 1 + videoCards.length) % videoCards.length; // Circular index
      updateSlider();
    }
  }

  // Function to go to the next video
  function goToNext() {
    if (!isPausedByUser) {
      currentIndex = (currentIndex + 1) % videoCards.length; // Circular index
      updateSlider();
    }
  }

  // Event listeners for buttons
  prevBtn.addEventListener("click", goToPrevious);
  nextBtn.addEventListener("click", goToNext);

  // Add event listeners to video iframes
  videoCards.forEach((card) => {
    const iframe = card.querySelector("iframe");
    const player = new YT.Player(iframe, {
      events: {
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            isPausedByUser = true; // Stop auto-scroll when playing
          } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
            isPausedByUser = false; // Resume auto-scroll when paused or ended
          }
        },
      },
    });
  });

  // Auto-play functionality
  setInterval(() => {
    if (!isPausedByUser) {
      goToNext();
    }
  }, 5000); // Change video every 5 seconds

  // Initialize slider on page load
  updateSlider();
});
